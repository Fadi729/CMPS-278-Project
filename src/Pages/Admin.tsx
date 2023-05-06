import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useAppSelector, useAppDispatch } from "../hooks";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getMoviesAsync } from "../features/moviesSlice";
import { getBooksAsync } from "../features/booksSlice";
import { getGamesAsync } from "../features/gamesSlice";
import { getApplicationsAsync } from "../features/applicationsSlice";

const Admin = () => {
    /**
    
    
    const {movies} = useAppSelector((state) => state.Movies);
    const {books} = useAppSelector((state) => state.Books);
    const {applications} = useAppSelector((state) => state.Applications);
    const {games} = useAppSelector((state) => state.Games);
    


    const navigate=useNavigate();
    const dispatch = useAppDispatch();

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
    */

    const movies = [{
        id: 1,
        title: "The Super Mario Bros. Movie",
        date: "05 Apr 2023 (Austria)",
        image: "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SY150_CR0,0,101,150_.jpg",
        rating: "7.4",
        genres: "[\"Animation\", \"Adventure\", \"Comedy\", \"Family\", \"Fantasy\"]",
        trailer: "http://www.imdb.com/title/tt6718170/videoplayer/vi1463075865",
        cast: "['Kevin Michael Richardson', 'Jack Black', 'Khary Payton', 'Chris Pratt', 'Charlie Day', 'Charles Martinet', 'Sebastian Maniscalco', 'Rino Romano', 'John DiMaggio', 'Jessica DiCicco', 'Keegan-Michael Key', 'Eric Bauza', 'Anya Taylor-Joy', 'Fred Armisen', 'Seth Rogen', 'Juliet Jelenic', 'Scott Menville', 'Carlos Alazraqui', 'Jason Broad', 'Ashly Burch', 'Rachel Butera', 'Cathy Cavadini', 'Will Collyer', 'Django Craig', 'Willow Geer', 'Aaron Hendry', 'Andy Hirsch', 'Barbara Harris', 'Phil LaMarr', 'Jeremy Maxwell', 'Daniel Mora', 'Eric E. Osmond', 'Noreen Reardon', 'Lee Shorten', 'Cree Summer', 'Nisa Ward', 'Nora Wyman']",
        credits: "{'director': ['Aaron Horvath', 'Michael Jelenic', 'Pierre Leduc', 'Fabien Polack'], 'writer': ['Matthew Fogel'], 'producer': ['Christelle Balcon', 'Yusuke Beppu', 'Brett Hoffman', 'Kelly Lake', 'Christopher Meledandri', 'Shigeru Miyamoto', 'Bill Ryan', 'Robert Taylor'], 'composer': ['Koji Kondo', 'Brian Tyler'], 'cinematographer': [''], 'editor': ['Eric E. Osmond'], 'sound crew': ['Ronni Brown', 'Brandon Cammack', 'Richard Duarte', 'Sean England', 'Scott Guitteau', 'Pete Horner', 'Devon Kelley', 'Daniel Laurie', 'Leff Lefferts', 'Andree Lin', 'Donnie Little', 'Zach Martin', 'Larry Oatfield', 'Juan Peralta', 'Eva Porter', 'Jacob Riehle', 'Jamey Scott', 'Randy Thom', 'Jana Vance', \"Terah 'Bishop' Woodley II\", 'Qianbaihui Yang'], 'visual effects': ['Xavier Bec', 'Benoit Bernos', 'Vincent Blanqué', 'Christophe Brejon', 'Eric Carme', 'Maria Castro Rodriguez', 'Joël Corcia', 'Melissa Faucher', 'Lucie Foselle', 'Anne Getto', 'Erwin Gresser', 'Michael Grund', 'Kévin Herbrich', 'Jean-Marc Imele', 'Marc Largier', 'Cedric Launay', 'Mathieu Le Meur', 'Baptiste Lemonnier', 'Florian Magnin', 'Astrid Massad', 'Eric Mauhourat', 'Marc Picco', 'Massimiliano Piscozzi', 'Clement Rambach', 'Kevin Razo', 'Quentin Sauvinet', 'Max Tourret', 'Julien Trouchet', 'Margaux Vaxelaire', 'Christophe Verspieren', 'Jocelyn Vincent', 'Ferris Webby', 'Mira Wendling'], 'costume department': [''], 'production companies': ['Universal Pictures', 'Nintendo', 'Illumination Entertainment']}",
        company: "['Universal Pictures', 'Nintendo', 'Illumination Entertainment']",
        description: "A Brooklyn plumber named Mario travels through the Mushroom Kingdom with a princess named Peach and an anthropomorphic mushroom named Toad to find Mario's brother, Luigi, and to save the world from a ruthless fire-breathing Koopa named Bowser.",
        price: "11.99",
        sales: "76083",
        reviews: "[{\"content\": \"Granted, this film is not going to appeal to people who have never been fans of any games featuring the titular brothers. But given the fact that these filmmakers were tasked with making a movie that caters to a fan base that spans four decades and thus have a myriad of tastes and expectations, they did a pretty good job. In fact, a slightly better job than I was expecting.The voice cast was the subject of much controversy, and I thought that for the most part it was actually spot-on. A couple of characters were horribly miscast in my opinion, but in particular Jack Black as Bowser and Charlie Day as Luigi shine as perfectly encapsulating the spirit of the characters.Platforming elements from the games was very efficiently worked into the action sequences, and some of them were quite thrilling. This is easily Illumination's most visually stunning film, and a massive step up from every one of their other films since the first Despicable Me.As for the plot, it's just the plot of every Mario game. And for the most part, that's all it needs to be. Every beat plays out almost exactly like you'd expect it to, with a couple subversions pleasantly thrown in there.The messiest parts of the movie, if I'm going to get critical, are the dialogue (which is often quite stupid) and the characters. They just try to deal with too many of them, and although four or five characters are strongly introduced with background and desires, almost none of these introductions actually amount to a payoff, and even when there is a payoff, it's haphazardly thrown together for a rushed ending.Although I think 85-90 minutes is actually the perfect length for an animated film normally, this one could've benefitted from an extra 10-20 minutes to flesh out these points a bit more. We move so quickly from location to location that there's never any time to breathe or get invested.But that's my adult perspective. I had a pretty breezy, fun, and heartwarming time, though I would've liked more meat on the script.My theater was PACKED, and probably 75% young children, and they all seemed to have the time of their lives. Your kids will probably love it, and you will probably more than tolerate it.\", \"helpful\": 194, \"title\": \"Illumination's best since Despicable Me 1.\", \"author\": \"ur117768316\", \"date\": \"5 April 2023\", \"rating\": 7, \"not_helpful\": 34}, {\"content\": \"First off this movie is for kids and fans of Nintendo and the Mario franchise. I still think an adult who isnt a fan could still enjoy it but this movie is so full of fan service that it will have you smiling the whole time. The voice acting I was skeptical but they all work and work well too. Jack Black is the star here. I love how they kept the story simple like all of the games. Truly felt like a video game on screen. This movie felt like a beautifully animated amusement park ride. The audio in the movie was amazing too. The sounds and the score with reimagined iconic music was perfect. Some of the songs in the movie felt unnecessary but they worked. I think they should've bumped the run time to 105-120 min. 90 min felt too short as it goes by quick. I havent had this much wholesome fun at the movies in a long time. If youre a fan you HAVE to see it.\", \"helpful\": 310, \"title\": \"An absolute BLAST!\", \"author\": \"ur91786786\", \"date\": \"5 April 2023\", \"rating\": 10, \"not_helpful\": 69}, {\"content\": \"I am someone who is not swayed by \\\"critics\\\" or rotten tomato scores. I didn't even really have any expectations going into this movie. As someone who grew up playing Super Mario Bros, Super Mario World etc., I was really just going to see this movie based on nostalgia and it does deliver on nostalgia. The visuals are stunning, and while everyone has their reservations about Chris Pratt the voice acting is perfect (except one for one elderly character). While many have said this movie moves quickly or \\\"too fast\\\", I would say it has great pacing and never leaves you bored. While it is not a perfect film it leaves little to be desired. It is everything you want from an animated Super Mario Movie.\", \"helpful\": 129, \"title\": \"Everyone is so fixated on rotten tomatoes scores, it really is a solid film.\", \"author\": \"ur88182480\", \"date\": \"5 April 2023\", \"rating\": 8, \"not_helpful\": 30}, {\"content\": \"After meeting Chris Pratt at the Santa Barbara film festival I'm very amazed of how remarkable Chris played Mario for the first. I remember playing Mario kart double dash on GameCube 20 years ago with my sister during Christmas Day and I absolutely loved the game . Universal and Nintendo did a great job making this movie for kids and adults who played the video game since the 80s 90s 2000s to now . The Mario movie was absolutely awesome and very creative from the video game . Chris was absolutely hilarious as Mario . Jack black as bowser was the best for the film. His voice was a mixture of Vader which I find so outstanding. Chris who voiced Mario did a fantastic job. He used the characters voice very carefully. The sounds were just like the video game. And i think that was absolutely awesome. The story taking place in New York to the mushroom kingdom is brilliant. Princess peach was the best part of the movie . She had a good way of showing bowser she will not marry a turtle . And toad was the best part of the movie . The rest of the characters including donkey Kong voiced by Seth rogen was so awesome. I hope in the next Mario movie yoshi finds Mario and Luigi and becomes they're pet.\", \"helpful\": 152, \"title\": \"Chris Pratt was awesome as Mario and Jack black as bowser was remarkable!!!!!!\", \"author\": \"ur33283012\", \"date\": \"6 April 2023\", \"rating\": 10, \"not_helpful\": 58}, {\"content\": \"This is a movie that feels like a love letter to all the Nintendo fans out there, even if they don't necessarily play Mario anymore. The film delivers a fun and enjoyable experience for viewers by faithfully adapting every aspect of the game into the movie, including the Mario Kart and Donkey Kong franchises. The movie is packed with non-stop action and fast-paced storytelling, leaving little room for some of the more significant elements that fans might have wanted to see. It may not be able to fulfill every fan's wishes, but it's understandable and sets up for a sequel, as there is a post-credits scene.But for general audiences who are not familiar with Mario enough, this might be a movie that is difficult to understand. There may be questions like why does it have to be like this? Why do it this way? Why is the world so strange? This is because the story hardly explains in detail for us to know how the world is. Even though the story is simple and has nothing much. But if you don't think too much, it's an easy and enjoyable movie to watch, with the lovable characters in the style of the works from the studio that made Despicable Me.\", \"helpful\": 118, \"title\": \"The Message Of Love Is Sent Directly To The Fanbase, Not To The General Audience.\", \"author\": \"ur23136302\", \"date\": \"5 April 2023\", \"rating\": 7, \"not_helpful\": 45}, {\"content\": \"Took my kids for a special sky screening and boy were we excited! At first I was rather skeptical thinking this film won't do any justice to the games. However, I was wrong! This film met our expectation and beyond. I think I enjoyed this film more than my kids. From the moment the film starts it is enjoyable. Good sense of humour and a lot of nice scenes. A lot of laughable moments. Apart from the film being too short it still met my expectations. As a 39 year old who played all the Mario games since childhood, this bought back a lot of fond memories of sleepless nights of playing the Mario games. A must watch film whether you have kids or not.\", \"helpful\": 74, \"title\": \"Brilliant animation and portrayal of the super Mario bros!\", \"author\": \"ur68240042\", \"date\": \"5 April 2023\", \"rating\": 10, \"not_helpful\": 24}, {\"content\": \"The Mario Movie is great! If you are a fan of Nintendo, then you will have a blast. It is sprinkled with a plethora of references and call backs.The voice acting is superb! You can let your reservations on Chris Pratt pass as he is great in this movie. Anya Taylor-Joy brings an optimistic spirit, Charlie Day is good and Seth Rogen is good. But the best by far was Jack Black!! He stole the show. Especially when he sings a certain song!The animation was fantastic. It baffles me how realistic looking they can make everything.Based off of certain parts of the movie, it looks like there will be a sequel on some point, and I'm excited.\", \"helpful\": 72, \"title\": \"The Mario movie is a great, nostalgic animated film\", \"author\": \"ur83316413\", \"date\": \"6 April 2023\", \"rating\": 9, \"not_helpful\": 30}, {\"content\": \"I think for what this movie sets out to do, Super Mario Bros. Movie pretty much ticks the boxes of an entertaining, reference fan-service heavy movie. A lot of the jokes are basic sure, but it's just impressive that there is some competency to a Video Game Movie. Sometimes simple and straightforward is the best way to go. Not high art or anything, but it ticks off almost everything for what Mario should be at least. Voice acting wasn't as bad as I thought, and Jack Black was the highlight as expected. Yeah, not gonna win any big awards but judge it for what it is, and yeah by Video Game Movie standards it's one of the best ones easily if you ask me.6.5/10.\", \"helpful\": 61, \"title\": \"Critics are being too harsh for what it is\", \"author\": \"ur3805352\", \"date\": \"5 April 2023\", \"rating\": 7, \"not_helpful\": 26}, {\"content\": \"5 out of 5 stars.The Super Mario Bros movie is an awesome animated adventure film that is one of the best adaptation of a video game series. It has everything you can ask for. Its like an open world of nintendo game series like Donkey Kong making an appearance.The film is fast paced. The plot is good. It has a story about the bros. The film features a lot of easter eggs that can hint for more movies. The action sequences are awesome. Bowser is an awesome villain. The animation is beautifully done and stunning. The voice talent is also great.One of the best sequences involving a mario kart chase on a rainbow road is insane. Fans and kids will love the series and love how everything is put together in this film. Overall, i love everything about the film. I can not wait for more.\", \"helpful\": 30, \"title\": \"Everything you can ask for in a Mario Bros movie.\", \"author\": \"ur57691865\", \"date\": \"9 April 2023\", \"rating\": 10, \"not_helpful\": 12}, {\"content\": \"As a Mario fan myself it was a very enjoyable and fun action packed movie. While watching I just couldn't wipe the smile off my face. Jack black did an amazing job with voice acting bowser. Everyone did a great job and while I do agree Chris Pratt could have been better i got use to it really quick and im sure pretty much everyone else will too and besides, the Italian accent in the games is great but definitely not meant for a 80 minute movie. The plot is very simple which is good however because a Mario story shouldn't be complex at all and the people at illumination definitely know how the games should be. Speaking of that, you can tell the people behind this movie put a lot of heart into it. Definitely give this a strong recommendation if you like Mario or have childhood memories with Mario in any way or just wanna watch an enjoyable family movie.\", \"helpful\": 64, \"title\": \"Don't listen to the critics on rotten tomatoes, this movie is really good.\", \"author\": \"ur105547839\", \"date\": \"8 April 2023\", \"rating\": 9, \"not_helpful\": 15}]"
      }]

      const books =[{
        id:'',
                                            title:'',
                                            description:'',
                                            authors:'',
                                            image:'',
                                            previewLink:'',
                                            publisher:'',
                                            publishedDate:'',
                                            infoLink:'',
                                            categories:'',
                                            ratingsCount:''

      }]

      const applications=[{
        url:'',
        appId:'',
        title:'',
        summary:'',
        developer:'',
        developerId:'',
        icon:'',
        score:'',
        scoreText:'',
        priceText:'',
        free:'',
        description:'',
        descriptionHTML:'',
        installs:'',
        minInstalls:'',
        maxInstalls:'',
        ratings:'',
        reviewsCount:'',
        histogram:'',
        price:'',
        currency:'',
        available:'',
        offersIAP:'',
        iAPRange:'',
        size:'',
        androidVersion:'',
        androidVersionText:'',
        developerInternalID:'',
        developerEmail:'',
        developerWebsite:'',
        developerAddress:'',
        genre:'',
        genreId:'',
        familyGenre:'',
        familyGenreId:'',
        headerImage:'',
        screenshots:'',
        videoImage:'',
        contentRating:'',
        contentRatingDescription:'',
        adSupported:'',
        released:'',
        updated:'',
        version:''
      }]

      const games=[{
        url:'',
        appId:'',
        title:'',
        summary:'',
        developer:'',
        developerId:'',
        icon:'',
        score:'',
        scoreText:'',
        priceText:'',
        free:'',
        description:'',
        descriptionHTML:'',
        installs:'',
        minInstalls:'',
        maxInstalls:'',
        ratings:'',
        reviewsCount:'',
        histogram:'',
        price:'',
        currency:'',
        available:'',
        offersIAP:'',
        iAPRange:'',
        size:'',
        androidVersion:'',
        androidVersionText:'',
        developerInternalID:'',
        developerEmail:'',
        developerWebsite:'',
        developerAddress:'',
        genre:'',
        genreId:'',
        familyGenre:'',
        familyGenreId:'',
        headerImage:'',
        screenshots:'',
        videoImage:'',
        contentRating:'',
        contentRatingDescription:'',
        adSupported:'',
        released:'',
        updated:'',
        version:''
      }]

    console.log("Admin page")    

    const handleDelete = (id: any) => {
        if(window.confirm("Are you sure?")== true){
            alert(id);
        }
    }
    const handleUpdate = (id: any) => {
        if(window.confirm("Are you sure?")== true){
            alert(id);
        }
    }

    const [movieModal, setMovieModal] = useState(false);
    const [bookModal, setBookModal] = useState(false);
    const [appModal, setAppModal] = useState(false);
    const [gameModal, setGameModal] = useState(false);

    const ShowMovieModal = () => {setMovieModal(true)}
    const HideMovieModal = () => {setMovieModal(false)}
    const ShowBookModal = () => {setBookModal(true)}
    const HideBookModal = () => {setBookModal(false)}
    const ShowAppModal = () => {setAppModal(true)}
    const HideAppModal = () => {setAppModal(false)}
    const ShowGameModal = () => {setGameModal(true)}
    const HideGameModal = () => {setGameModal(false)}

    

    

    return(
        <div className='relative top-16'>
            <h1 style={{fontSize:'25px', fontWeight:'500'}}>Movies</h1>
            <div style={{maxHeight:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Table striped bordered hover style={{border:'1px solid grey'}}>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Image</th>
                            <th>Rating</th>
                            <th>Genre</th>
                            <th>Trailer</th>
                            <th>Cast</th>
                            <th>Credits</th>
                            <th>Company</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Sales</th>
                            <th>Reviews</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                            <tr>
                            <td></td>
                            <td><input type='text' className='form-control' placeholder="ID" ></input></td>
                            <td><input type='text' className='form-control' placeholder="title" ></input></td>
                            <td><input type='text' className='form-control' placeholder="date" ></input></td>
                            <td><input type='text' className='form-control' placeholder="image" ></input></td>
                            <td><input type='text' className='form-control' placeholder="rating" ></input></td>
                            <td><input type='text' className='form-control' placeholder="genre" ></input></td>
                            <td><input type='text' className='form-control' placeholder="trailer" ></input></td>
                            <td><input type='text' className='form-control' placeholder="cast" ></input></td>
                            <td><input type='text' className='form-control' placeholder="credits" ></input></td>
                            <td><input type='text' className='form-control' placeholder="company" ></input></td>
                            <td><input type='text' className='form-control' placeholder="description" ></input></td>
                            <td><input type='text' className='form-control' placeholder="price" ></input></td>
                            <td><input type='text' className='form-control' placeholder="sales" ></input></td>
                            <td><input type='text' className='form-control' placeholder="reviews" ></input></td>
                            <td><button className={"btn btn-primary"}>Add</button></td>
                            </tr>
                            {
                                movies  && movies.length>0 ?
                                movies.map((item, index) => {
                                    return(
                                        <tr key={index} style={{height:'60px', overflow:'auto'}}>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'40px'}}>{index+1}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'120px'}}>{item.id}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'170px'}}>{item.title}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'170px'}}>{item.date}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'100px'}}>{item.image}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'120px'}}>{item.rating}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.genres}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.trailer}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.cast}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.credits}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.company}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.description}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'120px'}}>{item.price}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'120px'}}>{item.sales}</div></td>
                                            <td>Reviews</td>
                                            <td colSpan={2} style={{height:'80px', overflow:'auto',minWidth:'200px'}}>
                                                <button className="btn btn-primary" onClick={ShowMovieModal}>Edit</button>&nbsp;
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Loading..."
                            }
                            
                        </tbody>
                    </Table>
                    <Modal show={movieModal} onHide={HideMovieModal}>
                        <Modal.Header closeButton style={{minWidth:'600px', background:'white'}}>
                        <Modal.Title>Update Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{minWidth:'600px', background:'white'}}>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="ID" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="title" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="date" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="image" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="rating" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="genre" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="trailer" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="cast" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="credits" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="company" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="description" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="price" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="sales" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="reviews" ></input></Col>
                            </Row><br></br>
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                            <Button variant="secondary" onClick={HideMovieModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <h1 style={{fontSize:'25px', fontWeight:'500'}}>Books</h1>
            <div style={{maxHeight:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Table striped bordered hover style={{border:'1px solid grey'}}>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Authors</th>
                            <th>Image</th>
                            <th>Preview Link</th>
                            <th>Publisher</th>
                            <th>Published Date</th>
                            <th>Info Link</th>
                            <th>Categories</th>
                            <th>Ratings Count</th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                            <tr>
                            <td></td>
                            <td><input type='text' className='form-control' placeholder="ID"></input></td>
                            <td><input type='text' className='form-control' placeholder="Title"></input></td>
                            <td><input type='text' className='form-control' placeholder="Description"></input></td>
                            <td><input type='text' className='form-control' placeholder="Authors"></input></td>
                            <td><input type='text' className='form-control' placeholder="Image"></input></td>
                            <td><input type='text' className='form-control' placeholder="Preview Link"></input></td>
                            <td><input type='text' className='form-control' placeholder="Publisher"></input></td>
                            <td><input type='text' className='form-control' placeholder="Published Date"></input></td>
                            <td><input type='text' className='form-control' placeholder="Info Link"></input></td>
                            <td><input type='text' className='form-control' placeholder="Categories"></input></td>
                            <td><input type='text' className='form-control' placeholder="Ratings Count"></input></td>
                            <td><button className={"btn btn-primary"}>Add</button></td>
                            </tr>
                            {
                                books  && books.length>0 ?
                                books.map((item, index) => {
                                    return(
                                        <tr key={index} style={{height:'60px', overflow:'auto'}}>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'40px'}}>{index+1}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'120px'}}>{item.id}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'170px'}}>{item.title}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'170px'}}>{item.description}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'100px'}}>{item.authors}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'120px'}}>{item.image}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.previewLink}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.publisher}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.publishedDate}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.infoLink}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.categories}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.ratingsCount}</div></td>
                                            <td colSpan={2} style={{height:'80px', overflow:'auto',minWidth:'200px'}}>
                                                <button className="btn btn-primary" onClick={ShowBookModal}>Edit</button> &nbsp;
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Loading..."
                            }
                            
                        </tbody>
                    </Table>
                    <Modal show={bookModal} onHide={HideBookModal}>
                        <Modal.Header closeButton style={{minWidth:'600px', background:'white'}}>
                        <Modal.Title>Update Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{minWidth:'600px', background:'white'}}>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="ID" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="title" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="description" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="authors" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="image" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="preview link" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="publisher" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="published date" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="info link" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="categories" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="ratings count" ></input></Col>
                            </Row><br></br>
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                            <Button variant="secondary" onClick={HideBookModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <h1 style={{fontSize:'25px', fontWeight:'500'}}>Books Reviews</h1>
            <div style={{maxHeight:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Table striped bordered hover style={{border:'1px solid grey'}}>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Book ID</th>
                            <th>title</th>
                            <th>user ID</th>
                            <th>profile name</th>
                            <th>Preview Link</th>
                            <th>review helpfulness</th>
                            <th>review score</th>
                            <th>review time</th>
                            <th>review summary</th>
                            <th>review text</th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                            <tr>
                            <td></td>
                            <td><input type='text' className='form-control' placeholder="ID"></input></td>
                            <td><input type='text' className='form-control' placeholder="book ID"></input></td>
                            <td><input type='text' className='form-control' placeholder="title"></input></td>
                            <td><input type='text' className='form-control' placeholder="price"></input></td>
                            <td><input type='text' className='form-control' placeholder="user ID"></input></td>
                            <td><input type='text' className='form-control' placeholder="profile name"></input></td>
                            <td><input type='text' className='form-control' placeholder="review helpfulness"></input></td>
                            <td><input type='text' className='form-control' placeholder="review score"></input></td>
                            <td><input type='text' className='form-control' placeholder="review time"></input></td>
                            <td><input type='text' className='form-control' placeholder="review summary"></input></td>
                            <td><input type='text' className='form-control' placeholder="review text"></input></td>
                            <td><button className={"btn btn-primary"}>Add</button></td>
                            </tr>
                            {
                                books  && books.length>0 ?
                                books.map((item, index) => {
                                    return(
                                        <tr key={index} style={{height:'60px', overflow:'auto'}}>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'40px'}}>{index+1}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'120px'}}>{item.id}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'170px'}}>{item.title}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'170px'}}>{item.description}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'100px'}}>{item.authors}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'120px'}}>{item.image}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.previewLink}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.publisher}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.publishedDate}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.infoLink}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.categories}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.ratingsCount}</div></td>
                                            <td colSpan={2} style={{height:'80px', overflow:'auto',minWidth:'200px'}}>
                                                <button className="btn btn-primary" >Edit</button> &nbsp;
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Loading..."
                            }
                            
                        </tbody>
                    </Table>
                    <Modal >
                        <Modal.Header closeButton style={{minWidth:'600px', background:'white'}}>
                        <Modal.Title>Update Book</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{minWidth:'600px', background:'white'}}>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="ID" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="title" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="description" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="authors" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="image" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="preview link" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="publisher" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="published date" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="info link" ></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="categories" ></input></Col>
                            <Col><input type='text' className='form-control' placeholder="ratings count" ></input></Col>
                            </Row><br></br>
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                            <Button variant="secondary">
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleUpdate}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <h1 style={{fontSize:'25px', fontWeight:'500'}}>Apps</h1>
            <div style={{maxHeight:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                            <th>#</th>
                                            <th>url</th>
                                            <th>appId</th>
                                            <th>title</th>
                                            <th>summary</th>
                                            <th>developer</th>
                                            <th>developerId</th>
                                            <th>icon</th>
                                            <th>score</th>
                                            <th>scoreText</th>
                                            <th>priceText</th>
                                            <th>free</th>
                                            <th>description</th>
                                            <th>descriptionHTML</th>
                                            <th>installs</th>
                                            <th>minInstalls</th>
                                            <th>maxInstalls</th>
                                            <th>ratings</th>
                                            <th>reviewsCount</th>
                                            <th>histogram</th>
                                            <th>price</th>
                                            <th>currency</th>
                                            <th>available</th>
                                            <th>offersIAP</th>
                                            <th>iAPRange</th>
                                            <th>size</th>
                                            <th>androidVersion</th>
                                            <th>androidVersionText</th>
                                            <th>developerInternalID</th>
                                            <th>developerEmail</th>
                                            <th>developerWebsite</th>
                                            <th>developerAddress</th>
                                            <th>genre</th>
                                            <th>genreId</th>
                                            <th>familyGenre</th>
                                            <th>familyGenreId</th>
                                            <th>headerImage</th>
                                            <th>screenshots</th>
                                            <th>videoImage</th>
                                            <th>contentRating</th>
                                            <th>contentRatingDescription</th>
                                            <th>adSupported</th>
                                            <th>released</th>
                                            <th>updated</th>
                                            <th>version</th>
                                            <th>actions</th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                        <tr>
                            <td style={{minWidth:'40px'}}></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="app ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="summary" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="icon" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price text" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="free" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description html" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="installs" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="min installs" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="max installs" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ratings" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reviews count" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="histogram" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="currency" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="available" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="offers IAP" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="iAPRange" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="size" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version text" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer internal ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer email" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer website" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer address" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="header image" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="screenshots" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="video image" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating description" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ad supported" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="released" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="updated" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" ></input></td>
                            <td style={{minWidth:'170px'}}><button className={"btn btn-primary"}>Add</button></td>
                        </tr>
                            {
                                applications  && applications.length>0 ?
                                applications.map((item, index) => {
                                    return(
                                        <tr key={index} style={{height:'60px', overflow:'auto'}}>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{index+1}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.url}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.appId}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.title}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.summary}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developer}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerId}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.icon}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.score}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.scoreText}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.priceText}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.free}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.description}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.descriptionHTML}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.installs}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.minInstalls}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.maxInstalls}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.ratings}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.reviewsCount}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>Histogram</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.price}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.currency}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.available}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.offersIAP}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.iAPRange}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.size}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.androidVersion}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.androidVersionText}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerInternalID}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerEmail}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerWebsite}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerAddress}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.genre}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.genreId}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.familyGenre}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.familyGenreId}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.headerImage}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.screenshots}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.videoImage}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.contentRating}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.contentRatingDescription}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.adSupported}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.released}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.updated}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.version}</div></td>
                                            <td colSpan={2}>
                                                <button className="btn btn-primary" onClick={ShowAppModal}>Edit</button> &nbsp;
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.appId)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Loading..."
                            }
                            
                        </tbody>
                    </Table>
                    <Modal show={appModal}  onHide={HideAppModal}>
                        <Modal.Header closeButton style={{minWidth:'600px', background:'white'}}>
                        <Modal.Title>Update App</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{minWidth:'600px', background:'white'}}>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'70px'}} placeholder="url" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'70px'}} placeholder="app ID" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'70px'}} placeholder="title" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="summary" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer ID" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="icon" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price text" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="free" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description html" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="installs" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="min installs" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="max installs" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ratings" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reviews count" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="histogram" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="currency" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="available" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="offers IAP" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="iAPRange" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="size" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version text" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer internal ID" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer email" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer website" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer address" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre ID" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre ID" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="header image" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="screenshots" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="video image" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating description" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ad supported" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="released" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="updated" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" ></input></Row><br></br>
                            
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                        <Button variant="secondary" onClick={HideAppModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <h1 style={{fontSize:'25px', fontWeight:'500'}}>Games</h1>
            <div style={{maxHeight:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                            <th>#</th>
                                            <th>url</th>
                                            <th>game Id</th>
                                            <th>title</th>
                                            <th>summary</th>
                                            <th>developer</th>
                                            <th>developerId</th>
                                            <th>icon</th>
                                            <th>score</th>
                                            <th>scoreText</th>
                                            <th>priceText</th>
                                            <th>free</th>
                                            <th>description</th>
                                            <th>descriptionHTML</th>
                                            <th>installs</th>
                                            <th>minInstalls</th>
                                            <th>maxInstalls</th>
                                            <th>ratings</th>
                                            <th>reviewsCount</th>
                                            <th>histogram</th>
                                            <th>price</th>
                                            <th>currency</th>
                                            <th>available</th>
                                            <th>offersIAP</th>
                                            <th>iAPRange</th>
                                            <th>size</th>
                                            <th>androidVersion</th>
                                            <th>androidVersionText</th>
                                            <th>developerInternalID</th>
                                            <th>developerEmail</th>
                                            <th>developerWebsite</th>
                                            <th>developerAddress</th>
                                            <th>genre</th>
                                            <th>genreId</th>
                                            <th>familyGenre</th>
                                            <th>familyGenreId</th>
                                            <th>headerImage</th>
                                            <th>screenshots</th>
                                            <th>videoImage</th>
                                            <th>contentRating</th>
                                            <th>contentRatingDescription</th>
                                            <th>adSupported</th>
                                            <th>released</th>
                                            <th>updated</th>
                                            <th>version</th>
                                            <th>actions</th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                        <tr>
                            <td style={{minWidth:'40px'}}></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="game ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="summary" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="icon" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price text" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="free" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description html" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="installs" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="min installs" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="max installs" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ratings" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reviews count" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="histogram" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="currency" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="available" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="offers IAP" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="iAPRange" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="size" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version text" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer internal ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer email" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer website" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer address" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre ID" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="header image" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="screenshots" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="video image" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating description" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ad supported" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="released" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="updated" ></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" ></input></td>
                            <td style={{minWidth:'170px'}}><button className={"btn btn-primary"}>Add</button></td>
                        </tr>
                            {
                                games  && games.length>0 ?
                                games.map((item, index) => {
                                    return(
                                        <tr key={index} style={{height:'60px', overflow:'auto'}}>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{index+1}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.url}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.appId}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.title}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.summary}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developer}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerId}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.icon}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.score}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.scoreText}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.priceText}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.free}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.description}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.descriptionHTML}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.installs}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.minInstalls}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.maxInstalls}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.ratings}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.reviewsCount}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>Histogram</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.price}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.currency}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.available}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.offersIAP}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.iAPRange}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.size}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.androidVersion}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.androidVersionText}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerInternalID}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerEmail}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerWebsite}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.developerAddress}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.genre}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.genreId}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.familyGenre}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.familyGenreId}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.headerImage}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.screenshots}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.videoImage}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.contentRating}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.contentRatingDescription}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.adSupported}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.released}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.updated}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.version}</div></td>
                                            <td colSpan={2}>
                                                <button className="btn btn-primary" onClick={ShowGameModal}>Edit</button> &nbsp;
                                                <button className="btn btn-danger" onClick={() => handleDelete(item.appId)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Loading..."
                            }
                            
                        </tbody>
                    </Table>
                    <Modal show={gameModal}  onHide={HideGameModal}>
                        <Modal.Header closeButton style={{minWidth:'600px', background:'white'}}>
                        <Modal.Title>Update Game</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{minWidth:'600px', background:'white'}}>
                            <Row><input type='text' className='form-control' style={{minWidth:'70px'}} placeholder="url" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'70px'}} placeholder="game ID" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'70px'}} placeholder="title" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="summary" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer ID" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="icon" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price text" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="free" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description html" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="installs" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="min installs" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="max installs" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ratings" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reviews count" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="histogram" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="currency" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="available" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="offers IAP" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="iAPRange" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="size" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version text" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer internal ID" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer email" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer website" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer address" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre ID" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre ID" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="header image" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="screenshots" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="video image" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating description" ></input></Row><br></br>
                            
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ad supported" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="released" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="updated" ></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" ></input></Row><br></br>
                            
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                        <Button variant="secondary" onClick={HideGameModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            
        </div>
    );
};

export default Admin;