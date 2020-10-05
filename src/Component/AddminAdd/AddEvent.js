import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logos/Group 1329.png';
import add from '../../img/logos/plus 1.png'
import user from '../../img/logos/users-alt 1.png'
import { Link } from 'react-router-dom';

const Admin = () => {
    
    return (
        <div className="container, adminArea">
            <div className='leftArea'>
                <img src={logo} alt=""/>

                <br/>
                <br/>

                <Link to="/admin">
                <div className='addList'>
                    <img src={user} alt=""/>
                    <small>Volunteer Register List</small>
                </div>
                </Link>
                
                <div className='addList'>
                    <img src={add} alt=""/>
                    <small>Add Event</small>
                </div>
                
            </div>
            
            <div className='rightArea'>
            <h2>hello man</h2>
                <div className='listArea'>
                    <form action="/addItem" method='post'>
                        <div>
                            <input type="text" name='name' placeholder='name' />
                            <input type="text" name='text' placeholder='text' />
                        </div>
                        <div>
                            <input type="text" name='description' placeholder='description' />
                            <input type="file" name='img' placeholder='img' />
                        </div>
                        <button type='submit'>Submit you</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Admin;