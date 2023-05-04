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

    const movie1 = movies.find((movie) => ""+movie.id == id);
    var movie = {
        ID: 7,
        title: "Creed III",
        date: "Mar 2023 (Slovakia)",
        image: "https://m.media-amazon.com/images/M/MV5BYWY1ZDY4MmQtYjhiYS00N2QwLTk1NzgtOWI2YzUwZThjNDYwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SY150_CR0,0,101,150_.jpg",
        rating: "7.0",
        genres: "[\"Drama\", \"Sport\"]",
        trailer: "http://www.imdb.com/title/tt11145118/videoplayer/vi3712337177",
        cast: "['Michael B. Jordan', 'Tessa Thompson', 'Jonathan Majors', 'Wood Harris', 'Phylicia Rashad', 'Mila Davis-Kent', 'Jose Benavidez', 'Selenis Leyva', 'Florian Munteanu', 'Thaddeus J. Mixson', 'Spence Moore II', 'Tony Bellew', 'Patrice Harris', 'Ann Najjar', \"Jacob 'Stitch' Duran\", 'Terence Crawford', 'Bobby Hernandez', 'Yahya McClain', 'Lamont Lankford', 'Corey Calliet', 'Kenny Bayless', 'Todd Grisham', 'Jessica McCaskill', 'Maya Page', 'Jimmy Lennon Jr.', 'Russell Mora', 'Al Bernstein', 'Mauro Ranallo', 'Brianna Valeria Gonzalez Vazquez', 'Shayra Medal', 'Kimberly Davis', 'David Diamante', 'Tony Weeks', 'Chris Mannix', 'Andreia Gibau', 'Soraya Yd', 'Stephen A. Smith', 'Barry Pepper', 'Jessica Holmes', 'Canelo Álvarez', 'Fernanda Gomez', 'Kehlani', 'Jeremy Lee Stone', 'Aaron D. Alexander', 'Brian Neal', 'Corey Hibbert', 'James Harden', 'Jove Edmond', 'Engle Files', 'Michael A. Jordan', 'Natasha Ofili', 'Rose Eshay', 'Alan Boell', 'Eli Joshua Adé', 'Butch Locsin', 'Stefni Valencia', 'Bella Dee', 'Anastasia Wilson', 'Beth Scherr', 'James Sanders III', 'Walter J. Buck', 'Jamel D. Chambers', 'Michelle Davidson', 'Leah Haile', 'Julia Llamas', 'Teófimo López', 'Michael Mincey', 'Rick Nehls', 'Pete Penuel', 'Sherri Belinda Quinones', 'Candice Tracy Ross', 'Sage Shirley', 'Eric Daniel Stumpp', 'Shelby Weimer', 'Jude Wells', 'Sam Zheng']",
        credits: "{'director': ['Michael B. Jordan'], 'writer': ['Keenan Coogler', 'Zach Baylin', '', 'Ryan Coogler', 'Keenan Coogler', 'Zach Baylin', '', 'Sylvester Stallone'], 'producer': ['William Chartoff', 'Ryan Coogler', 'Zinzi Coogler', 'Dezi Gallegos', 'Jonathan Glickman', 'Michael B. Jordan', \"D'Angelo 'D'Lo' Louis\", \"Brian M. O'Neill\", 'Sev Ohanian', 'Elizabeth Raposo', 'Adam Rosenberg', 'Sylvester Stallone', 'Nicolas Stern', 'Leo Volcy', 'Leonardo Volcy', 'Charles Winkler', 'David Winkler', 'Irwin Winkler'], 'composer': ['Joseph Shirley'], 'cinematographer': ['Kramer Morgenthau'], 'editor': ['Jessica Baclesse', 'Tyler Nelson'], 'sound crew': ['Kari Barber', 'Michael P. Clark', 'Greg Crawford', 'Albert Gasser', 'Aaron Glascock', 'Geraldo Gutierrez', 'Jeffory Haddad', 'Mike Horton', 'Erik H. Magnus', 'Hank Martin', 'Daniel S. McCoy', 'Samya McCoy', 'Paul Eric Miller', 'Tom Ozanich', 'Abby Potts', 'Jamison Rabbe', 'Lee Riley', 'Scott Solan', 'Walter Spencer', 'Bartek Swiatek', 'Tami Treadwell', 'Matt Vowles', 'Jake White', 'Patrick Wylie', 'Linda Yeaney', 'Lauren Johnson'], 'visual effects': ['Matt Akey', 'Mariette Amici', 'Samantha Bailor', 'Jon Balcome', 'Justin Ball', 'Lance Becker', 'Roger Berard', 'Zack Beshears', 'Marta Burriel', 'Brandon Burzawa', 'Andrew Byrne', 'Kevin Canaday', 'J. Michael Cheeves', 'Christopher Cheng', 'Erika Chlupsa', 'Yamato Cibulka', 'Charlie Collins', 'Simon Deighton', 'Steve DiNozzi', 'Geoff DuQuette', 'Max Ehrlich', 'Shahar Eldar', 'Matthew William Ellis', 'Emma Farquharson', 'Phylicia Feldman', 'Bryan Foster', 'Christina Garberson', 'Wendy Gipp', 'Sid Gordon', 'Pasquale Greco', 'Sam Hanover', 'Quentin Hema', 'Alexander Johnson', 'Nick Johnson', 'Anissa Jones', 'Daniel Kaczkowski', 'Christina Kammermeier', 'Daryl Klein', 'Nathan Koga', 'Jay Lalime', 'Benedikt Laubenthal', 'Reid Lauff', 'Nha Hoan Le', 'Derek Ledbetter', 'Mathis Lex', 'Kevin Lin', 'Garrett Lynn', 'Lanbing Lyu', 'Blanka Madácsi', 'Syam Mahananda', 'Saurabh Maurya', 'Brooke McGowan', 'Jennifer Meislohn', 'Don Morgan', 'Ryan E. Murphy', 'Takahide Nakamura', 'Jordan Nounnan', 'John P. Nugent', 'Karina Nunes', 'Darius Person', 'Chad Peter', 'Russell Porchia', 'Roland Porth', 'Stewart Probert', 'Jonathan Ramirez', 'Markus Raudaschl', 'Nolan Reese', 'Aly Richmond', 'Jaime E. Riveros', 'Elias Saliba', 'Patrick Schultz', 'D.J. Shea', 'Timo Sikharulidze', 'Eric Slack', 'Tim Spanjer', 'Heather Taylor', 'Nicole Taylor', 'Aleksandar Toleski', 'Joshwa Walton', 'Martin Toby Watson', 'Zachary Wise', 'Christian Wood', 'Caitlin Parker Woodman', 'Dean Wright', 'Joel Young', 'Michelle Yu', 'Syam Mahananda', 'Jonathan Zesbaugh'], 'costume department': ['Zina Arthur', 'Jasmene Bowdry', 'Ngina Bowen', 'Kayla Brathwaite', 'Khali Brewer', 'Therez Fleetwood', 'Hailey Garcia', 'Eileen Gonzales', 'Jade Graham', 'Mauricia Grant', 'Kersten Haff', 'Greg Hopwood', 'Tracy Johnson', 'Rashante Lee', 'Jared B. Leese', 'Alyssa Lesser', 'Christopher Macken', 'Tiffany McKitrick', 'Mustapha Mimis', 'Elisa R. Richards', \"La'Tarica Riley\", 'Tatiana Sedenco', 'Sherrie Simmons', 'Carolina Wong'], 'production companies': ['Metro-Goldwyn-Mayer', 'Chartoff-Winkler Productions', 'Glickmania', 'Outlier Society', 'Proximity Media']}",
        company: "['Metro-Goldwyn-Mayer', 'Chartoff-Winkler Productions', 'Glickmania', 'Outlier Society', 'Proximity Media']",
        description: "After dominating the boxing world, Adonis Creed (Michael B. Jordan) has been thriving in both his career and family life. When childhood friend and former boxing prodigy Damian (Jonathan Majors) resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian--a fighter who has nothing to lose.",
        price: "21.99",
        sales: "19412",
        reviews: "[{\"content\": \"This series played out on the fact it was linked to a big franchise that people obviously loved, this was the first attempt to not get as influenced, I'm guessing due to Sly getting older and the fact they probably want two more films to get to 50th anniversary of rocky, it all feels desperate.Main issue is the bland lead, no charisma, presence or chemistry with anyone, he has nothing memorable about him, his attempts to look tough, growl or trash talk are embarrassing and really he's just not a great fit. The wife who isn't musically talented to anyone with ears, mrs auto tune offers nothing, daughter is sweet though.The antagonist is ridiculous, such a played out plot, he decided to do what he did, he bought a gun, yes D got in a situation but he had as much hate and it was completely his doing. Then got time added on, again his fault. He then gets given a completely unrealistic opportunity and cheats blatantly but still wins, it's all ridiculous, poorly written and terribly acted, this guy genuinely looked off his face in most scenes, not sure what he was trying to get his face to do.Franchise is dead, the characters and story are enough for anymore films, they have no importance and at most 2 was the absolute limit.Poor.\", \"helpful\": 115, \"title\": \"Bland, played out and contrived\", \"author\": \"ur49237919\", \"date\": \"6 March 2023\", \"rating\": 3, \"not_helpful\": 23}, {\"content\": \"The performances of this movie is what saves it from being a complete flop. The Creed franchise suffers from trying to live up to what Stallone accomplished with rocky 1-4. And this is the problem with films today. The first two creeds had that same grit feel of the rocky franchise and this movie did not have that. The scenes were anticlimactic and generic. The story seemed to suffer from not having enough source material and first time director Michael B Jordan made the mistake of thinking this script was good enough without even mentioning rocky. Ok they mentioned him once. Yeah that's it, once. Which is ironic because the whole story is based on what got him here to this point. I also didn't like that they went thr MCU route, CGI should not exist in this world. Sorry had to say it.\", \"helpful\": 126, \"title\": \"The Tommy Gun of the Creed franchise.\", \"author\": \"ur25199290\", \"date\": \"4 March 2023\", \"rating\": 5, \"not_helpful\": 22}, {\"content\": \"We have part 3 in a spin-off franchise that recycles characters from the original source material. What happens when you use none of the original characters and go rogue ?You get a bland story that is more predictable than the ending of \\\"Creed II\\\".Now, don't get me wrong: I really enjoyed the film and thought it was a solid OK. It is part 3, after all.Adonis' (MBJ) past has caught up to him in the shape of Damian (Jonathan Majors). Turns out (as we knew) Adonis was a hoodlum and used to hang with the wrong crowd. Damian was an up and coming boxer who went to jail (reason really isn't worth noting) for 18 years, and now he's back to claim everything he believes was \\\"stolen\\\" from him by Adonis.Not a bad idea, yeah?The issue is that it's tiring and predictable. We're aware Adonis will have to square off to Damian, and we all know how it's going to end and there's gonna be a training montage a lot of smack talking ... but, no Rocky.Although I didn't miss seeing Rocky, rubbing him away from the franchise is a negative move and having him in Adonis' corner would have made the movie feel complete.See it if you're a casual movie goer.\", \"helpful\": 122, \"title\": \"Not bad, just don't expect a lot\", \"author\": \"ur42355132\", \"date\": \"1 March 2023\", \"rating\": 5, \"not_helpful\": 32}, {\"content\": \"The 'Creed' boxing actioner melodrama series has none of the magic of the early 'Rocky' films that it span off from - with \\\"Creed III\\\" a typical example. Titular champ Michael B Jordan (charismaless - also on his directorial debut here) retires to a dream LA home with pop star wife Tessa Thompson, but then moody childhood pal Jonathan Majors (good - but no Mr T) re-emerges after 18yrs in jail. Via Keenan Coogler & Zach Baylin's hole-filled, cartoonish, short-cutting writing Majors becomes Jordan's nemesis, for whom he must return to the ring, to fight in a showdown finale. As lamely cheesie as it sounds it still has some Hollywood polish, but 'Creed' is definitely no 'Rocky'.\", \"helpful\": 12, \"title\": \"Typical of the rest of the boxing actioner melodrama spin-off series, which ain't no 'Rocky'\", \"author\": \"ur86509541\", \"date\": \"5 April 2023\", \"rating\": 5, \"not_helpful\": 1}, {\"content\": \"First of all I'm a massive Rocky fan and think Creed I and II are excellent. Both in direction and scripts.The rocky/creed films are more than just films about boxing, they are about relationships outside of boxing. Each film is about a different struggle, that requires finding a way to overcome it. Unfortunately this film has the weakest script, that fails in developing any real relationships, or motivations for any of their actions. I just didn't care about anyone in this film. I'm a big fan of Michael B Jordan, Tessa Thompson and Jonathan Majors but this film failed to display their talents. It suffers from horrible pacing, I feel the film needed another 30 minutes to the run time. I also think directing is a skill in itself and only a few actors are able to swap hats, unfortunately this films shows Michael b Jordan's inexperience. Sly Stallone is the heart and soul of this franchise and his absence is evident. It just didn't have the magic that made the previous films more than just a \\\" boxing film\\\".\", \"helpful\": 67, \"title\": \"Arguably the worst in the series\", \"author\": \"ur103943584\", \"date\": \"9 March 2023\", \"rating\": 3, \"not_helpful\": 7}, {\"content\": \"Unfortnately, I paid good money to watch this film and was greatly let down.Obvious that is was remake of the Rocky movie, featuring the same premise, however, sadly lacking in intensity, ability and the boxing ring.It lacked the power of Rocky of wanting the 'good' guy sceneraio, any involvement by the audience was placated by the lack of ANY empathy/emotion that a audience invests in the movie, the fight scenes lacked any reality, unfortunately the surreal scenario lost any impact or realism.The actors lacked any gambit of 'acting' very lame and frankly it was obvious, just another way for them to earn $$$.\", \"helpful\": 24, \"title\": \"Sad imitation\", \"author\": \"ur20622433\", \"date\": \"1 April 2023\", \"rating\": 3, \"not_helpful\": 2}, {\"content\": \"A strong entry into Rocky franchise that encapsulates the boxing world both in and outside of the ring.Adonis Creed is a retired boxer working as a promoter. Creed III explores his new life, post retirement and what it means for him and his family. An old 'brother like' friend from Creed's past, Damian Anderson played by Jonathon Majors, comes back into his life which sets off a series of events. We get to witness Creed's post boxing story whilst also witnessing Damien's much delayed boxing story.The film was built up really well especially in the first half where it takes its time to introduce us to the characters, plot and theme of the movie. Despite being two hours long, it's clear that a lot of the movie got chopped as the second half was rushed which is a shame as the film could have given us so much more prior to the Main Event.Johnathan Majors was fantastic. His character had menace, pain and emotion. What's great is that the relationship between Creed and Anderson was morally grey so you could empathise with both sides of the story which make the movie more heartfelt. Michael B Jordon was solid in his role as Creed as per usual and the supporting casts of actors and boxing personalities both new and old were a lot of fun.The choreography which was influenced by MBJ's love of anime, was good despite some of the usual big screen over exaggeration and the soundtrack was fire opening up with The Watcher from from Dr Dre's 2001! Those hoping to see Rocky on screen shouldn't hold their breathe.\", \"helpful\": 94, \"title\": \"Enjoyable but the second half felt rushed\", \"author\": \"ur147286305\", \"date\": \"7 March 2023\", \"rating\": 7, \"not_helpful\": 28}, {\"content\": \"This is a real departure from other movies in the Rocky-verse. The absence of Stallone's input (ignore the 'produced by' credit to Stallone - he wasn't involved) is felt throughout the films style, writing, direction and lack of any sentimentality.It simply doesn't feel like a Rocky/Creed movie, it's darker, more angry, more miserable and a lot less fun. But worst of all you just don't care about any of the characters...and that means no hairs on the back of your neck as you approach fight night.On the fight, the way it was shot is very stylistic with heavy CGI and feels further removed from reality than the other movies (and hey - they weren't realistic!).If you forget it's Creed or part of the Rocky-verse, on its own it's an 'ok' film. Stack it up against what's been before and after what was a really entertaining first and second Creed instalment/s - it's a bad movie.Hopefully that's it now, unless Stallone gets back involved...then maybe.\", \"helpful\": 78, \"title\": \"Miserable action, no heart or soul\", \"author\": \"ur124440469\", \"date\": \"8 March 2023\", \"rating\": 5, \"not_helpful\": 14}, {\"content\": \"This might have been the shortest Creed film of the series, but it felt like the longest. Creed 3 is just boring. It might be even more predictable than Creed 2 which at least had a better storyline, if only a rehashed one.Creed 3 is the story of Adonis Creed getting visited by a teenage friend from back in the day. His friend ended up going down one path in life. Adonis Creed went down another. Through some predicable plot points they no longer like each other.The only shining star of this movie was Adonis Creed's daughter. That was the only new and interesting part of the entire movie.After watching this film, I can understand why there is no Rocky Balboa in it. Not having Rocky Balboa in it did not make the movie better either. The Creed movie franchise is over. I will not watch another one because there is nothing new and original about any of it.\", \"helpful\": 70, \"title\": \"Creed 3 is boring and predictable\", \"author\": \"ur51467016\", \"date\": \"5 March 2023\", \"rating\": 2, \"not_helpful\": 20}, {\"content\": \"Creed 1 and 2 were decent but this one is not... Watch Rocky 5!It is a waste of talent because Michael B. Jordan is a great actor, Jonathan Majors is impressive and don't get me started on Wood Harris (Legend).This movie was a nothing burger, a reimagination of past glory. And don't get me started on the sh#t soundtrackt, a strongpoint of the Rocky franchise.I don't know if it is because Rocky is not in this one but it is missing hart. The build up you had in every Rocky movie is not in this one. I did not feel the tention growing and definitely missed the climax you have in all the Rocky movies.Ps. Holywood where is the inclusivity or does that only go one way??\", \"helpful\": 17, \"title\": \"Watch Rocky instead\", \"author\": \"ur135504840\", \"date\": \"2 April 2023\", \"rating\": 3, \"not_helpful\": 1}]"
      }
      
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
    const newAdd=movie.trailer.split("/videoplayer/")[1]
    console.log(newAdd)
    console.log("printed")

    return(
        <div>
            {showReviews && 
                <Modal  show={showReviews} onHide={handleCloseReviews}> 
                    <Modal.Header style={{width:'700px', background:'white', marginRight:'600px', marginLeft:'-100px'}}>
                    <Modal.Title>{movie.title}<br></br><span style={{fontSize:'14px', color:'grey'}}>Ratings and reviews</span></Modal.Title>
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
                        <Modal.Title>{movie.title}<br></br><span style={{fontSize:'14px', color:'grey'}}>About this movie</span></Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{background:'white', height:'400px', overflow:'auto', width:'700px', marginRight:'400px', marginLeft:'-100px'}}>
                        <Row style={{fontSize:'15px', padding:'10px', color:'grey', marginBottom:'20px'}}>{movie.description}</Row>
                        <h2 style={{fontWeight:'500', marginBottom:'15px'}}>Cast & credits</h2>
                        <h3 style={{fontWeight:'500', marginBottom:'5px'}}>Actors</h3>
                        <p style={{fontSize:'12px', color:'grey', marginBottom:'20px'}}>{movie.cast.replaceAll("', '"," , ").replaceAll("['"," ").replaceAll("']",'')}</p>
                        <h3 style={{fontWeight:'500', marginBottom:'5px'}}>Credits</h3>
                        {movie.credits.split("'], '").map((e) => {
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
                    <p style={{fontSize:'14px', fontWeight:'bold', color:'#dedcdc', display:'block'}}>{parseFloat(movie?.rating)/2} &#9733;</p>
                    <p style={{color:'#adacac', fontSize:'13px'}}>{(parseInt(movie.sales)/1000).toFixed(1)+"K reviews"}</p>
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