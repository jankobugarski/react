import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import List from '../components/TopicList';

import Newtopic from '../components/NTopic';
import Onetopic from '../components/OTopic';
import Home from '../components/Home';

const Content = ({setUser, user}) =>{
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/login' component={(props)=><Login setUser={setUser} {...props}/>} ></Route>
                <Route path='/register' component={(props) => <Register setUser={setUser} {...props}/>}></Route>
                <Route path='/list' component={List}></Route>
                <Route path='/onetopic/:topic_id' component={(props) => <Onetopic setUser={setUser} user={user} {...props}/>}></Route>
                
                <Route path='/newtopic' component={(props)=> <Newtopic setUser={setUser} user={user} {...props}/>}></Route>
            </Switch>
        </div>
    )
}


export default Content;
