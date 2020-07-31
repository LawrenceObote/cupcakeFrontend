import React, { Component } from 'react'
import NavigationBar from './NavigationBar'
import { Row, Col } from 'reactstrap';
import Item from './Item'
import axios from 'axios';
import AddComment from './AddComment'
import Vanilla from '../assets/cupcakeVanilla.jpg';
import Chocolate from '../assets/cupcakeChocolate.jpg';
import Carrot from '../assets/cupcakeCarrot.jpg';
import Pumpkin from '../assets/cupcakePumpkin.jpg';
import RedVelvet from '../assets/cupcakeRedVelvet.jpg';
import Strawberry from '../assets/cupcakeStrawberry.jpg';

class Cupcakes extends Component {

    constructor(props) {
        super(props);
        this.state = { cupcakes: [], isLoading: true };
        this.getCupcakes = this.getCupcakes.bind(this);
    }

    getCupcakes = async () => {

        const { cupcakes } = this.state;
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com', cupcakes)
        this.setState({ data: response.data })


    }


    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://cupcake-backend.herokuapp.com/`)
            .then(res => {
                const cupcakes = res.data;
                this.setState({ cupcakes })
                console.log("cupcakes", cupcakes);
            })

    }
    render() {
        return (
            <div>
                <NavigationBar />
                <Row>
                    <Col md="4">
                        <Item name={"Vanilla"} price={"$3"} image={Vanilla} />
                    </Col>
                    <Col md="4">
                        <Item name={"Chocolate"} price={"$3"} image={Chocolate} />
                    </Col>
                    <Col md="4">
                        <Item name={"Carrot"} price={"$3"} image={Carrot} />
                    </Col>
                    <Col md="4">
                        <Item name={"Pumpkin"} price={"$3"} image={Pumpkin} />
                    </Col>
                    <Col md="4">
                        <Item name={"Red Velvet"} price={"$3"} image={RedVelvet} />
                    </Col>
                    <Col md="4">
                        <Item name={"Strawberry"} price={"$3"} image={Strawberry} />
                    </Col>
                </Row>


                <div className="new-comment-box">
                    <AddComment className="new-comment-box"></AddComment>
                </div>
            </div>
        )
    }
}
export default Cupcakes;
