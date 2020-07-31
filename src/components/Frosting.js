import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import { Row, Col } from 'reactstrap';
import Item from './Item'
import axios from 'axios';
import AddComment from './AddComment';
import Vanilla from '../assets/vanillaFrosting.webp';
import Chocolate from '../assets/chocolateFrosting.jpg';
import Strawberry from '../assets/strawberryFrosting.jpg'

class Frosting extends Component {

    constructor(props) {
        super(props);
        this.state = { frostings: [], isLoading: true };
        // this.remove = this.remove.bind(this);
        this.getFrostings = this.getFrostings.bind(this);
    }

    getFrostings = async () => {

        const { frostings } = this.state;
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/frosting/', frostings)
        this.setState({ data: response.data })


    }


    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/cupcakeShop/v1/frosting/`)
            .then(res => {
                const frostings = res.data;
                this.setState({ frostings })
            })

    }
    render() {

        return (
            <div>
                <NavigationBar></NavigationBar>
                <Row>

                    <Col md="4">
                        <Item name={"Vanilla"} price={`$3`} image={Vanilla} />
                    </Col>
                    <Col md="4">
                        <Item name={"Chocolate"} price={`$3`} image={Chocolate} />
                    </Col>
                    <Col md="4">
                        <Item name={"Strawberry"} price={`$3`} image={Strawberry} />
                    </Col>


                </Row>

                <div className="new-comment-box">
                    <AddComment className="new-comment-box"></AddComment>
                </div>
            </div>
        )
    }
}
export default Frosting;