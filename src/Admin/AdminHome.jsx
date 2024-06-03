import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './adminhome.css';
import { Link } from 'react-router-dom';
import Content from './Content';
// import avatarLogo from './avatar.png';

function AdminHome() {
  const winuser = window.sessionStorage;
  const name = sessionStorage.getItem("userName");
  const winId = sessionStorage.getItem("userId");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="admin">
      <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
        <Container fluid>
          <Button variant="dark" onClick={handleShow} className="me-2">
            &#9776; Open Navbar
          </Button>
          <Navbar.Brand href="#">{name}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/content ">Home</Nav.Link>
              <Nav.Link href="/interest">Calculate</Nav.Link>
            </Nav>
            <Nav>
              <img src='https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Free-File-Download.png' alt="Avatar" className="avatar-img me-2" />
              <Button variant="outline-light" href="/login" size="sm" className="me-2">Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start" className="sidenav">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <Link to="/scheme">Banks</Link>
            <Link to="/editandDetail">Clients</Link>
            <a href="/loanApplicant">Loan Application</a>
            <a href="/mail">Send Mail</a>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
     
    </div>
    
  );
}

export default AdminHome;
