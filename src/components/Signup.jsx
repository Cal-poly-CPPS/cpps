import React, { useState } from "react";
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";

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
          formState.username,
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
      Username: formState.username,
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
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formState.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formState.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign up</button>
      </form>
      <br />
      <form onSubmit={handleConfirmationSubmit}>
        <label>
          Verification Code:
          <input
            type="text"
            name="confirmationCode"
            value={formState.confirmationCode}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default Signup;