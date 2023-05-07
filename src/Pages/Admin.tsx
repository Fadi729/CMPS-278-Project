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
import { getMoviesAsync, postMoviesAsync, putMoviesAsync, deleteMoviesAsync } from "../features/moviesSlice";
import { getBooksAsync, postBooksAsync} from "../features/booksSlice";
import { getGamesAsync } from "../features/gamesSlice";
import { getApplicationsAsync } from "../features/applicationsSlice";
import Movies from "./Movies";
import Movie from "../data/Interfaces/Movies";
import Review from "../data/Interfaces/Movies";
import { MongoDriverError } from "mongodb";

const Admin = () => {
    
    
    
    
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
    
    /*

    var movies = [{
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
      */

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
    const [bookReviewsModal, setBookReviewsModal] = useState(false);
    const [appReviewsModal, setAppReviewsModal] = useState(false);
    const [gameReviewsModal, setGameReviewsModal] = useState(false);

    const ShowMovieModal = (
    id:number,
    title:string,
    date:string,
    image:string,
    rating:string,
    genres:string,
    trailer:string,
    cast:string,
    credits:string,
    company:string,
    description:string,
    price:string,
    sales:string) => {
        updateMovie.id=id;
        updateMovie.title=title;updateMovie.date=date ;
        updateMovie.image=image;updateMovie.rating=rating ;
        updateMovie.genres=genres;updateMovie.trailer=trailer ;
        updateMovie.cast=cast;updateMovie.credits=credits ;
        updateMovie.company=company;updateMovie.description=description ;
        updateMovie.price=price;updateMovie.sales=sales ;
        setMovieModal(true)
        
    }
    const HideMovieModal = () => {setMovieModal(false)}
    const ShowBookModal = () => {setBookModal(true)}
    const HideBookModal = () => {setBookModal(false)}
    const ShowBookReviewsModal = () => {setBookReviewsModal(true)}
    const HideBookReviewsModal = () => {setBookReviewsModal(false)}
    const ShowAppModal = () => {setAppModal(true)}
    const HideAppModal = () => {setAppModal(false)}
    const ShowAppReviewsModal = () => {setAppReviewsModal(true)}
    const HideAppReviewsModal = () => {setAppReviewsModal(false)}
    const ShowGameModal = () => {setGameModal(true)}
    const HideGameModal = () => {setGameModal(false)}
    const ShowGameReviewsModal = () => {setGameReviewsModal(true)}
    const HideGameReviewsModal = () => {setGameReviewsModal(false)}

    let updateMovie : Movie={
        id:0,
        title:'',
        date:'',
        image:'',
        rating:'',
        genres:'',
        trailer:'',
        cast:'',
        credits:'',
        company:'',
        description:'',
        price:'',
        sales:'',
        reviews: [{
            content: '',
            helpful: 0,
            title: '',
            author: '',
            date: '',
            rating1: 0,
            notHelpful: 0
        } as Review]
    } as Movie ;

    

    
    let addMovie : Movie={
        title:'',
        date:'',
        image:'',
        rating:'',
        genres:'',
        trailer:'',
        cast:'',
        credits:'',
        company:'',
        description:'',
        price:'',
        sales:'',
        reviews: [{
            content: '',
            helpful: 0,
            title: '',
            author: '',
            date: '',
            rating1: 0,
            notHelpful: 0
        } as Review]
    } as Movie ;
    var updateBook={
        ID:'',
        Title:'',
        Description:'',
        Authors:'',
        Image:'',
        PreviewLink:'',
        Publisher:'',
        PublishedDate:'',
        InfoLink:'',
        Categories:'',
        RatingsCount:''
    };
    var addBook={
        ID:'',
        Title:'',
        Description:'',
        Authors:'',
        Image:'',
        PreviewLink:'',
        Publisher:'',
        PublishedDate:'',
        InfoLink:'',
        Categories:'',
        RatingsCount:''
    };
    var updateBookReview={
        ID:'',
        BookID:'',
        Title:'',
        UserID:'',
        ProfileName:'',
        PreviewLink:'',
        ReviewHelpfulness:'',
        ReviewScore:'',
        ReviewTime:'',
        ReviewSummary:'',
        ReviewText:''
    }
    var addBookReview={
        ID:'',
        BookID:'',
        Title:'',
        UserID:'',
        ProfileName:'',
        PreviewLink:'',
        ReviewHelpfulness:'',
        ReviewScore:'',
        ReviewTime:'',
        ReviewSummary:'',
        ReviewText:''
    }
    var updateApp={
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
        version:'',
        actions:''
    }
    var addApp={
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
        version:'',
        actions:''
    }
    var updateGame={
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
        version:'',
        actions:''
    }
    var addGame={
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
        version:'',
        actions:''
    }
    var updateGameReview={
        Id:'',
        appId:'',
        userName:'',
        userImage:'',
        date:'',
        score:'',
        scoreText:'',
        url:'',
        title:'',
        text:'',
        replyDate:'',
        replyText:'',
        version:'',
        thumbsUp:''
    }
    var addGameReview={
        Id:'',
        appId:'',
        userName:'',
        userImage:'',
        date:'',
        score:'',
        scoreText:'',
        url:'',
        title:'',
        text:'',
        replyDate:'',
        replyText:'',
        version:'',
        thumbsUp:''
    }
    var updateAppReview={
        Id:'',
        appId:'',
        userName:'',
        userImage:'',
        date:'',
        score:'',
        scoreText:'',
        url:'',
        title:'',
        text:'',
        replyDate:'',
        replyText:'',
        version:'',
        thumbsUp:''
    }
    var addAppReview={
        Id:'',
        appId:'',
        userName:'',
        userImage:'',
        date:'',
        score:'',
        scoreText:'',
        url:'',
        title:'',
        text:'',
        replyDate:'',
        replyText:'',
        version:'',
        thumbsUp:''
    }
    function AddMovie(){
        dispatch(postMoviesAsync(addMovie))
    }
    function EditMovie(){
        dispatch(deleteMoviesAsync(updateMovie.id))
        dispatch(postMoviesAsync(updateMovie))
    }
    function DeleteMovie(id: number){
        dispatch(deleteMoviesAsync(id))
    }
    function AddBook(){

    }
    function EditBook(){

    }
    function DeleteBook(id: String){

    }
    function AddBookReview(){

    }
    function EditBookReview(){

    }
    function DeleteBookReview(id: String){

    }
    function AddApp(){

    }
    function EditApp(){

    }
    function DeleteApp(id: String){

    }
    function AddAppReview(){

    }
    function EditAppReview(){

    }
    function DeleteAppReview(id: String){

    }
    function AddGame(){

    }
    function EditGame(){

    }
    function DeleteGame(id: String){

    }
    function AddGameReview(){

    }
    function EditGameReview(){

    }
    function DeleteGameReview(id: String){

    }
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
                            <td><input type='text' className='form-control' placeholder="ID" onChange={(e)=>{addMovie.id=parseInt(e.target.value)}}></input></td>
                            <td><input type='text' className='form-control' placeholder="title" onChange={(e)=>{addMovie.title=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="date" onChange={(e)=>{addMovie.date=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="image" onChange={(e)=>{addMovie.image=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="rating" onChange={(e)=>{addMovie.rating=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="genre" onChange={(e)=>{addMovie.genres=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="trailer" onChange={(e)=>{addMovie.trailer=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="cast" onChange={(e)=>{addMovie.cast=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="credits" onChange={(e)=>{addMovie.credits=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="company" onChange={(e)=>{addMovie.company=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="description" onChange={(e)=>{addMovie.description=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="price" onChange={(e)=>{addMovie.price=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="sales" onChange={(e)=>{addMovie.sales=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="reviews"></input></td>
                            <td><button className={"btn btn-primary"} onClick={AddMovie}>Add</button></td>
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
                                                <button className="btn btn-primary" onClick={() => {ShowMovieModal(item.id,item.title,item.date,item.image,item.rating,item.genres,item.trailer,item.cast,item.credits,item.company,item.description,item.price,item.sales)}}>Edit</button>&nbsp;
                                                <button className="btn btn-danger" onClick={() => {DeleteMovie(item.id)}}>Delete</button>
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
                            <Col><input type='text' className='form-control' placeholder="ID"  onChange={(e)=>{updateMovie.id=parseInt(e.target.value)}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="title"  onChange={(e)=>{updateMovie.title=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="date"  onChange={(e)=>{updateMovie.date=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="image"  onChange={(e)=>{updateMovie.image=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="rating"  onChange={(e)=>{updateMovie.rating=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="genre"  onChange={(e)=>{updateMovie.genres=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="trailer"  onChange={(e)=>{updateMovie.trailer=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="cast"  onChange={(e)=>{updateMovie.cast=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="credits"  onChange={(e)=>{updateMovie.credits=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="company"  onChange={(e)=>{updateMovie.company=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="description"  onChange={(e)=>{updateMovie.description=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="price"  onChange={(e)=>{updateMovie.price=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="sales"  onChange={(e)=>{updateMovie.sales=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="reviews"></input></Col>
                            </Row><br></br>
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                            <Button variant="secondary" onClick={HideMovieModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={EditMovie}>
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
                            <td><input type='text' className='form-control' placeholder="ID"  onChange={(e)=>{addBook.ID=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Title"  onChange={(e)=>{addBook.Title=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Description"  onChange={(e)=>{addBook.Description=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Authors"  onChange={(e)=>{addBook.Authors=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Image"  onChange={(e)=>{addBook.Image=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Preview Link"  onChange={(e)=>{addBook.PreviewLink=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Publisher"  onChange={(e)=>{addBook.Publisher=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Published Date"  onChange={(e)=>{addBook.PublishedDate=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Info Link"  onChange={(e)=>{addBook.InfoLink=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Categories"  onChange={(e)=>{addBook.Categories=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="Ratings Count"  onChange={(e)=>{addBook.RatingsCount=e.target.value}}></input></td>
                            <td><button className={"btn btn-primary"} onClick={AddBook}>Add</button></td>
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
                                                <button className="btn btn-danger" onClick={() => DeleteBook(item.id)}>Delete</button>
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
                            <Col><input type='text' className='form-control' placeholder="ID" onChange={(e)=>{updateBook.ID=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="title" onChange={(e)=>{updateBook.Title=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="description" onChange={(e)=>{updateBook.Description=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="authors" onChange={(e)=>{updateBook.Authors=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="image" onChange={(e)=>{updateBook.Image=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="preview link" onChange={(e)=>{updateBook.PreviewLink=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="publisher" onChange={(e)=>{updateBook.Publisher=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="published date" onChange={(e)=>{updateBook.PublishedDate=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="info link" onChange={(e)=>{updateBook.InfoLink=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="categories" onChange={(e)=>{updateBook.Categories=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="ratings count" onChange={(e)=>{updateBook.RatingsCount=e.target.value}}></input></Col>
                            </Row><br></br>
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                            <Button variant="secondary" onClick={HideBookModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={EditBook}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <h1 style={{fontSize:'25px', fontWeight:'500'}}>Book Reviews</h1>
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
                            <th>review helpfulness</th>
                            <th>review score</th>
                            <th>review time</th>
                            <th>review summary</th>
                            <th>review text</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                            <tr>
                            <td></td>
                            <td><input type='text' className='form-control' placeholder="ID" onChange={(e)=>{addBookReview.ID=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="book ID" onChange={(e)=>{addBookReview.BookID=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="title" onChange={(e)=>{addBookReview.Title=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="user ID" onChange={(e)=>{addBookReview.UserID=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="profile name" onChange={(e)=>{addBookReview.ProfileName=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="review helpfulness" onChange={(e)=>{addBookReview.ReviewHelpfulness=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="review score" onChange={(e)=>{addBookReview.ReviewScore=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="review time" onChange={(e)=>{addBookReview.ReviewTime=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="review summary" onChange={(e)=>{addBookReview.ReviewSummary=e.target.value}}></input></td>
                            <td><input type='text' className='form-control' placeholder="review text" onChange={(e)=>{addBookReview.ReviewText=e.target.value}}></input></td>
                            <td><button className={"btn btn-primary"} onClick={AddBookReview}>Add</button></td>
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
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.publisher}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.publishedDate}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.infoLink}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.categories}</div></td>
                                            <td><div style={{height:'80px', overflow:'auto', minWidth:'270px'}}>{item.ratingsCount}</div></td>
                                            <td colSpan={2} style={{height:'80px', overflow:'auto',minWidth:'200px'}}>
                                                <button className="btn btn-primary" onClick={ShowBookReviewsModal}>Edit</button> &nbsp;
                                                <button className="btn btn-danger" onClick={() => DeleteBookReview(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Loading..."
                            }
                            
                        </tbody>
                    </Table>
                    <Modal show={bookReviewsModal} onHide={HideBookReviewsModal}>
                        <Modal.Header closeButton style={{minWidth:'600px', background:'white'}}>
                        <Modal.Title>Update Book Review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{minWidth:'600px', background:'white'}}>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="ID" onChange={(e)=>{updateBookReview.ID=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="title" onChange={(e)=>{updateBookReview.Title=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="user ID" onChange={(e)=>{updateBookReview.UserID=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="profile name" onChange={(e)=>{updateBookReview.ProfileName=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="preview link" onChange={(e)=>{updateBookReview.PreviewLink=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="review helpfulness" onChange={(e)=>{updateBookReview.ReviewHelpfulness=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="review score" onChange={(e)=>{updateBookReview.ReviewScore=e.target.value}}></input></Col>
                            <Col><input type='text' className='form-control' placeholder="review time" onChange={(e)=>{updateBookReview.ReviewTime=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="review summary" onChange={(e)=>{updateBookReview.ReviewSummary=e.target.value}}></input></Col>
                            </Row><br></br>
                            <Row>
                            <Col><input type='text' className='form-control' placeholder="review text" onChange={(e)=>{updateBookReview.ReviewText=e.target.value}}></input></Col>
                            </Row><br></br>
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                            <Button variant="secondary" onClick={HideBookReviewsModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={EditBookReview}>
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
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" onChange={(e) => addApp.url=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="app ID" onChange={(e) => addApp.appId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" onChange={(e) => addApp.title=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="summary" onChange={(e) => addApp.summary=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer" onChange={(e) => addApp.developer=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer ID" onChange={(e) => addApp.developerId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="icon" onChange={(e) => addApp.icon=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" onChange={(e) => addApp.score=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" onChange={(e) => addApp.scoreText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price text" onChange={(e) => addApp.priceText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="free" onChange={(e) => addApp.free=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description" onChange={(e) => addApp.description=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description html" onChange={(e) => addApp.descriptionHTML=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="installs" onChange={(e) => addApp.installs=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="min installs" onChange={(e) => addApp.minInstalls=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="max installs" onChange={(e) => addApp.maxInstalls=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ratings" onChange={(e) => addApp.ratings=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reviews count" onChange={(e) => addApp.reviewsCount=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="histogram" onChange={(e) => addApp.histogram=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price" onChange={(e) => addApp.price=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="currency" onChange={(e) => addApp.currency=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="available" onChange={(e) => addApp.available=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="offers IAP" onChange={(e) => addApp.offersIAP=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="iAPRange" onChange={(e) => addApp.iAPRange=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="size" onChange={(e) => addApp.size=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version" onChange={(e) => addApp.androidVersion=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version text" onChange={(e) => addApp.androidVersionText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer internal ID" onChange={(e) => addApp.developerInternalID=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer email" onChange={(e) => addApp.developerEmail=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer website" onChange={(e) => addApp.developerWebsite=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer address" onChange={(e) => addApp.developerAddress=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre" onChange={(e) => addApp.genre=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre ID" onChange={(e) => addApp.genreId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre" onChange={(e) => addApp.familyGenre=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre ID" onChange={(e) => addApp.familyGenreId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="header image" onChange={(e) => addApp.headerImage=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="screenshots" onChange={(e) => addApp.screenshots=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="video image" onChange={(e) => addApp.videoImage=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating" onChange={(e) => addApp.contentRating=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating description" onChange={(e) => addApp.contentRatingDescription=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ad supported" onChange={(e) => addApp.adSupported=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="released" onChange={(e) => addApp.released=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="updated" onChange={(e) => addApp.updated=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" onChange={(e) => addApp.version=e.target.value}></input></td>
                            <td style={{minWidth:'170px'}}><button className={"btn btn-primary"} onClick={AddApp}>Add</button></td>
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
                                                <button className="btn btn-danger" onClick={() => DeleteApp(item.appId)}>Delete</button>
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
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" onChange={(e) => updateApp.url=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="app ID" onChange={(e) => updateApp.appId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" onChange={(e) => updateApp.title=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="summary" onChange={(e) => updateApp.summary=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer" onChange={(e) => updateApp.developer=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer ID" onChange={(e) => updateApp.developerId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="icon" onChange={(e) => updateApp.icon=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" onChange={(e) => updateApp.score=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" onChange={(e) => updateApp.scoreText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price text" onChange={(e) => updateApp.priceText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="free" onChange={(e) => updateApp.free=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description" onChange={(e) => updateApp.description=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description html" onChange={(e) => updateApp.descriptionHTML=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="installs" onChange={(e) => updateApp.installs=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="min installs" onChange={(e) => updateApp.minInstalls=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="max installs" onChange={(e) => updateApp.maxInstalls=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ratings" onChange={(e) => updateApp.ratings=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reviews count" onChange={(e) => updateApp.reviewsCount=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="histogram" onChange={(e) => updateApp.histogram=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price" onChange={(e) => updateApp.price=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="currency" onChange={(e) => updateApp.currency=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="available" onChange={(e) => updateApp.available=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="offers IAP" onChange={(e) => updateApp.offersIAP=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="iAPRange" onChange={(e) => updateApp.iAPRange=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="size" onChange={(e) => updateApp.size=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version" onChange={(e) => updateApp.androidVersion=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version text" onChange={(e) => updateApp.androidVersionText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer internal ID" onChange={(e) => updateApp.developerInternalID=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer email" onChange={(e) => updateApp.developerEmail=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer website" onChange={(e) => updateApp.developerWebsite=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer address" onChange={(e) => updateApp.developerAddress=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre" onChange={(e) => updateApp.genre=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre ID" onChange={(e) => updateApp.genreId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre" onChange={(e) => updateApp.familyGenre=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre ID" onChange={(e) => updateApp.familyGenreId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="header image" onChange={(e) => updateApp.headerImage=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="screenshots" onChange={(e) => updateApp.screenshots=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="video image" onChange={(e) => updateApp.videoImage=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating" onChange={(e) => updateApp.contentRating=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating description" onChange={(e) => updateApp.contentRatingDescription=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ad supported" onChange={(e) => updateApp.adSupported=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="released" onChange={(e) => updateApp.released=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="updated" onChange={(e) => updateApp.updated=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" onChange={(e) => updateApp.version=e.target.value}></input></Row><br></br>                 
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                        <Button variant="secondary" onClick={HideAppModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={EditApp}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <h1 style={{fontSize:'25px', fontWeight:'500'}}>App Reviews</h1>
            <div style={{maxHeight:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                            <th>#</th>
                                            <th>url</th>
                                            <th>app Id</th>
                                            <th>user name</th>
                                            <th>user image</th>
                                            <th>date</th>
                                            <th>score</th>
                                            <th>score text</th>
                                            <th>url</th>
                                            <th>title</th>
                                            <th>text</th>
                                            <th>reply date</th>
                                            <th>reply text</th>
                                            <th>version</th>
                                            <th>thumbs up</th>
                                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                        <tr>
                            <td style={{minWidth:'40px'}}></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="Id" onChange={(e) => addAppReview.Id=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="app ID" onChange={(e) => addAppReview.appId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="user name" onChange={(e) => addAppReview.userName=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="user image" onChange={(e) => addAppReview.userImage=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="date" onChange={(e) => addAppReview.date=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" onChange={(e) => addAppReview.score=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" onChange={(e) => addAppReview.scoreText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" onChange={(e) => addAppReview.url=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" onChange={(e) => addAppReview.title=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="text" onChange={(e) => addAppReview.text=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reply date" onChange={(e) => addAppReview.replyDate=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reply text" onChange={(e) => addAppReview.replyText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" onChange={(e) => addAppReview.version=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="thumbs up" onChange={(e) => addAppReview.thumbsUp=e.target.value}></input></td>
                            <td style={{minWidth:'170px'}}><button className={"btn btn-primary"} onClick={AddAppReview}>Add</button></td>
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
                                            <td colSpan={2}>
                                                <button className="btn btn-primary" onClick={ShowAppReviewsModal}>Edit</button> &nbsp;
                                                <button className="btn btn-danger" onClick={() => DeleteAppReview(item.appId)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Loading..."
                            }
                            
                        </tbody>
                    </Table>
                    <Modal show={appReviewsModal}  onHide={HideAppReviewsModal}>
                        <Modal.Header closeButton style={{minWidth:'600px', background:'white'}}>
                        <Modal.Title>Update App Review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{minWidth:'600px', background:'white'}}>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="Id" onChange={(e) => updateAppReview.Id=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="app ID" onChange={(e) => updateAppReview.appId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="user name" onChange={(e) => updateAppReview.userName=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="user image" onChange={(e) => updateAppReview.userImage=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="date" onChange={(e) => updateAppReview.date=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" onChange={(e) => updateAppReview.score=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" onChange={(e) => updateAppReview.scoreText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" onChange={(e) => updateAppReview.url=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" onChange={(e) => updateAppReview.title=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="text" onChange={(e) => updateAppReview.text=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reply date" onChange={(e) => updateAppReview.replyDate=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reply text" onChange={(e) => updateAppReview.replyText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" onChange={(e) => updateAppReview.version=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="thumbs up" onChange={(e) => updateAppReview.thumbsUp=e.target.value}></input></Row><br></br>                                                   
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                        <Button variant="secondary" onClick={HideAppReviewsModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={EditAppReview}>
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
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" onChange={(e) => addGame.url=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="game ID" onChange={(e) => addGame.appId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" onChange={(e) => addGame.title=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="summary" onChange={(e) => addGame.summary=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer" onChange={(e) => addGame.developer=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer ID" onChange={(e) => addGame.developerId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="icon" onChange={(e) => addGame.icon=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" onChange={(e) => addGame.score=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" onChange={(e) => addGame.scoreText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price text" onChange={(e) => addGame.priceText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="free" onChange={(e) => addGame.free=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description" onChange={(e) => addGame.description=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description html" onChange={(e) => addGame.descriptionHTML=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="installs" onChange={(e) => addGame.installs=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="min installs" onChange={(e) => addGame.minInstalls=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="max installs" onChange={(e) => addGame.maxInstalls=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ratings" onChange={(e) => addGame.ratings=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reviews count" onChange={(e) => addGame.reviewsCount=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="histogram" onChange={(e) => addGame.histogram=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price" onChange={(e) => addGame.price=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="currency" onChange={(e) => addGame.currency=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="available" onChange={(e) => addGame.available=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="offers IAP" onChange={(e) => addGame.offersIAP=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="iAPRange" onChange={(e) => addGame.iAPRange=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="size" onChange={(e) => addGame.size=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version" onChange={(e) => addGame.androidVersion=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version text" onChange={(e) => addGame.androidVersionText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer internal ID" onChange={(e) => addGame.developerInternalID=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer email" onChange={(e) => addGame.developerEmail=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer website" onChange={(e) => addGame.developerWebsite=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer address" onChange={(e) => addGame.developerAddress=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre" onChange={(e) => addGame.genre=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre ID" onChange={(e) => addGame.genreId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre" onChange={(e) => addGame.familyGenre=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre ID" onChange={(e) => addGame.familyGenreId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="header image" onChange={(e) => addGame.headerImage=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="screenshots" onChange={(e) => addGame.screenshots=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="video image" onChange={(e) => addGame.videoImage=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating" onChange={(e) => addGame.contentRating=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating description" onChange={(e) => addGame.contentRatingDescription=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ad supported" onChange={(e) => addGame.adSupported=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="released" onChange={(e) => addGame.released=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="updated" onChange={(e) => addGame.updated=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" onChange={(e) => addGame.version=e.target.value}></input></td>
                            <td style={{minWidth:'170px'}}><button className={"btn btn-primary"} onClick={AddGame}>Add</button></td>
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
                                                <button className="btn btn-danger" onClick={() => DeleteGame(item.appId)}>Delete</button>
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
                        <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" onChange={(e) => updateGame.url=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="game ID" onChange={(e) => updateGame.appId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" onChange={(e) => updateGame.title=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="summary" onChange={(e) => updateGame.summary=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer" onChange={(e) => updateGame.developer=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer ID" onChange={(e) => updateGame.developerId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="icon" onChange={(e) => updateGame.icon=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" onChange={(e) => updateGame.score=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" onChange={(e) => updateGame.scoreText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price text" onChange={(e) => updateGame.priceText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="free" onChange={(e) => updateGame.free=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description" onChange={(e) => updateGame.description=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="description html" onChange={(e) => updateGame.descriptionHTML=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="installs" onChange={(e) => updateGame.installs=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="min installs" onChange={(e) => updateGame.minInstalls=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="max installs" onChange={(e) => updateGame.maxInstalls=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ratings" onChange={(e) => updateGame.ratings=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reviews count" onChange={(e) => updateGame.reviewsCount=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="histogram" onChange={(e) => updateGame.histogram=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="price" onChange={(e) => updateGame.price=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="currency" onChange={(e) => updateGame.currency=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="available" onChange={(e) => updateGame.available=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="offers IAP" onChange={(e) => updateGame.offersIAP=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="iAPRange" onChange={(e) => updateGame.iAPRange=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="size" onChange={(e) => updateGame.size=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version" onChange={(e) => updateGame.androidVersion=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="android version text" onChange={(e) => updateGame.androidVersionText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer internal ID" onChange={(e) => updateGame.developerInternalID=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer email" onChange={(e) => updateGame.developerEmail=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer website" onChange={(e) => updateGame.developerWebsite=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="developer address" onChange={(e) => updateGame.developerAddress=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre" onChange={(e) => updateGame.genre=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="genre ID" onChange={(e) => updateGame.genreId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre" onChange={(e) => updateGame.familyGenre=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="family genre ID" onChange={(e) => updateGame.familyGenreId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="header image" onChange={(e) => updateGame.headerImage=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="screenshots" onChange={(e) => updateGame.screenshots=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="video image" onChange={(e) => updateGame.videoImage=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating" onChange={(e) => updateGame.contentRating=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="content rating description" onChange={(e) => updateGame.contentRatingDescription=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="ad supported" onChange={(e) => updateGame.adSupported=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="released" onChange={(e) => updateGame.released=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="updated" onChange={(e) => updateGame.updated=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" onChange={(e) => updateGame.version=e.target.value}></input></Row><br></br>                 
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                        <Button variant="secondary" onClick={HideGameModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={EditGame}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <h1 style={{fontSize:'25px', fontWeight:'500'}}>Game Reviews</h1>
            <div style={{maxHeight:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                            <th>#</th>
                                            <th>url</th>
                                            <th>game Id</th>
                                            <th>user name</th>
                                            <th>user image</th>
                                            <th>date</th>
                                            <th>score</th>
                                            <th>score text</th>
                                            <th>url</th>
                                            <th>title</th>
                                            <th>text</th>
                                            <th>reply date</th>
                                            <th>reply text</th>
                                            <th>version</th>
                                            <th>thumbs up</th>
                                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                        <tr>
                            <td style={{minWidth:'40px'}}></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="Id" onChange={(e) => addGameReview.Id=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="game ID" onChange={(e) => addGameReview.appId=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="user name" onChange={(e) => addGameReview.userName=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="user image" onChange={(e) => addGameReview.userImage=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="date" onChange={(e) => addGameReview.date=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" onChange={(e) => addGameReview.score=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" onChange={(e) => addGameReview.scoreText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" onChange={(e) => addGameReview.url=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" onChange={(e) => addGameReview.title=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="text" onChange={(e) => addGameReview.text=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reply date" onChange={(e) => addGameReview.replyDate=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reply text" onChange={(e) => addGameReview.replyText=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" onChange={(e) => addGameReview.version=e.target.value}></input></td>
                            <td><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="thumbs up" onChange={(e) => addGameReview.thumbsUp=e.target.value}></input></td>
                            <td style={{minWidth:'170px'}}><button className={"btn btn-primary"} onClick={AddGameReview}>Add</button></td>
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
                                            <td colSpan={2}>
                                                <button className="btn btn-primary" onClick={ShowGameReviewsModal}>Edit</button> &nbsp;
                                                <button className="btn btn-danger" onClick={() => DeleteGameReview(item.appId)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "Loading..."
                            }
                            
                        </tbody>
                    </Table>
                    <Modal show={gameReviewsModal}  onHide={HideGameReviewsModal}>
                        <Modal.Header closeButton style={{minWidth:'600px', background:'white'}}>
                        <Modal.Title>Update Game Review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{minWidth:'600px', background:'white'}}>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="Id" onChange={(e) => updateGameReview.Id=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="game ID" onChange={(e) => updateGameReview.appId=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="user name" onChange={(e) => updateGameReview.userName=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="user image" onChange={(e) => updateGameReview.userImage=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="date" onChange={(e) => updateGameReview.date=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score" onChange={(e) => updateGameReview.score=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="score text" onChange={(e) => updateGameReview.scoreText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="url" onChange={(e) => updateGameReview.url=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="title" onChange={(e) => updateGameReview.title=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="text" onChange={(e) => updateGameReview.text=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reply date" onChange={(e) => updateGameReview.replyDate=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="reply text" onChange={(e) => updateGameReview.replyText=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="version" onChange={(e) => updateGameReview.version=e.target.value}></input></Row><br></br>
                            <Row><input type='text' className='form-control' style={{minWidth:'170px'}} placeholder="thumbs up" onChange={(e) => updateGameReview.thumbsUp=e.target.value}></input></Row><br></br>                            
                        </Modal.Body>
                        <Modal.Footer style={{minWidth:'600px', background:'white'}}>
                        <Button variant="secondary" onClick={HideGameReviewsModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={EditGameReview}>
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