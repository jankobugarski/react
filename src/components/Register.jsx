import React from 'react';
import { useState, useEffect } from 'react';
import { register } from '../util/services';
import{Link} from 'react-router-dom'

const Register = ({setUser, history}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [isSamePass, setIsSamePass] = useState(false);

    useEffect(() => {
        function isValidPw() {
            if ((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)) {
                setValidPass(true);
            }
            else {
                setValidPass(false);
            }
        }
        console.log(password);
        isValidPw();
    }, [password])

    useEffect(() => {
        setIsSamePass(confirmPass === password);
        console.log(confirmPass === password);
    }, [confirmPass, password]);

    function handleSubmit(){
        if(!validPass || !isSamePass) return;
        register({name, surname, username, email, password}).then(data=>{
            if(data.success===true){
                setUser(data.user);
                history.push('/list');
            } else {
                console.log('Neuspesna registracija');
            }
        })
    }

    return (
        <div className="container">
        <form id='contact'>
            <fieldset>
                <input type="text" placeholder="Ime" required onInput={e => {
                    setName(e.target.value)
                }} />
            </fieldset>
            <fieldset>
                <input type="text" placeholder="Prezime" required onInput={e => {
                    setSurname(e.target.value)
                }} />
            </fieldset>
            <fieldset>

                <input type="text" placeholder="Korisnicko ime" required onInput={e => {
                    setUsername(e.target.value)
                }} />
            </fieldset>
            <fieldset>
                <input type="email" placeholder="Email" required onInput={e => {
                    setEmail(e.target.value)
                }} />
            </fieldset>
            <fieldset>
                <input type="password" placeholder="Sifra" required onInput={e => {
                    setPassword(e.target.value)
                }} />
            </fieldset>
            <fieldset>
                <input type="password" placeholder="Potvrdi sifru" required onInput={e => {
                    setPass(e.target.value)
                }} />
            </fieldset>

            <fieldset>
                <input type="submit" value="Registruj se" onClick={e => { e.preventDefault(); handleSubmit() }} />
            </fieldset>
        </form>
        <Link to = '/'><button>Back to main page</button></Link>


    </div>

    )
}

export default Register;