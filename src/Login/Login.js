import React, { useState } from 'react';
import app from '../firebase.init'
import { FacebookAuthProvider, getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const auth = getAuth(app);

const Login = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error', error)
      })
  }

  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user)
    })
    .catch(error => {
      console.error(error);
    })
  }

  const handleFacebookSignIn = () =>{
    signInWithPopup(auth, facebookProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error =>{
      console.error(error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      });
  }

  return (
    <div className="App">
      {/* { condition ? true : false} */}
      {
        user.uid ? <button onClick={handleSignOut}>Sign out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleFacebookSignIn}>Facebook Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
          </>

      }
      <h2>Name: {user.displayName}</h2>
      <p>I know your email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}
export default Login;