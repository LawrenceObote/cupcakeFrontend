import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios';
import AddComment from './AddComment'

export default class Home extends Component {
    state = {
        backgroundImage: ''
    }
    componentDidMount() {
        const call = async () => {
            return axios.get(`https://api.unsplash.com/photos/random?&query=cupcake&client_id=4_-191W_jUgFQg_ujNLY9H3gpr7zGA4yY8ffZXQoJO0`)
                .then(response => {
                    const img = response.data.urls.regular;
                    this.setState({
                        backgroundImage: img
                    })
                    return response.data.urls.regular;

                })
        }
        call();

    }
    render() {

        return (
            <div>
                <div className="contact" style={{ backgroundImage: `url(${this.state.backgroundImage})` }}>
                    <NavigationBar></NavigationBar>
                    <h1 >Contact Us</h1>
                    <p>For General questions or feedback please email us: email@cupcakeshop.com or to place an order call (999) 999-9999</p>
                    <br></br>
                    <p>Questions about an existing order?</p>
                    <p>order@cupcakeshop.com</p>
                    <br></br>
                    <p>Perks Loyalty Inquires</p>
                    <p>perks@cupcakeshop.com</p>
                    <br></br>
                    <p>Press Requests</p>
                    <p>press@cupcakeshop.com</p>
                    <br></br>
                    <p>Career Opportunities</p>
                    <p>career@cupcakeshop.com</p>
                    <br></br>
                    <p>Catering and Event Inquiries</p>
                    <p>events@cupcakeshop.com</p>
                    <br></br>
                    <p>Donation Requests</p>
                    <p>submit here</p>

                </div>
                <div className="new-comment-box">
                    <AddComment className="new-comment-box"></AddComment>
                </div>
            </div>
        )
    }
}
