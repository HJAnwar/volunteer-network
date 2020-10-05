import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logos/Group 1329.png';
import './Home.css';
import img1 from '../../img/images/babySit.png';
import img2 from '../../img/images/birdHouse.png';
import img3 from '../../img/images/childSupport.png';
import img4 from '../../img/images/cleanWater.png';
import img5 from '../../img/images/clearnPark.png';
import img6 from '../../img/images/clothSwap.png';
import img7 from '../../img/images/driveSafety.png';
import img8 from '../../img/images/extraVolunteer.png';
import img9 from '../../img/images/foodCharity.png';
import img10 from '../../img/images/goodEducation.png';
import img11 from '../../img/images/ITHelp.png';
import img12 from '../../img/images/libraryBooks.png';
import img13 from '../../img/images/musicLessons.png';
import img14 from '../../img/images/newBooks.png';
import img15 from '../../img/images/refuseShelter.png';
import img16 from '../../img/images/riverClean.png';
import img17 from '../../img/images/schoolSuffiles.png';
import img18 from '../../img/images/studyGroup.png';
import img19 from '../../img/images/stuffedAnimals.png';
import img20 from '../../img/images/voteRegister.png';

import {  Card, CardGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    
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
                        <Link className='link' to='/register'>Register</Link>
                        <Link className='link' to='/admin'>Admin</Link>
                    </div>
                </nav>
                
                <br/>   
                   <Form className='from'>
                        <input type="text" placeholder="Search" className="search" />
                        <button className='button'>Search</button>
                   </Form>
                   
            </div>
            <br/>
            <br/>
            <div>
                <Link to='/Register'>
                <CardGroup >
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img4}/>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                <Card>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img6} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img7} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img8}/>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                <Card>
                        <Card.Img variant="top" src={img9} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img10} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img11} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img12}/>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                <Card>
                        <Card.Img variant="top" src={img13} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img14} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img15} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img16}/>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br/>
                <CardGroup>
                <Card>
                        <Card.Img variant="top" src={img17} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img18} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img19} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img20}/>
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
                </Link>
            </div>
        </div>
    );
};

export default Home;