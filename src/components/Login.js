import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import GoogleButton from 'react-google-button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  // const initialValue = { email: "", password: "" };

  // const [formValues, setFormValues] = useState(initialValue);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {login} = useUserAuth();
  const [error, setError] = useState("");
const navigate = useNavigate();
const {logIn, googleSignIn} = useUserAuth();

const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
        await login(email, password);
        navigate("/Home");
    }catch(err){
        setError(err.message);
    }
}

const handleGoogleSignIn = async (e) => {
  e.preventDefault();
  try{
    await googleSignIn();
    navigate ("/home");
  }catch(err){
    setError(err.message);
  }
}

  // const handleChange = (e) => {
  //   //console.log(e.target);
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   //console.log(formValues);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault(); //after submitting page will not get refersh
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email!";
  //   }

  //   if (!values.password) {
  //     errors.password = "Password is required!";
  //   } else if (!values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters!";
  //   }
  //   return errors;
  // };

  // useEffect(() => {
  //   //console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     //console.log(formValues);
  //   }
  // }, [formErrors]);

  return (
    <div>
      
      {/* <div>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div>Signed in sucessfully!</div>
        ) : (
          <></>
        )}
      </div> */}
      <div>
        {error}
      </div>

      <form onSubmit={handleSubmit}>
    
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      </Form> 
          {/* <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email" */}
            {/* // value={formValues.email}
            // onChange={handleChange}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
        {/* </div> */}
        {/* <p>{formErrors.email}</p> */}

        {/* <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password" */}
            {/* // value={formValues.password} */}
            {/* // onChange={handleChange}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        {/* <p>{formErrors.password}</p> */}

       
        <Container>
      <Row >
        <Col><Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me?" />
      </Form.Group></Col>
        <Col><p>Forget password?</p></Col>
      </Row>
      </Container>
        

      
      <div>
      <button className="mt-3">Login</button>

      <button className="acc mt-3" ><Link className="create-acc" to="/createaccount">Create Account </Link></button>
      </div>
     
      <p className="mt-2">or login with </p>
      <GoogleButton onClick={handleGoogleSignIn}/>
      </form>
    </div>
  );
};

export default Login;
