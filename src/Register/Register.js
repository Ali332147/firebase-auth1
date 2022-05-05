
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import app from "../firebase.init";

let auth=getAuth(app);
const Register = () => {
  let [email,setEmail]=useState('');
  let [password,setPass]=useState('');
  const [validated, setValidated] = useState(false);
  let emailHandle=e=>{
    setEmail(e.target.value);
  }
  let passHandle=e=>{
    setPass(e.target.value);
  }
  let formHandle=(e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setValidated(true);

    createUserWithEmailAndPassword(auth,email,password)
    .then(res=>{
      let user=res.user;
      console.log(user);
    })
    .catch(error=>{
      console.error(error);
    })

  e.preventDefault();
 
  }
  return (
    <div className='w-50 mx-auto'>
   <h2>Please Register </h2>
   <div className='text-start' >
   <Form noValidate validated={validated}  onSubmit={formHandle}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onChange={emailHandle} required type="email" placeholder="Enter email" />
    <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={passHandle} type="password" required placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
   </div>
    </div>
  );
};

export default Register;