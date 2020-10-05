import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../img/logos/Group 1329.png';

const Events = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='container'>
            <div className= 'header'>
                <nav>
                      <img src={logo} alt=""/>
                    <div className='navigation'>
                        <Link className='link' to='/home'>Home</Link>
                        <Link className='link' to='/donetion'>Donetion</Link>
                        <Link className='link' to='/events'>Events</Link>
                        <Link className='link' to='/login'>Blog</Link>
                        <Link className='link' to='/'>{loggedInUser.name}</Link>
                    </div>
                </nav>
            </div>
            <br/>
            <br/>
        </div>
    );
};

export default Events;