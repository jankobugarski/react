import React from 'react';
import Topic from './Topic';
import { Link } from 'react-router-dom';
import { getTopics } from '../util/services';
import { useState } from 'react';
import { useEffect } from 'react';

const List = ({history}) => {

    const [topic, setTopic] = useState([]);

    useEffect(() => {
        getTopics().then(data => {  
            setTopic(data.topics);
        })
    },[]);

    return (
        <>
            {topic.map(e=>{
                return <Topic key={Math.random()} topic={e.title.toString()} topicID={e.topic_id} history={history}/> 
            })}

            <Link to='/newtopic'><button>Start new topic</button></Link>

            <Link to = '/'><button>Back to main page</button></Link>
        </>
    )
}

export default List;