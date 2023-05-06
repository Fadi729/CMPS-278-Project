import React, {ReactNode, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getMoviesAsync } from "../features/moviesSlice";
import Movie from "../data/Interfaces/Movies";
import { MdChevronLeft, MdChevronRight, MdStarRate } from "react-icons/md";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import useNavbarContext from "../contexts/NavbarContext";
import RouteTo from "../data/Routes";
import { useParams } from "react-router-dom";
var comma = new Intl.NumberFormat();


const Section = ({ section}: { section: string; }) => {
	const {movies} = useAppSelector((state) => state.Movies);
    const { genre } = useParams<{ genre: string }>();
	const navigate = useNavigate()
	function toMoviePage(id: string): void {
		navigate(RouteTo.MovieDetailsPage(id))
	}
	
  return (
			<div className="mb-7"  style={{width: '1160px', marginLeft:'-76px', paddingRight:'-30px'}}>
				<h1 className="leading-6 font-google font-small" style={{marginLeft:'12px', fontSize:'19px', color:"#1e1e1e", fontWeight:'500'}}>{section}</h1>
                <h2 className="ml-3 mb-5" style={{fontSize:'14px', color:'grey', fontWeight:'500'}}>Popular with similar viewers</h2>
					{movies.filter((movie)=>movie.genres.includes(genre+''))
						.slice(0, 7)
						.map((app) => (
							<div key={app.id} onClick={() => toMoviePage(""+app.id)} className="shrink-0 p-3 w-40 h-fit hover:bg-[#f5f5f5] rounded-lg snap-start" style={{width:'196.7px', display:'inline-block'}}>
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
			</div>
  );
};

const SimilarMovies = () => {
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

    console.log("SIMILAR MOVIEEEEEEEEEEEEEEES")
	return (
		<div ref={targetRef} className="relative top-16">
			<Section section="Similar Movies"/>
		</div>
	);
};

export default SimilarMovies;