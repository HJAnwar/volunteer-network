import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo2 from '../../img/logos/Group 1329.png';
import './Register.css';



const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

        const handleSubmit = () => {

            const newEvent = { ...loggedInUser }
            fetch('http://localhost:5000/registered', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEvent)

            })
                .then(res => res.json())
                .then(data => {
                console.log(data);

              })

        }
        return (
        <div className='register'>
            <img src={logo2} alt=""/>
            <br/>
            <br/>
            <form onSubmit={handleSubmit} className="registerForm">
                <h3>Register Form</h3>
                <input  className="input" name='name'  type="text" value={loggedInUser.name} placeholder="name" />
                <input  className="input" name='email'  type="text" value={loggedInUser.email} placeholder="name" />
                <input  className="input" name='date'  type="date" placeholder="date" />
                <input  className="input" name='title'  type="text" placeholder="title" />
                <input  className="input" name='description'  type="text" placeholder="description" />
                <br/>
                <br/>
                
                    <button onClick={() => handleSubmit} className="submitBtn" type="submit" >Registration</button>
                
            </form>
        </div>
    );
};

export default Register;