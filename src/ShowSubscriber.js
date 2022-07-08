import React, { Component } from 'react';
import Header from './Header';
import './ShowSubscriber.css';
import {Link} from 'react-router-dom';



class ShowSubcriber extends Component {

 
  

  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId); 
  }

  clickHandler(message){
    alert(message);
  }

  render() {
    console.log("render called");

    return (

      <div>
        <Header heading= "Phone Directory"/>

        <div className="component-body-container">
         <Link to="/add">
            <button className="btn-primary">Add</button>
          </Link>

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
                  <button className="delete-btn" onClick={this.onDeletedClick.bind(this,sub.id)}>Delete</button>
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
