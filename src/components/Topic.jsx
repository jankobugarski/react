import React, { useState, useEffect } from 'react';
import { getMessage } from '../util/services';

const Topic = ({ history, topicID,topic }) => {

    const [topics, setTopics] = useState('')
    console.log(topics)
    useEffect(() => {
        getMessage(topicID)
            .then(data => {
                if (data.success === false) {
                    return;
                }
                setTopics(data.messages.topic_id);
            })
    }, [topicID]);

    return (
        <>
            <li onClick={() => {
                history.push(`/onetopic/${topicID}`);
            }} key={Math.random()}>{topic}</li>
        </>
    )
}

export default Topic;