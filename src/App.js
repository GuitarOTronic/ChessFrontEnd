import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './css/general.css'
// import io from 'socket.io'
import Board from './board/board.js'
class App extends Component {



  // static sendToSocket = () =>{
  //   var socket = io();
  //   document.getElementsByTagName('FORM').submit(function(){
  //     socket.emit('chat message', document.getElementById('#m').val());
  //     document.getElementById('#m').val('');
  //     return false;
  //   });
  // }




  render() {
    return (
      // <div className="App">
      //   <ul id="messages"></ul>
      //   <form action="">
      // <input id="m" autocomplete="off" /><button onClick='sendToSocket'>Send</button>
      // </form>
      // </div>
      <Router>
        <div className='appContainer'>
          <div className='centerMe padDown'>
            <h1>Chess :)</h1>
          </div>
          <Route path='/'
            render = {(props) =>
              <Board />
            }
          />

        </div>
      </Router>

    );
  }
}

export default App;
