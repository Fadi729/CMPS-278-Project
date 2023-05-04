import React, {useState, useEffect, useRef} from 'react';
import {useAppSelector, useAppDispatch } from "../hooks";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RouteTo from "../data/Routes";
import useNavbarContext from "../contexts/NavbarContext";
import { getMoviesAsync } from "../features/moviesSlice";
import { getBooksAsync } from "../features/booksSlice";
import { getGamesAsync } from "../features/gamesSlice";
import { getApplicationsAsync } from "../features/applicationsSlice";
import { MdStarRate } from "react-icons/md";


const Search = () => {
    
    const [appGame, setAppGame]=useState(true)
    const [movie, setMovie]=useState(false)
    const [book, setBook]=useState(false)

    const {movies} = useAppSelector((state) => state.Movies);
    const {books} = useAppSelector((state) => state.Books);
    const {applications} = useAppSelector((state) => state.Applications);
    const {games} = useAppSelector((state) => state.Games);
    const { key } = useParams<{ key: string }>();
    
    const navigate=useNavigate();
    const dispatch = useAppDispatch();
    var comma = new Intl.NumberFormat();
    const { targetRef } = useNavbarContext();

	async function getMovies() {
		await dispatch(getMoviesAsync());
	}

    async function getBooks(){
        await dispatch(getBooksAsync());
    }

    async function getGames(){
        await dispatch(getGamesAsync());
    }

    async function getApplications(){
        await dispatch(getApplicationsAsync());
    }

    var appsGames= [... games, ... applications]

	useEffect(() => {
		if (Object.keys(movies).length === 0) {
			getMovies();
		}
	}, []);

    useEffect(() => {
		if (Object.keys(books).length === 0) {
			getBooks();
		}
	}, []);

    useEffect(() => {
		if (Object.keys(games).length === 0) {
			getGames();
		}
	}, []);

    useEffect(() => {
		if (Object.keys(applications).length === 0) {
			getApplications();
		}
	}, []);

    function toMoviePage(id: string): void {
		navigate(RouteTo.MovieDetailsPage(id))
	}

	function toAppPage(appId: string): void {
		navigate(RouteTo.AppDetailsPage(appId));
	}
    
    function handleAppsGames(){
        setAppGame(true)
        setMovie(false)
        setBook(false)
    }
    function handleMovies(){
        setAppGame(false)
        setMovie(true)
        setBook(false)
    }
    function handleBooks(){
        setAppGame(false)
        setMovie(false)
        setBook(true)
    }

    const sr =function searchByDescIfEmpty(category: any, list: any){
        if(list.length==0){
            return category.filter((elt: any) => elt.description.toLowerCase().includes(key+''))
        }else{
            return list
        }
    }
    
    return(
        <>
        <div style={{display:'flex', flexDirection:'row', marginTop:'42px', marginLeft:'-40px'}}>
            <div className={appGame?"text-[#01875f] bg-[#dff5e6] hover:bg-[#c5e3cf] border-solid": "border-solid border-1 border-[#d1cfcf] text-[#706f6f] hover:bg-[#f2f2f2]"  } onClick={handleAppsGames} style={{borderRadius:'20px 20px 20px 20px', width:'fit-content', padding:'5px 20px 5px 20px', fontSize:'14px', fontWeight:'500', marginRight:'10px'}}>Apps & games</div>
            <div className={movie?"text-[#c71c56] bg-[#fce9e3] hover:bg-[#f7ddd5] border-solid": "border-solid border-1 border-[#d1cfcf] text-[#706f6f] hover:bg-[#f2f2f2]"  }  onClick={handleMovies} style={{borderRadius:'20px 20px 20px 20px', width:'fit-content', padding:'5px 20px 5px 20px', fontSize:'14px', fontWeight:'500', marginRight:'10px'}}>Movies</div>
            <div className={book?"text-[#0179ca] bg-[#ebedfa] hover:bg-[#dee2fa] border-solid": "border-solid border-1 border-[#d1cfcf] text-[#706f6f] hover:bg-[#f2f2f2]"  }  onClick={handleBooks} style={{borderRadius:'20px 20px 20px 20px', width:'fit-content', padding:'5px 20px 5px 20px', fontSize:'14px', fontWeight:'500'}}>Books</div>
        </div>
        { movie &&
            <div className="mb-7"  style={{width: '1160px', marginLeft:'-76px', paddingRight:'-30px'}}>
                {movies.filter((movie: any)=> {
                    movie.title.toLowerCase()+''.includes(key?.toLowerCase()+'')
                })
                    .map((app: any) => (
                        <div key={app.id} onClick={() => toMoviePage(""+app.id)} className="shrink-0 p-3 w-40 h-fit hover:bg-[#f5f5f5] rounded-lg snap-start" style={{width:'196.7px', display:'inline-block', verticalAlign:'top'}}>
                            <img
                                src={app.image.replace("._V1_SX101_CR0,0,101,150_","").replace("._V1_SY150_CR0,0,101,150_","").replace("._V1_SY150_CR2,0,101,150_","").replace("._V1_SY150_CR1,0,101,150_","").replace("._V1_SY150_SX101_","").replace("._V1_SY150_CR3,0,101,150_","")!}
                                className="rounded-[1%] mb-2"
                                style={{boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)", height: '247px', width:'500px' }}
                            />
                            <p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-0.8 mt-3" style={{color:'#2e2e2e'}}>{app.title}</p>
                            <div className="flex text-[#5f6368] text-sm">
                                <p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{"LBP "+comma.format(parseInt(app.price)*10000)}</p>
                            </div>
                        </div>
                    ))}
        </div>
        }
        { appGame && 
            <div className="mb-7"  style={{width: '1160px', marginLeft:'-76px', paddingRight:'-30px'}}>
            {appsGames.filter((app)=>{
                app.title?.toLowerCase().includes(key?.toLowerCase()+'')
                app.genre?.toLowerCase().includes(key?.toLowerCase()+'')
            })
                .map((app) => (
                    <div
									key={app.appId}
									onClick={() => toAppPage(app.appId)}
									className="shrink-0 p-3 w-40 h-fit hover:bg-[#f5f5f5] rounded-lg snap-start"
                                    style={{display:'inline-block'}}
								>
									<img
										src={app.icon!}
										className="rounded-[20%] mb-2"
										style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)" }}
									/>
									<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-2">{app.title}</p>
									<div className="flex text-[#5f6368] text-sm">
										<p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{app.scoreText}</p>
										<MdStarRate />
									</div>
								</div>
                ))}
            </div>
        }
        { book && 
            <div className="mb-7"  style={{width: '1160px', marginLeft:'-76px', paddingRight:'-30px'}}>
            {books.filter((book)=>{
                book.title.toLowerCase().includes(key?.toLowerCase()+'')
                book.categories?.toLowerCase().includes(key?.toLowerCase()+'')
            })
                .map((book) => (
                    <div key={book.id} onClick={() => toMoviePage(""+book.id)} className="shrink-0 p-3 w-40 h-fit hover:bg-[#f5f5f5] rounded-lg snap-start" style={{width:'196.7px', display:'inline-block', verticalAlign:'top'}}>
                        <img
                            src={book.image+''}
                            className="rounded-[1%] mb-2"
                            style={{boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)", height: '247px', width:'500px' }}
                        />
                        <p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-0.8 mt-3" style={{color:'#2e2e2e'}}>{book.title}</p>
                        <div className="flex text-[#5f6368] text-sm">
                            <p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{book.authors}</p>
                        </div>
                    </div>
                ))}
            </div>
        }
        </>
    )
}

export default Search;