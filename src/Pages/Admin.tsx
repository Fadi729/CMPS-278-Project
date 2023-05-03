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
                    <tbody>
                        {
                            movies  && movies.length>0 ?
                            movies.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <th>{item.date}</th>
                                        <th>{item.image}</th>
                                        <th>{item.rating}</th>
                                        <th>{item.genres}</th>
                                        <th>{item.trailer}</th>
                                        <th>{item.cast}</th>
                                        <th>{item.credits}</th>
                                        <th>{item.company}</th>
                                        <th>{item.description}</th>
                                        <th>{item.price}</th>
                                        <th>{item.sales}</th>
                                        <th>Reviews</th>
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
    );
};

export default Admin;