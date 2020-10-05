import React, { useContext } from 'react';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './FirebaseConfig';
import './Login.css';
import google from '../../img/logos/google.png';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location= useLocation();
    const { from } = location.state || { from: {pathname:"/register" }}
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const signWithGoogle = () => {

        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig)
        }
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser);
                history.replace(from);
                

            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    

   
    
    return (
        <div>
            <div className='loginArea'>
                <div className='googleArea'>
                    <img src={google} alt=""/>
                    <input className="signIn" onClick={signWithGoogle} type="button" value="Continue with Google" />
                </div>
            </div>
        </div>
    );
};

export default Login;