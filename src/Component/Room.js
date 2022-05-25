import React, { useState } from 'react'
import Homescreen from '../screens/Homescreen'
import { Modal, Button, Carousel } from 'react-bootstrap'

function Room({ room }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='row shadow'>
            <div className='col-md-4'>
                <img src={room.imageurls[0]} className='smalling' />
            </div>
            <div className='col-md-7'>
                <h1>{room.name}</h1>
                <b>
                    <p>Maxcount is: {room.maxcount} </p>
                    <p>phone number: {room.phonenumber} </p>
                    <p>Type: {room.type} </p>
                </b>
                <div style={{ float: 'right' }}>
                    <button className='btn btn-primary' onClick={handleShow}>View Details</button>
                </div>


            </div>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {room.imageurls.map(url=>{
                            return <Carousel.Item>
                            <img
                              className="d-block w-100 bigimg"
                              src={url}
                              
                            />
                            
                          </Carousel.Item>
                        })}

                    </Carousel>
                    {room.description}

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Room