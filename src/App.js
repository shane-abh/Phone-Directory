import React, { Component } from 'react';
import Header from './Header';

class App extends Component {
  render() {
    let x = 1; let y = 2;

    return (

      <div>
        <Header/>

        <button>Add</button>
        <div>
          <span>Name</span> <br></br>
          <span>Phone</span>
        </div>

        <label htmlFor='name'> Name: </label>
        <input id='name' type="text" placeholder='Type here' defaultValue={x+y}/>
        
      </div>
      
    );
  }

}


export default App;
