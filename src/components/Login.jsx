import React, { useState } from 'react';
import { CognitoUser, AuthenticationDetails, CognitoUserPool  } from 'amazon-cognito-identity-js';
/*
In this example, we import the CognitoUser and AuthenticationDetails classes from the AWS SDK for JavaScript, and define a Login component that displays a login form with two input fields for the username and password. When the user submits the form, we create a new CognitoUser object using the entered username and the User Pool data, and authenticate the user using the entered password and the CognitoUser.authenticateUser() method. The onSuccess callback function logs the access token, ID token, and refresh token to the console, and the onFailure callback function logs any errors to the console.

Note that you'll need to replace 'YOUR_USER_POOL_ID' and 'YOUR_APP_CLIENT_ID' with the actual User Pool ID and App Client ID that you obtained from the AWS Management Console.

Add the Login component to your React app's main component or route. You can also add a "Forgot password" link to your login form using the `Cognito


*/
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(event) {
    event.preventDefault();

    const authenticationData = {
      Username: username,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const poolData = {
      UserPoolId: 'YOUR_USER_POOL_ID',
      ClientId: 'YOUR_APP_CLIENT_ID',
    };
    const userPool = new CognitoUserPool(poolData);

    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function(result) {
        console.log('Login successful!');
        console.log('Access token: ' + result.getAccessToken().getJwtToken());
        console.log('ID token: ' + result.getIdToken().getJwtToken());
        console.log('Refresh token: ' + result.getRefreshToken().getToken());
      },
      onFailure: function(error) {
        console.log('Login failed!');
        console.log(error);
      },
    });
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;