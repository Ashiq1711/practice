import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDatabase, push, ref, set } from "firebase/database";
import { MdErrorOutline } from "react-icons/md";
function App() {
  let [mail,setMail]=useState('')
  let [password,setPassword]=useState('')
  let [mailerr, setMailerr]=useState('')
  let [passworderr,setPassworderr]=useState('')

 let handlemail=(e)=>{
  setMail(e.target.value);
  }
 let handlepassword=(e)=>{
  setPassword(e.target.value);
  }
  let submit=(e)=>{
    e.preventDefault();
    const db = getDatabase();
    set(push(ref(db, 'Data/')), {
    Email:mail,
    Password:password
  });


    if(mail==""){
      setMailerr(' Email must be required !')
    }
    if(password==""){
      setPassworderr('Password must be required !')
    }
  }
  console.log(mailerr,passworderr);
  return (
    <div className='container'>
      <Form className='customise'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        {mailerr && 
    <p className='coloralert'>{<MdErrorOutline />}{mailerr}</p>
        }
        <Form.Control onChange={handlemail} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        {passworderr && 
        <p className='coloralert'>{<MdErrorOutline />} {passworderr}</p>
        }
        <Form.Control onChange={handlepassword} type="password" placeholder="Password" />
      </Form.Group>
   
      <Button onClick={submit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default App