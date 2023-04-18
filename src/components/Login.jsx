import React, { useState } from 'react';
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { SHA256 } from 'crypto-js';
import CryptoJS from 'crypto-js';
import {DashboardLayout} from  "./Layout"
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";



const userPool = new CognitoUserPool({
  UserPoolId: 'us-west-2_YAGfQbS3O',
  ClientId: '6engdt815h1efv4ktb1fp8e9to'
});

export const isAuthenticated = () => {
  const currentUser = userPool.getCurrentUser();
  return currentUser !== null;
};


export const signOut = () => {
  const poolData = {
    UserPoolId: "us-west-2_YAGfQbS3O",
    ClientId: "6engdt815h1efv4ktb1fp8e9to",
  };
  
  const userPool = new CognitoUserPool(poolData);
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
    window.location.href = "../home";
  }
};



const Login = () => {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const poolData = {
    UserPoolId: 'us-west-2_YAGfQbS3O',
    ClientId: '6engdt815h1efv4ktb1fp8e9to'
  };

  const userPool = new CognitoUserPool(poolData);
  

  

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess(false);
    const userData = {
      Username: email,
      Pool: userPool
    };
    const authenticationData = {
      Username: email,
      Password: (password), // hash the password using SHA256 algorithm
      
    };
    //console.log(password);
    //console.log(SHA256(password).toString());
    const authDetails = new AuthenticationDetails(authenticationData);

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log('Authentication successful:', result);
        window.location.href = "../home";
        setSuccess(false);

        // do something upon successful authentication, e.g. redirect to a protected page
      },
      onFailure: (err) => {
        console.log('Authentication error:', err);
        setSuccess(true);
        // handle authentication error, e.g. display an error message to the user
      },

    });
  };

  const desktopScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const mobileScreen = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div>
      <link rel="stylesheet" href="https://use.typekit.net/yba0jeu.css"/>

      <DashboardLayout/>
      {desktopScreen && <div style = {{width:'100%', height:'80%', paddingTop:'200px'}}>
        <div style={{backgroundColor:'white', width:'500px', justifyContent:'center', alignContent:'center', height:'500px', margin:'auto', borderRadius:"5px", borderStyle:'solid', borderWidth:'1px'}}>
          <div style={{fontSize:'60px', color:'black', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', textAlign:'center'}}>CPP Fori</div>
          <form onSubmit={handleLogin}>
            <label>
              <input placeholder="Email or Username"type="email" style={{marginTop:'50px', backgroundColor:'#ebebeb', width:'90%', borderRadius:'5px', height:'40px', paddingLeft:'20px'}} value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              <input placeholder="Password" type="password" style={{marginTop:'20px', backgroundColor:'#ebebeb', width:'90%', borderRadius:'5px', height:'40px', paddingLeft:'20px'}} value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <div style={{paddingTop:'30px', paddingLeft:'40px'}}>
              <button style={{backgroundColor:'#ebebeb', width:'90%', height:'60px'}}type="submit">Login</button>
            </div>

            {!success? 
          <div>
            
          </div>  
          :
          <div style={{fontSize:'10px', color:'red', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', textAlign:'center'}}>
            Incorrect Email or Username
          </div>
          }
          
            <div>
              <NavLink style={{textDecoration:'none'}} to={'/signup'}>
                <div style={{ fontSize:'20px', color:'blue', fontFamily:'sans-serif', paddingTop:'30px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', textAlign:'center'}}>
                  Sign up
                </div>
              </NavLink>
            </div>
            
          </form>
        </div>
      </div>}

      {mobileScreen && <div style = {{display: 'flex', width:'100%', height:'80%', paddingTop:'15vh', justifyContent:'center', alignContent:'center'}}>
        <div style={{backgroundColor:'white', width:'500px', justifyContent:'center', alignContent:'center', height:'500px', margin:'auto', borderRadius:"5px", borderStyle:'solid', borderWidth:'1px', transform:'scale(0.75)'}}>
          <div style={{fontSize:'60px', color:'black', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', textAlign:'center'}}>CPP Fori</div>
          <form onSubmit={handleLogin}>
            <label>
              <input placeholder="Email or Username"type="email" style={{marginTop:'50px', backgroundColor:'#ebebeb', width:'90%', borderRadius:'5px', height:'40px', paddingLeft:'20px'}} value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
              <input placeholder="Password" type="password" style={{marginTop:'20px', backgroundColor:'#ebebeb', width:'90%', borderRadius:'5px', height:'40px', paddingLeft:'20px'}} value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <div style={{paddingTop:'30px', paddingLeft:'40px'}}>
              <button style={{backgroundColor:'#ebebeb', width:'90%', height:'60px'}}type="submit">Login</button>
            </div>

            {!success? 
          <div>
            
          </div>  
          :
          <div style={{fontSize:'10px', color:'red', fontFamily:'sans-serif', paddingTop:'15px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', textAlign:'center'}}>
            Incorrect Email or Username
          </div>
          }
          
            <div>
              <NavLink style={{textDecoration:'none'}} to={'/signup'}>
                <div style={{ fontSize:'20px', color:'blue', fontFamily:'sans-serif', paddingTop:'30px', justifyContent:'center', fontWeight:'100', fontStyle:'normal', textAlign:'center'}}>
                  Sign up
                </div>
              </NavLink>
            </div>
            
          </form>
        </div>
      </div>}
    </div>
  );
};

export default Login;