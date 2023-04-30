import React, {ReactNode, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getMoviesAsync } from "../features/moviesSlice";
import Movie from "../data/Interfaces/Movies";
import { MdChevronLeft, MdChevronRight, MdStarRate } from "react-icons/md";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import useNavbarContext from "../contexts/NavbarContext";
import RouteTo from "../data/Routes";
var comma = new Intl.NumberFormat();
const ScrollButton=({
	Icon,
	direction,
	handleArrowClick
}:{
	Icon: IconType,
	direction: "right"|"left";
	handleArrowClick: (distance: number) => void
}) => {
	const scrollAmount = direction === "right"? 800: -800;
	return (
		<button
			style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)"}}
			className={`absolute top-[33%] transform -translate-y-1/2 z-10 rounded-[28px] bg-white h-14 w-14 text-gray-600 cursor-pointer ${
				direction === "right" ? "-right-4" : "-left-4"
			}`}
			onClick={() => handleArrowClick(scrollAmount)}
		>
			<div className="flex justify-center">
				<Icon size="30" />
			</div>
		</button>
	);
};

const HorizontalScroll=({children}:{children: ReactNode})=> {
	const containerRef=useRef<HTMLDivElement>(null);

	const [leftPointer, setLeftPointer] = useState(0);
	const [rightPointer, setRightPointer] = useState(7);
	const [isOver, setIsOver] = useState(false);

	const handleArrowClick = (distance: number) => {
		if (containerRef.current) {
			containerRef.current.scrollBy({
				left: distance,
				behavior: "smooth",
			});
			if (distance > 0) {
				setLeftPointer((prev) => prev + 5);
				setRightPointer((prev) => prev + 5);
			} else {
				setLeftPointer((prev) => prev - 5);
				setRightPointer((prev) => prev - 5);
			}
		}
	};

	return (
		<div className="relative" onMouseEnter={() => setIsOver(true)} onMouseLeave={() => setIsOver(false)}>
			<style>
				{`
			/* Hide scrollbar for Chrome, Safari and Opera */
			.container-snap::-webkit-scrollbar {
			  display: none;
			}
  
			/* Hide scrollbar for IE, Edge and Firefox */
			.container-snap {
			  -ms-overflow-style: none; /* IE and Edge */
			  scrollbar-width: none; /* Firefox */
			}
		  `}
			</style>
			<div className="flex overflow-x-auto gap-0.5 container-snap snap-x snap-mandatory" ref={containerRef}>
				{children}
			</div>
			{leftPointer > 0 && isOver && <ScrollButton Icon={MdChevronLeft} direction="left" handleArrowClick={handleArrowClick} />}
			{rightPointer < 20 && isOver && <ScrollButton Icon={MdChevronRight} direction="right" handleArrowClick={handleArrowClick} />}
		</div>
	);
};

const Section = ({ section, filter }: { section: string; filter: (arr: Movie[]) => Movie[] }) => {
	const {movies} = useAppSelector((state) => state.Movies);
	const navigate = useNavigate()
	function toMoviePage(id: string): void {
		navigate(RouteTo.MovieDetailsPage(id))
	}
	
  return (
	<>
		{true && (
			<div className="mb-7"  style={{width: '1160px', marginLeft:'-76px', paddingRight:'-30px'}}>
				<h1 className="leading-6 font-google font-small mb-4 " style={{marginLeft:'12px', fontSize:'19px', color:"#1e1e1e", fontWeight:'500'}}>{section}</h1>
				<HorizontalScroll>
					{filter(movies)
						.slice(0, 20)
						.map((app) => (
							<div key={app.id} onClick={() => toMoviePage(''+app.id)} className="shrink-0 p-3 w-40 h-fit hover:bg-[#f5f5f5] rounded-lg snap-start" style={{width:'196.7px', marginRight:'-10px'}}>
								<img
									src={app.image.replace("._V1_SX101_CR0,0,101,150_","").replace("._V1_SY150_CR0,0,101,150_","").replace("._V1_SY150_CR2,0,101,150_","").replace("._V1_SY150_CR1,0,101,150_","").replace("._V1_SY150_SX101_","").replace("._V1_SY150_CR3,0,101,150_","")!}
									className="rounded-[1%] mb-2"
									style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)", height: '247px', width:'500px' }}
								/>
								<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-0.8 mt-3" style={{color:'#2e2e2e'}}>{app.title}</p>
								<div className="flex text-[#5f6368] text-sm">
									<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{"LBP "+comma.format(parseInt(app.price)*10000)}</p>
								</div>
							</div>
						))}
				</HorizontalScroll>
			</div>
		)}
	</>
  );
};

const Movies = () => {
	const dispatch = useAppDispatch();
	const { movies} = useAppSelector((state) => state.Movies);
	const { targetRef, setTopValue, topValue } = useNavbarContext();
	async function getMovies() {
		await dispatch(getMoviesAsync());
	}

	useEffect(() => {
		if (Object.keys(movies).length === 0) {
			getMovies();
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const rect = targetRef.current?.getBoundingClientRect();
			setTopValue(rect!.top);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [topValue]);

	return (
		<>
		{true && (
		<div ref={targetRef} className="relative top-16">
			<Section section="New movies" filter={(arr: Movie[])=> arr} />
			<Section section="Top-Selling movies" filter={(arr: Movie[]): Movie[] => [...arr].sort((a, b) => (parseInt(b.sales) ?? 0) - (parseInt(a.sales) ?? 0))} />
			<Section section="Recommended for you" filter={(arr: Movie[]): Movie[] => [...arr].sort((a, b) => (parseFloat(b.rating) ?? 0) - (parseFloat(a.rating) ?? 0))} />
		</div>
		)}
		</>
	);
};

export default Movies;