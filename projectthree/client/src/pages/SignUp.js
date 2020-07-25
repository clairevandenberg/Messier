import React, { useState } from "react";
import { Container, Row, Col } from "../components/Grid";
// import Form from "../components/Form";

function SignUp (){

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username is " + username);
    console.log("password is " + password);
  };


  return (
    <div>
 <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
         
          <Row className="form-group">
            <Col size="12">
                  <input 
                  className="form-control"
                  type="firstName" 
                  name="firstName" 
                  id="examplefirstName" 
                  placeholder="First Name" 
                  />
                </Col>
                </Row>

               <Row className="form-group">
            <Col size="12">
                  <input 
                  className="form-control"
                  type="lastName" 
                  name="lastName" 
                  id="examplelastName" 
                  placeholder="Last Name" 
                  />
                </Col>
                </Row>

                <Row className="form-group">
            <Col size="12">
                  <input 
                  type="dob"
                  name="dob" 
                  id="exampledob" 
                  placeholder="Date of Birth"  
                  />
                  </Col>
                  </Row>


                  <Row className="form-group">
            <Col size="12">
                  <input 
                  type="email"
                  name="email" 
                  id="exampleemail" 
                  placeholder="Email" 
                  onChange={e => setUsername(e.target.value)} 
                  />
                  </Col>
                  </Row>

               
                  <Row className="form-group">
            <Col size="12">
                  <input 
                  type="password" 
                  name="password" 
                  id="examplePassword" 
                  placeholder="Password"  
                  onChange={e => setPassword(e.target.value)}
                  />
                  </Col>
                  </Row>

          <button className="btn btn-success" type="submit">
            Submit
          </button>

          
      </Container>
    </form>
  </div>
      
      );
    }
export default SignUp;



