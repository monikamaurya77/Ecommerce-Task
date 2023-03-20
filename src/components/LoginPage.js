import React from 'react';
import Login from './Login';
import img from '../assets/coldweather.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginPage = () => {
    return(
    
        
  <Container>
       <Row>
        <Col>
        <div className="login-page">
        <h1 className="fw-bold ">Welcome back to Pretty Login</h1>
     <p>It's great to have you back!</p>
     <Login />
     </div>
        </Col>
        <Col>
        <img className="img" src={img} alt="image"  />
        </Col>
      </Row>
      
    </Container>

  
      
      
    );
}

export default LoginPage;