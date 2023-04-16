import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getMoviesAsync } from "../features/moviesSlice";
import Movie from "../data/Interfaces/Movies";
import { MdStarRate } from "react-icons/md";

const Section = ({ section, filter }: { section: string; filter: (arr: Movie[]) => Movie[] }) => {
	const {movies} = useAppSelector((state) => state.Movies);
  console.log(movies.length)
	return (
		<div className="mb-2">
			<h1 className="text-lg leading-6 font-google font-medium mb-5 text-center">{section}</h1>

			{true && (
				<>
					<div className="flex gap-2 justify-center overflow-x-auto font-fontAlt">
						{filter(movies)
							.slice(0, 10)
							.map((app) => (
								<>
									{console.log(section, app)}
                  
									<div key={app.id} className="shrink-0 p-3 w-28 hover:bg-[#f5f5f5] rounded-lg">
										<img
											src={app.image}
											className="rounded-[3%] mb-2"
											style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)"}}
										/>
										<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-2">{app.title}</p>
										<div className="flex text-[#5f6368] text-sm">
											<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{"$ "+app.price}</p>
                      
										</div>
									</div>
								</>
							))}
					</div>
				</>
			)}
		</div>
	);
};

const Movies = () => {
	const dispatch = useAppDispatch();

	async function getMovies() {
		await dispatch(getMoviesAsync());
	}

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className="relative top-16">
			<Section section="Top Selling" filter={(arr: Movie[]): Movie[] => [...arr].sort((a, b) => (parseInt(b.sales) ?? 0) - (parseInt(a.sales) ?? 0))} />
			<Section section="New releases" filter={(arr: Movie[])=> arr} />
			<Section section="Recommended" filter={(arr: Movie[]): Movie[] => [...arr].sort((a, b) => (parseFloat(b.rating) ?? 0) - (parseFloat(a.rating) ?? 0))} />
		</div>
	);
};

export default Movies;