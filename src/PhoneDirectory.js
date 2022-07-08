import React, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscriber";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

class PhoneDirectory extends Component {

    constructor() {
        super();
        this.state = {
            subscribersList: [{
                id: 1,
                name: "Shane",
                phone: "6502112"
            },
            {
                id: 2,
                name: "Shane2",
                phone: "650211342"

            }]
        }
    }

    deleteSubscriberHandler = (subscriberId) => {
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id === subscriberId) {
                subscriberIndex = index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
    }
    
    render() {
        return (

           
            
          <Router>
            
                <Routes>
                    <Route  exact path="/"  element={<ShowSubscriber  subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}></Route>
                    {/* <Route  path="/add" render={({history}, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} /> */}
                    <Route  path="/add"  element={<AddSubscriber history={this.history} addSubscriberHandler={this.addSubscriberHandler} /> } ></Route>
                 </Routes>
            

         </Router>
            
        )
    }
}

export default PhoneDirectory;