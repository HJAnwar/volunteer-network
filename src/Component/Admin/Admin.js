import React, { useEffect, useState } from 'react';
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logos/Group 1329.png';
import add from '../../img/logos/plus 1.png'
import user from '../../img/logos/users-alt 1.png'
import { Link } from 'react-router-dom';

const Admin = () => {
    const [lodeUser, setLodeUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/lodeUser')
        .then(res => res.json())
        .then(data => setLodeUser(data))
    }, [])
    return (
        <div className="container, adminArea">
            <div className='leftArea'>
                <img src={logo} alt=""/>

                <br/>
                <br/>
                
                <div className='addList'>
                    <img src={user} alt=""/>
                    <small>Volunteer Register List</small>
                </div>
                
                <Link to="/addevent">
                <div className='addList'>
                    <img src={add} alt=""/>
                    <small>Add Event</small>
                </div>
                </Link>
            </div>
            
            <div className='rightArea'>
                <h3>Volunteer List</h3>
                <div className='listArea'>
                    <h2>hello mama</h2>
                    <h1>you have user: {lodeUser.length}</h1>
                    {
                        lodeUser.map(user => <li>{user.name} and {user.email}</li>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Admin;