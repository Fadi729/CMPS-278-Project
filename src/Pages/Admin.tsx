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

    console.log("Admin page")    

    const handleEdit = (id: any) => {
        handleShow();
    }
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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setId]=useState('');
    const [title, setTitle]=useState('');
    const [rating, setRating]=useState('');

    const [editID, setEditId]=useState('');
    const [editTitle, setEditTitle]=useState('');
    const [editRating, setEditRating]=useState('');

    

    return(
        <div className='relative top-16'>
            <div style={{height:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Container>
                        <Row>
                            <Col>
                            <input type='text' className='form-control' placeholder="ID" value={id} onChange={(e) => setId(e.target.value)}></input>
                            </Col>
                            <Col>
                            <input type='text' className='form-control' placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col>
                            <Col>
                            <button className="btn btn-primary">Submit</button>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>title</th>
                            <th>date</th>
                            <th>image</th>
                            <th>rating</th>
                            <th>genre</th>
                            <th>trailer</th>
                            <th>cast</th>
                            <th>credits</th>
                            <th>company</th>
                            <th>description</th>
                            <th>price</th>
                            <th>sales</th>
                            <th>reviews</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                            {
                                movies  && movies.length>0 ?
                                movies.map((item, index) => {
                                    return(
                                        <tr key={index} style={{height:'60px', overflow:'auto'}}>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{index+1}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.id}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.title}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.date}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.image}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.rating}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.genres}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.trailer}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.cast}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.credits}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.company}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.description}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.price}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.sales}</div></td>
                                            <td>Reviews</td>
                                            <td colSpan={2}>
                                                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
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
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Update Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                <input type='text' className='form-control' placeholder="ID" value={editID} onChange={(e) => setId(e.target.value)}></input>
                                </Col>
                                <Col>
                                <input type='text' className='form-control' placeholder="Title" value={editTitle} onChange={(e) => setTitle(e.target.value)}></input>
                                </Col><Col>
                                <input type='text' className='form-control' placeholder="Rating" value={editRating} onChange={(e) => setRating(e.target.value)}></input>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <div style={{height:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Container>
                        <Row>
                            <Col>
                            <input type='text' className='form-control' placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)}></input>
                            </Col>
                            <Col>
                            <input type='text' className='form-control' placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Enter Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col>
                            <Col>
                            <button className="btn btn-primary">Submit</button>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>title</th>
                            <th>date</th>
                            <th>image</th>
                            <th>rating</th>
                            <th>genre</th>
                            <th>trailer</th>
                            <th>cast</th>
                            <th>credits</th>
                            <th>company</th>
                            <th>description</th>
                            <th>price</th>
                            <th>sales</th>
                            <th>reviews</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
                            {
                                books  && books.length>0 ?
                                books.map((item, index) => {
                                    return(
                                        <tr key={index} style={{height:'60px', overflow:'auto'}}>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{index+1}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.id}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.title}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.description}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.authors}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.image}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.previewLink}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.publisher}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.publishedDate}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.infoLink}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.categories}</div></td>
                                            <td><div style={{height:'60px', overflow:'auto'}}>{item.ratingsCount}</div></td>
                                            <td>Reviews</td>
                                            <td colSpan={2}>
                                                <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button> &nbsp;
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
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Update Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                <input type='text' className='form-control' placeholder="Enter ID" value={editID} onChange={(e) => setId(e.target.value)}></input>
                                </Col>
                                <Col>
                                <input type='text' className='form-control' placeholder="Enter Title" value={editTitle} onChange={(e) => setTitle(e.target.value)}></input>
                                </Col><Col>
                                <input type='text' className='form-control' placeholder="Enter Rating" value={editRating} onChange={(e) => setRating(e.target.value)}></input>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <div style={{height:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Container>
                        <Row>
                            <Col>
                            <input type='text' className='form-control' placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)}></input>
                            </Col>
                            <Col>
                            <input type='text' className='form-control' placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Enter Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col>
                            <Col>
                            <button className="btn btn-primary">Submit</button>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                            <th>#</th>
                                            <th>index+1</th>
                                            <th>item.url</th>
                                            <th>item.appId</th>
                                            <th>item.title</th>
                                            <th>item.summary</th>
                                            <th>item.developer</th>
                                            <th>item.developerId</th>
                                            <th>item.icon</th>
                                            <th>item.score</th>
                                            <th>item.scoreText</th>
                                            <th>item.priceText</th>
                                            <th>item.free</th>
                                            <th>item.description</th>
                                            <th>item.descriptionHTML</th>
                                            <th>item.installs</th>
                                            <th>item.minInstalls</th>
                                            <th>item.maxInstalls</th>
                                            <th>item.ratings</th>
                                            <th>item.reviewsCount</th>
                                            <th>item.histogram</th>
                                            <th>item.price</th>
                                            <th>item.currency</th>
                                            <th>item.available</th>
                                            <th>item.offersIAP</th>
                                            <th>item.iAPRange</th>
                                            <th>item.size</th>
                                            <th>item.androidVersion</th>
                                            <th>item.androidVersionText</th>
                                            <th>item.developerInternalID</th>
                                            <th>item.developerEmail</th>
                                            <th>item.developerWebsite</th>
                                            <th>item.developerAddress</th>
                                            <th>item.genre</th>
                                            <th>item.genreId</th>
                                            <th>item.familyGenre</th>
                                            <th>item.familyGenreId</th>
                                            <th>item.headerImage</th>
                                            <th>item.screenshots</th>
                                            <th>item.videoImage</th>
                                            <th>item.contentRating</th>
                                            <th>item.contentRatingDescription</th>
                                            <th>item.adSupported</th>
                                            <th>item.released</th>
                                            <th>item.updated</th>
                                            <th>item.version</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
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
                                                <button className="btn btn-primary" onClick={() => handleEdit(item.appId)}>Edit</button> &nbsp;
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
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Update Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                <input type='text' className='form-control' placeholder="Enter ID" value={editID} onChange={(e) => setId(e.target.value)}></input>
                                </Col>
                                <Col>
                                <input type='text' className='form-control' placeholder="Enter Title" value={editTitle} onChange={(e) => setTitle(e.target.value)}></input>
                                </Col><Col>
                                <input type='text' className='form-control' placeholder="Enter Rating" value={editRating} onChange={(e) => setRating(e.target.value)}></input>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdate}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </Fragment>
            </div>
            <div style={{height:'500px', overflow:'auto', marginBottom:'50px'}}>
                <Fragment> 
                    <Container>
                        <Row>
                            <Col>
                            <input type='text' className='form-control' placeholder="Enter ID" value={id} onChange={(e) => setId(e.target.value)}></input>
                            </Col>
                            <Col>
                            <input type='text' className='form-control' placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Enter Rating" value={rating} onChange={(e) => handleEdit(e)}></input>
                            </Col>
                            <Col>
                            <button className="btn btn-primary">Submit</button>
                            </Col>
                        </Row>
                    </Container>
                    <br></br>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                            <th>#</th>
                                            <th>index+1</th>
                                            <th>item.url</th>
                                            <th>item.appId</th>
                                            <th>item.title</th>
                                            <th>item.summary</th>
                                            <th>item.developer</th>
                                            <th>item.developerId</th>
                                            <th>item.icon</th>
                                            <th>item.score</th>
                                            <th>item.scoreText</th>
                                            <th>item.priceText</th>
                                            <th>item.free</th>
                                            <th>item.description</th>
                                            <th>item.descriptionHTML</th>
                                            <th>item.installs</th>
                                            <th>item.minInstalls</th>
                                            <th>item.maxInstalls</th>
                                            <th>item.ratings</th>
                                            <th>item.reviewsCount</th>
                                            <th>item.histogram</th>
                                            <th>item.price</th>
                                            <th>item.currency</th>
                                            <th>item.available</th>
                                            <th>item.offersIAP</th>
                                            <th>item.iAPRange</th>
                                            <th>item.size</th>
                                            <th>item.androidVersion</th>
                                            <th>item.androidVersionText</th>
                                            <th>item.developerInternalID</th>
                                            <th>item.developerEmail</th>
                                            <th>item.developerWebsite</th>
                                            <th>item.developerAddress</th>
                                            <th>item.genre</th>
                                            <th>item.genreId</th>
                                            <th>item.familyGenre</th>
                                            <th>item.familyGenreId</th>
                                            <th>item.headerImage</th>
                                            <th>item.screenshots</th>
                                            <th>item.videoImage</th>
                                            <th>item.contentRating</th>
                                            <th>item.contentRatingDescription</th>
                                            <th>item.adSupported</th>
                                            <th>item.released</th>
                                            <th>item.updated</th>
                                            <th>item.version</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody style={{overflow:'auto'}}>
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
                                                <button className="btn btn-primary" onClick={() => handleEdit(item.appId)}>Edit</button> &nbsp;
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
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Update Movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row>
                                <Col>
                                <input type='text' className='form-control' placeholder="Enter ID" value={editID} onChange={(e) => setId(e.target.value)}></input>
                                </Col>
                                <Col>
                                <input type='text' className='form-control' placeholder="Enter Title" value={editTitle} onChange={(e) => setTitle(e.target.value)}></input>
                                </Col><Col>
                                <input type='text' className='form-control' placeholder="Enter Rating" value={editRating} onChange={(e) => setRating(e.target.value)}></input>
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
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