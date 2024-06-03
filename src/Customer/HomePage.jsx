import React from 'react';
import './homepage.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import gold1 from './gol loan.jpg'
import gold2 from './gold loan.jpg'
import Footer from '../Footer/Footer';
import Navbar from './Navbar';


function HomePage() {

  const winuser = window.sessionStorage;
  const name = sessionStorage.getItem("userName");
  const winId = sessionStorage.getItem("userId");


  return (
    <div>
      <Navbar />
    <div className="container-fluid p-0">
      <header className="jumbotron bg-dark text-white">
        <h1 className="display-4">Gold Loan Management System</h1>
        <p className="lead">Welcome to our platform for managing gold loans efficiently.</p>
      </header>

      {/* Carousel */}
      <section className="mb-5">
      <Carousel interval={1000}> 
          <Carousel.Item>
            <img
              className="d-block w-80"
              src={gold1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-80"
              src="https://images.moneycontrol.com/static-mcnews/2019/04/gold-1.jpg?impolicy=website&width=1600&height=900"
              alt="Second slide"
            />
          </Carousel.Item>
          {/* Add more Carousel.Items for additional images */}
        </Carousel>
      </section>

      {/* Images in Cards */}
      <section>
        <h2 className="text-center mb-4">Featured Images</h2>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/07/13/67/29/240_F_713672962_QTu3OieX7kmZE9YLTKHkhMlmSPNdRhz6.jpg" />
          </Card>
          <Card>
            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/05/99/90/20/240_F_599902032_vZNaU9MpoRyAM5RYkzUpZ2SygEjvtQG3.jpg" />
          </Card>
          <Card>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/07/26/76/03/240_F_726760382_wby9Plqi9VVjy1VbQUlIiTfHmHH6XPY0.jpg" />
          </Card>
          <Card>
            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/07/53/67/65/240_F_753676559_oe95L4SCzQ4XA7dhrVe68GFtjMQSkyVe.jpg" />
          </Card>
        </CardGroup>
      </section>
      
    </div>
    <div>
      <Footer />
    </div>
    </div>
    
  );
}

export default HomePage;
