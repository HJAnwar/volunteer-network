import React, { useEffect, useState } from 'react';
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logos/Group 1329.png';
import add from '../../img/logos/plus 1.png'
import user from '../../img/logos/users-alt 1.png'
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

// https://polar-shelf-35346.herokuapp.com/lodeUser

const Admin = () => {

    const [lodeUser, setLodeUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/lodeUser')
        .then(res => res.json())
        .then(data => setLodeUser(data))
    }, [])

    const deleteUser=(id) =>{
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
               
                    console.log(result);
                
            })
    }
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
                <h2>Volunteer Register List</h2>
                <div className='listArea'>
                <Container>
                    {
                        lodeUser.map(user => 
                        <Container style={{ backgroundColor: 'lightgray', marginTop: '50px', margin: '10px', borderRadius: '5px',  padding: '20px' , paddingLeft: '60px'}} >
                            <h5>{user.name}</h5>      
                            <h5>{user.email}</h5>
                            <h5>{user.title}</h5>
                            <h5>{user.description}</h5>
                            <h5>{user.date}</h5>
            
                            <Button onClick={() =>deleteUser(`${user._id}`)}>Remove</Button>
                        </Container>)
                    }
                    </Container>
               
                </div>

            </div>
        </div>
    );
};

export default Admin;