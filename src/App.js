import React, { useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { BrowserRouter } from 'react-router-dom';
import Content from './layout/Content';


function App() {

  const [user, setUser] = useState();

  return (
    <BrowserRouter>
    <div className="App">
      <Header logedIn={user} setUser={setUser}></Header>
      
      <Content setUser={setUser} user={user}></Content>
      
      <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
