import React, {ReactNode, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getMoviesAsync } from "../features/moviesSlice";
import Movie from "../data/Interfaces/Movies";
import { useParams } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import { MdStarRate } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useNavbarContext from "../contexts/NavbarContext";
import RouteTo from "../data/Routes";
import ReactStars from 'react-stars';
var comma = new Intl.NumberFormat();
import { contains } from "cheerio/lib/static";
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Trailer=() =>{
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();
    const currID=id
    const { movies } = useAppSelector((state) => state.Movies);
    const { targetRef, setTopValue, topValue } = useNavbarContext();
    console.log(reviews)
    
	async function getMovies() {
		await dispatch(getMoviesAsync());
	}
	useEffect(() => {
		if (Object.keys(movies).length === 0) {
			getMovies();
		}
	}, []);

    const movie = movies.find((movie) => ""+movie.id == id);
    
      
    console.log(movies)
    function changeBackground(e: any) {
        e.target.style.backgroundColor = '#c4938f';
    }
    function changeBackgroundBack(e: any) {
        e.target.style.backgroundColor = '#e33659';
        
    }
    function changeBackground1(e: any) {
        e.target.style.backgroundColor = '#383a4d';
    }
    function changeBackgroundBack1(e: any) {
        e.target.style.backgroundColor = 'transparent';
        
    }
    function changeBackground2(e: any) {
        e.target.style.backgroundColor = '#f2f2f2';
    }
    const navigate = useNavigate()
    function toMoviePage(id: string): void {
		navigate(RouteTo.MovieDetailsPage(id))
	}
    var reviews=JSON.parse(movie?.reviews+'')
    console.log(reviews[0])
    const genre=movie?.genres.split(",")[0].slice(2,-1);
    function toSimilarMoviesPage(genre: string): void {
		navigate(RouteTo.SimilarMoviesPage(genre))
        console.log("going to similar movies")
	}
    function filter(arr: Movie[], ct: string){ return [...arr].sort((a, b) => (parseInt(b.sales) ?? 0) - (parseInt(a.sales) ?? 0))}
    const bg='linear-gradient(90deg,#242424,#242424,transparent,transparent,transparent,#242424),url('+movie?.image.replace("._V1_SX101_CR0,0,101,150_","").replace("._V1_SY150_CR0,0,101,150_","").replace("._V1_SY150_CR2,0,101,150_","").replace("._V1_SY150_CR1,0,101,150_","").replace("._V1_SY150_SX101_","").replace("._V1_SY150_CR3,0,101,150_","")!+')';


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showTrailer, setShowTrailer] = useState(false);

    const handleCloseTrailer = () => setShowTrailer(false);
    const handleShowTrailer = () => setShowTrailer(true);

    const [showReviews, setShowReviews] = useState(false);

    const handleCloseReviews = () => setShowReviews(false);
    const handleShowReviews = () => setShowReviews(true);
    

    
    const temp="http://www.imdb.com/video/imdb/vi3712337177/imdb/embed?autoplay=false&width=320"
    const oldAdd=temp.split("/imdb/")[1]
    const newAdd=movie?.trailer.split("/videoplayer/")[1]+''
    console.log(newAdd)
    console.log("printed")

    return(
        <div>
            {showReviews && 
                <Modal  show={showReviews} onHide={handleCloseReviews}> 
                    <Modal.Header style={{width:'700px', background:'white', marginRight:'600px', marginLeft:'-100px'}}>
                    <Modal.Title>{movie?.title}<br></br><span style={{fontSize:'14px', color:'grey'}}>Ratings and reviews</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{background:'white', height:'400px', overflow:'auto', width:'700px', marginRight:'400px', marginLeft:'-100px'}}>
                    {reviews
						.map((review: any) => (
							<div key={review['content']} className="shrink-0 p-3 w-40 h-fit rounded-lg snap-start" >
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <img src='https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg' style={{width:'35px',height:'35px', borderRadius:'50% 50% 50% 50%'}}></img>
                                    <div className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt" style={{marginTop:'10px', marginLeft:'20px'}}>{review['author']}</div>
                                </div>
                                <div style={{display:'flex', flexDirection:'row'}}> 
                                    <div style={{minWidth:'90px'}}><ReactStars edit={false} count={5} value={review['rating']/2!} size={15} color2={'#e33659'}/></div>
                                    <div  style={{marginTop:'5px', color:'#706f6f', fontSize:'11px', fontWeight:'500', minWidth:'fit-content'}}>{review['date']}</div>
                                </div>
                                <div style={{minWidth:'600px'}}>
                                    <p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-0.8 mt-3" style={{color:'#706f6f'}}>{review['content']}</p>
                                    <p style={{marginTop:'10px', fontSize:'12.5px', color:'#706f6f'}}>{review['helpful']+" people found this review helpful."}</p>
                                </div>
							</div>
						))}
                    </Modal.Body>                 
                </Modal> 

            }
            {showTrailer && 
                <Modal  show={showTrailer} onHide={handleCloseTrailer} style={{backgroundColor:'transparent'}}> 
                    <Modal.Body style={{backgroundColor:'black'}}>
                    <iframe style={{marginLeft:'30px', padding:'0px'}} width="660" height="315" src={temp.replaceAll(oldAdd,newAdd)} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </Modal.Body>                 
                </Modal> 

            }
            {show &&
                <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton style={{width:'700px', background:'white', marginRight:'600px', marginLeft:'-100px'}}>
                        <Modal.Title>{movie?.title}<br></br><span style={{fontSize:'14px', color:'grey'}}>About this movie</span></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{background:'white', height:'400px', overflow:'auto', width:'700px', marginRight:'400px', marginLeft:'-100px'}}>
                        <Row style={{fontSize:'15px', padding:'10px', color:'grey', marginBottom:'20px'}}>{movie?.description}</Row>
                        <h2 style={{fontWeight:'500', marginBottom:'15px'}}>Cast & credits</h2>
                        <h3 style={{fontWeight:'500', marginBottom:'5px'}}>Actors</h3>
                        <p style={{fontSize:'12px', color:'grey', marginBottom:'20px'}}>{movie?.cast.replaceAll("', '"," , ").replaceAll("['"," ").replaceAll("']",'')}</p>
                        <h3 style={{fontWeight:'500', marginBottom:'5px'}}>Credits</h3>
                        {movie?.credits.split("'], '").map((e) => {
                            return (
                                <div style={{marginBottom:'10px', fontSize:'12px', color:'grey'}}>{e.replaceAll("', '"," , ").replaceAll("'","").replaceAll("[","").replaceAll("}","").replaceAll("{","").replaceAll("]","")}</div>
                            )
                        }
                            
                        )}
                        </Modal.Body>
                        
                    </Modal>
            }
            <div style={{backgroundImage:bg, backgroundSize:'60%',backgroundPosition:'20% 20%', backgroundRepeat:'no-repeat',backgroundColor:'#242424', color:"white",margin:"-10px", width:'2000px', height:'640px',marginLeft:'-120px',marginTop:'-49px'}}>
                <div style={{paddingTop:'215px',paddingLeft:'80px',display:'flex',flexDirection:'row'}}>
                    <div>
                    <img src={movie?.image.replace("._V1_SX101_CR0,0,101,150_","").replace("._V1_SY150_CR0,0,101,150_","").replace("._V1_SY150_CR2,0,101,150_","").replace("._V1_SY150_CR1,0,101,150_","").replace("._V1_SY150_SX101_","").replace("._V1_SY150_CR3,0,101,150_","")!}
                        className="rounded-[3%] mb-2"
                        style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)", height: '190px', width:'130px'}}
                    />
                    </div>
                    <div style={{marginLeft:'25px',marginTop:'-13px'}}>
                        <p style={{fontSize:'55px', fontWeight:'bold',marginBottom:'15px',maxWidth:'700px'}}>{movie?.title}</p>
                        <p style={{color:'#adacac', fontSize:'13px'}}>{movie?.date.split(" ").reverse()[1]} &#x2022; 160 minutes</p>
                    </div>
                </div>
                <div style={{marginLeft:'90px', marginTop:'25px'}}>
                    <p style={{fontSize:'14px', fontWeight:'bold', color:'#dedcdc', display:'block'}}>{parseFloat(movie?.rating+'')/2} &#9733;</p>
                    <p style={{color:'#adacac', fontSize:'13px'}}>{(parseInt(movie?.sales+'')/1000).toFixed(1)+"K reviews"}</p>
                </div>
                <div style={{marginLeft:'80px', marginTop:'45px', display:'flex',flexDirection:'row'}} >
                    <div id="btn1" onMouseOver={changeBackground} onMouseOut={changeBackgroundBack} style={{backgroundColor:'#e33659', padding:'9px 30px 9px 40px', width:'fit-content', borderRadius:'10px 10px 10px 10px', color:'black', fontWeight:'500'}}>{"LBP "+comma.format(parseInt(movie?.price!)*10000)+" Buy"}</div>
                    <div onMouseOver={changeBackground1} onMouseOut={changeBackgroundBack1} style={{marginLeft:'10px', backgroundColor:'transparent',color:'#e33659',padding:'9px 20px 9px 20px', width:'fit-content',borderRadius:'5px 5px 5px 5px', fontWeight:'500'}}>Add to wishlist</div>
                    <div style={{color:'white', marginLeft:'600px',fontWeight:'500', background:'#232423', borderRadius:'35% 35% 35% 35%', padding:'10px 30px 10px 30px'}} onClick={handleShowTrailer}>Trailer</div>
                </div>
                <div style={{margin:'30px 30px 60px 80px', paddingBottom:'40px'}}><p style={{color:'#adacac', fontSize:'15px'}}><span style={{border:'2px solid #adacac', borderRadius:'50% 50% 50% 50%', fontSize:'10px', fontWeight:'500'}}>&nbsp; i &nbsp;</span>&nbsp; &nbsp;Watch in a web browser or on supported devices. <span style={{fontWeight:'bold',color:'#e33659'}}>Learn More.</span></p></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:'10px',width:'1300px',marginLeft:'-120px',paddingTop:'60px',paddingLeft:'30px'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                    <div style={{marginLeft:'50px'}}>
                        <h1 style={{fontSize:'23px',fontWeight:'500', color:'#2e2e2e'}}>About this movie <span onMouseOver={changeBackground2} onMouseOut={changeBackgroundBack1} style={{color:'grey', borderRadius:'50% 50% 50% 50%', padding:'8px 15px 10px 15px'}} onClick={handleShow}>&#8594;</span></h1>
                        <p style={{color:'#706f6f', width:'700px',fontSize:'13.5px',marginTop:'25px',marginBottom:'30px',fontWeight:'500'}}>{movie?.description.replace("['']",'')}</p>
                        <div onMouseOver={changeBackground2} onMouseOut={changeBackgroundBack1} style={{border:'1px solid #adacac', borderRadius:'20px 20px 20px 20px', width:'fit-content', padding:'5px 20px 5px 20px', fontSize:'14px', color:'#706f6f', fontWeight:'500'}}>{movie?.genres.split(",")[0].slice(2,-1)}</div>
                    </div>
                    <div style={{marginLeft:'50px',marginTop:'30px'}}>
                        <h1 style={{fontSize:'23px',fontWeight:'500', color:'#2e2e2e'}}>Ratings and reviews <span onMouseOver={changeBackground2} onMouseOut={changeBackgroundBack1} style={{color:'grey', borderRadius:'50% 50% 50% 50%', padding:'8px 15px 10px 15px'}} onClick={handleShowReviews}>&#8594;</span></h1>
                        {reviews
						.slice(0, 5)
						.map((review: any) => (
							<div key={review['content']} className="shrink-0 p-3 w-40 h-fit rounded-lg snap-start" >
                                <div style={{display:'flex', flexDirection:'row'}}>
                                    <img src='https://wpuploads.appadvice.com/wp-content/uploads/2014/10/facebookanon.jpg' style={{width:'35px',height:'35px', borderRadius:'50% 50% 50% 50%'}}></img>
                                    <div className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt" style={{marginTop:'10px', marginLeft:'20px'}}>{review['author']}</div>
                                    <div className="hover:bg-[#f2f2f2]" style={{marginLeft:'500px', marginTop:'10px', borderRadius:'50% 50% 50% 50%', padding:'10px 10px 10px 10px'}}><CiMenuKebab></CiMenuKebab></div>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}> 
                                    <div style={{minWidth:'70px'}}><ReactStars edit={false} count={5} value={review['rating']/2!} size={15} color2={'#e33659'}/></div>
                                    <div  style={{marginTop:'5px', color:'#706f6f', fontSize:'11px', fontWeight:'500', minWidth:'fit-content'}}>{review['date']}</div>
                                </div>
                                <div style={{minWidth:'600px'}}>
                                    <p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-0.8 mt-3" style={{color:'#706f6f'}}>{review['content']}</p>
                                    <p style={{marginTop:'10px', fontSize:'12.5px', color:'#706f6f', marginBottom:'10px'}}>{review['helpful']+" people found this review helpful."}</p>
                                    <span style={{marginTop:'10px', fontSize:'12.5px', color:'#706f6f'}}>Did you find this helpful?</span>
                                    <span style={{display:'inline', fontSize:'12.5px', color:'#706f6f', marginLeft:'15px', borderRadius:'20px 20px 20px 20px', paddingLeft:'10px', paddingRight:'10px', border:'1px solid #d1cfcf'}}>Yes</span>
                                    <span style={{display:'inline', fontSize:'12.5px', color:'#706f6f', marginLeft:'15px',borderRadius:'20px 20px 20px 20px', paddingLeft:'10px', paddingRight:'10px', border:'1px solid #d1cfcf'}}>No</span>
                                </div>
							</div>
						))}
                        <div style={{marginTop:'20px'}}>
                            <h1 style={{fontSize:'23px',fontWeight:'500', color:'#2e2e2e'}}>Rate this movie</h1>
                            <p style={{fontSize:'15px', color:'#706f6f'}}>Tell us what you think</p>
                            <div style={{marginTop:'15px', display:'flex', flexDirection:'row'}}>
                                <ReactStars count={5} size={65} color2={'#e33659'}/>
                                <div id="btn1" onMouseOver={changeBackground} onMouseOut={changeBackgroundBack} style={{fontSize:'14px',backgroundColor:'#e33659', padding:'9px 20px 9px 20px', width:'fit-content', borderRadius:'10px 10px 10px 10px', color:'white', fontWeight:'500', height:'40px', marginLeft:'250px', marginTop:'35px'}}>Write a review</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position:'absolute',marginLeft:'800px',width:'400px'}}>
                    <h1 style={{fontSize:'23px',fontWeight:'500', color:'#2e2e2e',marginLeft:'10px',marginBottom:'15px'}} onClick={()=>{toSimilarMoviesPage(genre+'')}}>Similar movies <span onMouseOver={changeBackground2} onMouseOut={changeBackgroundBack1} style={{color:'grey', borderRadius:'50% 50% 50% 50%', padding:'8px 15px 10px 15px'}}>&#8594;</span></h1>
                    {movies.filter(movie => movie.genres.includes(genre+'') && ""+movie.id != currID)
						.slice(0, 4)
						.map((app) => (
							<div key={app.id} onClick={() => toMoviePage(""+app.id)} className="shrink-0 p-3 w-40 h-fit hover:bg-[#f5f5f5] rounded-lg snap-start" style={{ display:'flex', flexDirection:'row', width:'400px'}}>
								<img
									src={app.image.replace("._V1_SX101_CR0,0,101,150_","").replace("._V1_SY150_CR0,0,101,150_","").replace("._V1_SY150_CR2,0,101,150_","").replace("._V1_SY150_CR1,0,101,150_","").replace("._V1_SY150_SX101_","").replace("._V1_SY150_CR3,0,101,150_","")!}
									className="rounded-[4%] mb-2"
									style={{ boxShadow: "0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)", height: '135px', width:'95px' }}
								/>
                                <div style={{marginLeft:'10px',minWidth:'200px'}}>
                                    <p className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt mb-0.8 mt-3" style={{color:'#2e2e2e'}}>{app.title}</p>
                                    <div className=" text-[#5f6368] text-sm">
                                       <div className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{movie?.genres.split(",")[0].slice(2,-1)}</div>
                                       <div className="tracking-[.0178571429em] text-sm font-[450] font-fontAlt">{movie?.rating} &#9733; {" LBP "+comma.format(parseInt(app.price)*10000)}</div>
                                    </div>
                                </div>
							</div>
						))}

                </div>

            </div>
        </div>
    );
}



const MovieDetails = () => {
	
    const { id } = useParams<{ id: string }>();
    const { movies } = useAppSelector((state) => state.Movies);
    const movie = movies.find((movie) => ""+movie.id === id);



	return (
        <div className='relative top-16' style={{margin:'0px', padding:'0px'}}>
            <Trailer></Trailer>
        </div>
	);
};

export default MovieDetails;