import React from 'react';
import './AddEvent.css'
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
                <h2>Add Event</h2>
                <div className='listArea'>
                    <form className="addEvent">
                        <div className="fromArea">
                            <div className="titleArea">
                                <label htmlFor=""><h6>Title</h6></label>
                                <input id="title" />
                            </div>
                            <div className="descriptionArea">
                                <label htmlFor=""><h6>Description</h6></label>
                                <input id="description" />
                            </div>
                        </div>
                        <div className="fromArea1" >
                            <div className="dateArea">
                                <label htmlFor=""><h6>Date</h6></label>
                                <input name='date'  type="date" id="date" />
                            </div>
                            <div className="imgArea">
                                <label htmlFor=""><h6>Img</h6></label>
                                <input name='file'  type="file" id="img" />
                            </div>
                        </div>
                    </form>
                    <br/>
                        <button className="submitButton" type='submit'>Submit</button>
                    
                </div>

            </div>
        </div>
    );
};

export default Admin;