import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import Form from 'react-bootstrap/Form';

const CreateAccount = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {createaccount} = useUserAuth();
const [error, setError] = useState("");
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
        await createaccount(email, password);
        navigate("/");
    }catch(err){
        setError(err.message);
    }
}

    return(
        <div>
            {error}
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
        {/* <div>
        <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
        <div>
        <input type="password" placeholder="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
        </div> */}
       
        <button>Create account</button>
      </form>

      <div className="mt-3 mb-3">
        Already, Have an account?
      </div>
        <button className="acc1">
        <Link className="create-acc" to="/">Login</Link>
        </button>
          
            
        </div>
    );
}

export default CreateAccount;