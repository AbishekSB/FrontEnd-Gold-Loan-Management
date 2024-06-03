import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
           <p><i className="fab fa-facebook-f"></i> Johnny@gmail.com</p>
            <p><i class="fas fa-phone"></i> +916383889973</p>
            <p><i class="fas fa-map-location"></i> No 23, Vivekandhan street, Dubai kuruku Sandhu</p> 
          </Col>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec mauris id tellus suscipit egestas. Mauris id turpis ut nisl blandit feugiat.</p>
          </Col>
          <Col md={4}>
          
            <h5>Follow Us</h5>
            <p>
              <i className="fab fa-facebook-f mr-3" size="2x" /></p>
              
            <p>  <i class="fab fa-twitter mr-3"  size="2x"></i> </p>
              
          <p>    <i class="fab fa-instagram mr-3" size="2x"></i> </p>
            
          </Col>
          <p>&copy; 2024 Your Company Name</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
