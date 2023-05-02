import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Admin = () => {
    console.log("Admin page")
    const movieData=[
        {
            id:1,
            title:'Wonder Woman',
            rating: 9.3
        }
    ]

    const [data, setData]= useState(movieData);

    useEffect(() => {
        setData(movieData)
    },[])

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
                        <th>rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data  && data.length>0 ?
                            data.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.rating}</td>
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
                            <input type='text' className='form-control' placeholder="Enter Title" value={editTitle}></input>
                            </Col><Col>
                            <input type='text' className='form-control' placeholder="Enter Rating" value={editRating}></input>
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