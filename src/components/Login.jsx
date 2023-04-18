import React, { useState } from 'react';
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { SHA256 } from 'crypto-js';
import CryptoJS from 'crypto-js';


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
  }
};



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const poolData = {
    UserPoolId: 'us-west-2_YAGfQbS3O',
    ClientId: '6engdt815h1efv4ktb1fp8e9to'
  };

  const userPool = new CognitoUserPool(poolData);
  

  

  const handleLogin = (e) => {
    e.preventDefault();

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

        // do something upon successful authentication, e.g. redirect to a protected page
      },
      onFailure: (err) => {
        console.log('Authentication error:', err);
        // handle authentication error, e.g. display an error message to the user
      },

    });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" style={{backgroundColor:'grey'}} value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" style={{backgroundColor:'grey'}} value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

    </div>
  );
};

export default Login;