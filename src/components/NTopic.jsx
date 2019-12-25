import React from 'react';
import { addNewTopic, addTopMessage } from '../util/services';
import { useState } from 'react';

const Newtopic = ({ setUser, history, user }) => {

    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


    function addTopic() {
        let userid = user.user.user_id;
        let username = user.user.username;
        addNewTopic(userid, title).then(data => {
            console.log(data);
            console.log(title);
            if (data.success === true) {
                addTopMessage(username, message, data.topic.topic_id).then(data => {
                    history.push('/list');
                    console.log(data);
                })
            } else {
                console.log('Nije dodata poruka');
            }
        })
    }

    return (
        <fieldset>
            <form className='contact'>
                <input type='text' placeholder='Title' onInput={e => {
                    setTitle(e.target.value);
                }} /> <br />
                <textarea rows="4" cols="50" form="usrform" placeholder='Enter text here' onInput={e => {
                    setMessage(e.target.value);
                }} /> <br />
                <input type='submit' value='Add' onClick={e => { e.preventDefault(); addTopic() }} />
            </form>
        </fieldset>
    )
}

export default Newtopic;