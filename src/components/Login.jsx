import React from 'react';
import { useState } from 'react';
import { login } from '../util/services';
import {Link} from 'react-router-dom'

const Login = ({setUser,history}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(){
        login({username, password}).then(data=>{
            console.log(data);
            if(data.success===true){
                setUser(data);
                history.push('/list');
            } else{
                console.log('Nije ulogovan');   
            }
        })
    }

    return (
        <div className="container">
        <form id='contact'>
            <input type="email" placeholder="Username" required onInput={e => {
                setUsername(e.target.value)
            }}/>
            <input type="password" placeholder="Sifra" required onInput={e => {
                setPassword(e.target.value)
            } }/>
            <input type="submit" value="Uloguj se" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </form>
        <Link to = '/'><button>Back to main page</button></Link>

        </div>
    )
}

export default Login