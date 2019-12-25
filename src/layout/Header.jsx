
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ logedIn, setUser }) => {
    if (logedIn) {
        return (
            <nav className='naslov'>
                <header>
                    
                    <h1 id='ns1'>DOBRODOSLI!</h1>
                    <Link to='/login'><button onClick={() => { setUser({}) }} >Logout</button></Link>
                </header>
            </nav>
        )
    }

    return (
        <nav>
        <header className='naslov'>
            
            <h1 id='ns'>Please login or register</h1>
            <Link to='/login'><button className='regbutt'>Login</button></Link>
            <Link to='/register'> <button>Register</button></Link>
        </header>
        </nav>
    )
}

export default Header;


