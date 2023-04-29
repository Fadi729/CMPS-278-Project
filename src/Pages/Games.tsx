import {ReactNode, useEffect, useRef, useState} from 'react'
import { getGamesAsync } from "../features/gamesSlice";
import { Game } from "../data/Interfaces/Games";
import { useAppSelector, useAppDispatch } from '../hooks';
import { IconType } from "react-icons";
import { MdChevronLeft, MdChevronRight, MdStarRate } from "react-icons/md";

const ScrollButton = ({
	Icon,
	direction,
	handleArrowClick,
}: {
	Icon: IconType;
	direction: "right" | "left";
	handleArrowClick: (distance: number) => void;
}) => {
	const scrollAmount = direction === "right" ? 800 : -800;

	return (
		<button
			style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
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

const HorizontalScroll = ({ children }: { children: ReactNode }) => {
	const containerRef = useRef<HTMLDivElement>(null);

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

const Section = ({section, filter} : {section: string; filter: (arr: Game[]) => Game[] }) => {
  const {games, isLoading} = useAppSelector((state) => state.Games);

  return (
		<div className="mb-2">
			<h1 className="text-lg leading-6 font-google font-medium mb-5 text-center">{section}</h1>

			{!isLoading && (
				<>
					<HorizontalScroll>
						{filter(games)
							.slice(0, 10)
							.map((app) => (
								<>
									{console.log(section, app)}
									
									<div key={app.appId} className="shrink-0 p-3 w-96 hover:bg-[#f5f5f5] rounded-lg">
										<div className=" max-w-sm rounded-md mb-2">
											{app.video ? (
											<>
											<img
												src={app.videoImage! //{`https://ytimg.googleusercontent.com/vi/${
													//app.video!.split(/d\/(.+)\?/)[1]
												  //}/sddefault.jpg`}
												}
												className="rounded-[5%]"/>
											</>):(<>
											<img
												src={app.screenshots![0]}
												className="rounded-[5%]"/>
											</>)}
										
										</div>
										<div className="flex">
											<img
												src={app.icon!}
												className="rounded-[20%] mb-2 w-20"
												style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
											/>
											<div className="ml-4 mt-2">
												<div>
												<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{app.title}</p>
												</div>
												<div className="flex text-[#5f6368] text-sm">
													<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{app.genre}</p>
												</div>
												<div className="flex text-[#5f6368] text-sm">
													<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{app.scoreText}</p>
							<MdStarRate />
												</div>
											</div>
										</div>
									</div>
								</>
							))}
						</HorizontalScroll>
				</>
			)}
		</div>
	);

};

const Games = () => {
  const dispatch = useAppDispatch();

  async function getGames(){
    await dispatch(getGamesAsync());
  }

  useEffect(() =>{
    getGames();
  }, []);

  return (
    <div className='relative top-16'>
      <Section 
        section="Top Selling"
        filter={(arr: Game[]): Game[] => [...arr].sort((a, b) => (b.maxInstalls ?? 0) - (a.maxInstalls ?? 0))}
      />
      <Section
				section="New Releases"
				filter={(arr: Game[]): Game[] => [...arr].sort((a, b) => parseInt(b.released ?? "0") - parseInt(a.released ?? "0"))}
			/>
			<Section section="Recommended" filter={(arr: Game[]): Game[] => [...arr].sort((a, b) => (b.score ?? 0) - (a.score ?? 0))} />

    </div>
  )
}

export default Games