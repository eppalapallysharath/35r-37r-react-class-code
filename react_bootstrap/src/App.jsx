import React, { useState } from "react";
import { Accordion, Card, Carousel, Container, Form, Modal, ModalBody, ModalFooter, ModalHeader, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./App.css"
import Spinner from 'react-bootstrap/Spinner';

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () =>{ setShow(true)};
  return (
    <div>
      {/* <div className=" h-50 border border-secondary"> hi</div>
      <p className="fw-bold fw fst-italic h-100 border border-primary">Accordion</p> 
      <img className="w-25"  src="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww"/>
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="fw-bold">what is react</Accordion.Header>
          <Accordion.Body>
           react is libary to build ui components
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div style={{ height:"200px" }}>buttons
         <Button variant="danger" className="h-50 w-100 mb-5 p-2">click me</Button>
      <Button variant="warning">click me</Button>

      <p className="pt-5  pb-2">hello</p>
      </div> */}

      {/* <div style={{ height:"300px" }}>
        <Carousel fade>
          <Carousel.Item  interval={1000}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkU5Iq9OcxS1Lo8ZFkb9F9PfVoN9pz7SqZw&s" className="w-100 h-75" />
          </Carousel.Item>
          <Carousel.Item  interval={500}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuDB7us5dsk_7Gm3NDQc4lKvD53MrmE8eqVQ&s" className="w-100 h-75"   />
          </Carousel.Item>
        </Carousel>
      </div> */}

      {/* <div>
        <Card style={{ height:400, width:300 }} className="border border-info">
          <Card.Header>
            <Card.Title>Samsung</Card.Title>
          </Card.Header>
          <Card.Img src="data:image/jpeg;base64,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"/>
          <Card.Body>
            <Card.Title>Samsung s24 ultra</Card.Title>
            <Card.Subtitle>super fast mobile</Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <Button onClick={handleShow}>buy me</Button>
          </Card.Footer>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          hi
        </ModalHeader>
        <ModalBody>
          are you want to buy it?
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" >confirm</Button>
          <Button variant="danger" onClick={handleClose}>cancel</Button>
        </ModalFooter>
      </Modal> */}

      {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary"  >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    {/* <Spinner animation="grow" />; */}
     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
    </Form>
    </div>
  );
};

export default App;
