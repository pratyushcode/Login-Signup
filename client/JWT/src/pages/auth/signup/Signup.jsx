import React, { useState } from 'react'
import {Form,Button} from "react-bootstrap"


const Signup = () => {
  const navigate=useNavigate();
  const [formData,setformData]=useState(
    {
      email:'',
      name:'',
      password:''
    }
  )

  const handleInputChange=(event)=>
    {
      const name=event.target.name;
      const value=event.target.value;
      setformData(
        {
          ...formData,
          [name]:value
        }
      )
    }

    const handleSubmit=async(e)=>
      {
        e.preventDefault();
        // console.log("email",formData.email)
        // console.log("name",formData.name)
        // console.log("password",formData.password)
        try {
           const resp= await fetch("http://localhost:5000/api/user/signup",
            {
              method:"POST",
              headers:{
                "Content-Type":"application/JSON"                
              },
              body:JSON.stringify(formData)
            }
          )
          const res=await resp.json();
          console.log(res);
          navigate("/login");
                    
        } catch (error) {
          console.log(error);
        }
        finally{
          setformData({
            email:"",
            name:"",
            password:""
          })
        }
      }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
            type="email"
            name="email"
            placeholder='Enter email'
            value={formData.email}
            onChange={handleInputChange}
        >       
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='formBasicEName'>
        <Form.Label>Name</Form.Label>
        <Form.Control
            type="text"
            name="name"
            placeholder='Enter Name'
            value={formData.name}
            onChange={handleInputChange}
        >       
        </Form.Control>
      </Form.Group>
      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
            type="password"
            name="password"
            placeholder='Enter password'
            value={formData.password}
            onChange={handleInputChange}
        >       
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100">SignUp</Button>
      </Form>
      
    </div>
  )
}

export default Signup