import React, { useState } from "react";
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";
import {DashboardLayout} from  "./Layout";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const userPool = new CognitoUserPool({
      UserPoolId: "us-west-2_YAGfQbS3O",
      ClientId: "6engdt815h1efv4ktb1fp8e9to",
    });

    const attributeList = [
      new CognitoUserAttribute({
        Name: "email",
        Value: formState.email,
      }),
    ];

    try {
      await new Promise((resolve, reject) => {
        userPool.signUp(
          formState.email,
          formState.password,
          attributeList,
          null,
          (err, result) => {
            if (err) {
              console.log("Error signing up: ", err);
              reject(err);
            } else {
              console.log("User signed up: ", result);
              resolve(result);
            }
          }
        );
      });

      alert("Signup successful! Please check your email for verification code.");
    } catch (error) {
      console.log("Error signing up: ", error);
      alert("Error signing up: ", error);
    }
  };

  const handleConfirmationSubmit = async (e) => {
    e.preventDefault();

    const userPool = new CognitoUserPool({
      UserPoolId: "us-west-2_YAGfQbS3O",
      ClientId: "6engdt815h1efv4ktb1fp8e9to",
    });

    const userData = {
      Username: formState.email,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    try {
      await new Promise((resolve, reject) => {
        cognitoUser.confirmRegistration(formState.confirmationCode, true, (err, result) => {
          if (err) {
            console.log("Error confirming signup: ", err);
            reject(err);
          } else {
            console.log("User confirmed: ", result);
            resolve(result);
            window.location.href = "/";
          }
        });
      });

      alert("Verification successful! You may now log in.");
      // redirect to login page
    } catch (error) {
      console.log("Error confirming signup: ", error);
      alert("Error confirming signup: ", error);
    }
  };

  return (

    <div>
      <link rel="stylesheet" href="https://use.typekit.net/yba0jeu.css"/>

      <DashboardLayout/>
      <div style = {{width:'100%', height:'80%', paddingTop:'200px'}}>
        <div style={{backgroundColor:'white', width:'500px', justifyContent:'center', alignContent:'center', height:'600px', margin:'auto', borderRadius:"5px", borderStyle:'solid', borderWidth:'1px'}}>
          <div style={{fontSize:'60px', color:'black', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', textAlign:'center'}}>CPP Fori</div>
        
        <form onSubmit={handleSubmit} > 
        
        <br />
        <label >
          <input
            type="email"
            style={{marginTop:'20px', backgroundColor:'#ebebeb', width:'90%', borderRadius:'5px', height:'40px', paddingLeft:'20px'}}
            name="email"
            value={formState.email}
            

            onChange={handleChange}
            required
            placeholder="Email"
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="password"
            style={{marginTop:'20px', backgroundColor:'#ebebeb', width:'90%', borderRadius:'5px', height:'40px', paddingLeft:'20px'}}
            value={formState.password}
            onChange={handleChange}
            required
            placeholder="Password"
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleChange}
            required
            style={{marginTop:'20px', backgroundColor:'#ebebeb', width:'90%', borderRadius:'5px', height:'40px', paddingLeft:'20px'}}
            placeholder="Confirm Password"
          />
        </label>
        <br />
        <button type="submit" style={{width:'90%', marginLeft:'3%', marginTop:'4%', height:'40px'}} >Sign up</button>
        <div>
            Do not exit without verification. It will lead to account being 
        </div>
       
      </form>
      <br />
      <form onSubmit={handleConfirmationSubmit}>
        <label>
          <input
            type="text"
            name="confirmationCode"
            value={formState.confirmationCode}
            onChange={handleChange}
            required
            placeholder="Verification Code"
            style={{marginTop:'20px', backgroundColor:'#ebebeb', width:'90%', borderRadius:'5px', height:'40px', paddingLeft:'20px'}}
          />
        </label>
        <br />
        <button type="submit" style={{width:'90%', marginLeft:'3%', marginTop:'4%', height:'40px'}}>Verify</button>

      </form>
        </div>
      </div>
    </div>

  );
};

export default Signup;