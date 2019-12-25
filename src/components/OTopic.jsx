import React, { useState, useEffect } from 'react';
import { getTopicMessages, addTopMessage } from '../util/services';
import{Link} from 'react-router-dom'

const Onetopic = ({ match, history, user }) => {

    const [topicID] = useState(match.params.topic_id);
    const [topic, setTopic] = useState([]);
    const [field, setField] = useState('');


    useEffect(() => {
        getTopicMessages(topicID).then(data => {
            setTopic(data.messages);
        })
    }, [topicID]);

    const handleAdd = () => {
        let username = user.user.username;
        addTopMessage(username, field, topicID).then(data => {
            if (data.success) {
                history.push('/list');
            } else {
                console.log('nije dodata poruka');
            }
        })
    }

    
  
       



    return (
        <>
            {topic.map(x => {
                return <ul>
                    <li className='content' key={Math.random()} onClick={() => {
                        history.push(`/profile/`)
                    }}>{x.username}</li>
                    <li key={Math.random()}>{x.message.toString()}</li>
                    <li key={Math.random()}>{x.timestamp}</li>
                </ul>
            })}
            <div id="content">
                <input type='text' placeholder='Odgovori' onInput={e => {
                    setField(e.target.value);
                }} />
                <input type='submit' value='Dodaj odgovor' onClick={() => {
                    handleAdd();
                }} />
            </div>
            <Link to = '/list'><button>Back to list</button></Link>
        </>
    )
}
export default Onetopic;