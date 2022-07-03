import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscriber.css';


// let subscribers  = [
    //   {
    //     id:1,
    //     name: "Shane",
    //     phone: "000000000"
    //   },
    //   {
    //     id:2,
    //     name: "Tom",
    //     phone: "000000000"
    //   }
    // ];

class ShowSubcriber extends Component {

 
  

 

  
  clickHandler(message){
    alert(message);
  }

  render() {
    console.log("render called");

    return (

      <div>
        <Header heading= "Phone Directory"/>

        <div className="component-body-container">
          <button className="btn-primary">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

         { 
         this.props.subscribersList.map(sub => {
            return <div key={sub.id} className='grid-container'>
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="delete-btn" onClick={this.clickHandler.bind(this,"Deleted")}>Delete</button>
                </span>
              </div>
            
          })
        }


        </div>



      </div>

    );
  }

}


export default ShowSubcriber;
