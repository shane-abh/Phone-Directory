import React, { Component } from "react";
import AddSubscriber from "./AddSubsciber";
import ShowSubscriber from "./ShowSubscriber";

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

    addSubsciberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscribersList;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscribersList: subscribersList });
        console.log(this.state.subscribersList);
    }
    render() {
        return (
            // <AddSubscriber addSubsciberHandler={this.addSubsciberHandler} />
            <ShowSubscriber subscribersList = {this.state.subscribersList}/>
        )
    }
}

export default PhoneDirectory;