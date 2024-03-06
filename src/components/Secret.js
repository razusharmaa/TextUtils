import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Secret(props) {
    const [show, setShow] = useState(false);
    const [text, setTextc] = useState("");

    const handleClose = () =>{
      if(text!==process.env.REACT_APP_CODE){
        setTextc('');
      }
      setShow(false);
    } 
    const handleShow = () => setShow(true);

    const handelonchange = (event) => {
        console.log("handelonchange function was clicked");
        setTextc(event.target.value);
    }

    const handleSaveChanges = () => {
        props.runMain(text.toLowerCase());
        handleClose();
    };

    return (
        <>
            <Button variant="warning border-primary" style={{marginBottom:"10px"}} onClick={handleShow}>
                Secret Button
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className='text-bg-dark ' closeButton>
                    <Modal.Title>Guess my favorite food!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='text-bg-secondary '>
                    <div className={`input-group `}>
                        <input value={text} type="password" aria-label="First name" onChange={handelonchange} className="form-control" />
                    </div>
                </Modal.Body>
                <Modal.Footer className='text-bg-dark '>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="info" onClick={handleSaveChanges}>
                        Check
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Secret;
