import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import VanillaCupcake from '../assets/vanillaCupcake.jpg';
import VanillaFrosting from '../assets/vanillaFrosting.webp';

export default function Menu() {
    return (
        <Container>
            <Row>
                <Col md="6">
                    <Card>
                        <CardImg top width="100%" height="500px" src={VanillaCupcake} alt="Cupcake" />
                        <CardBody className="card-colors">
                            <CardTitle tag={Link} to="/cupcakes">Cupcakes</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                            <CardText>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="6">
                    <Card>
                        <CardImg top width="100%" height="500px" src={VanillaFrosting} alt="Frosting" />
                        <CardBody className="card-colors">
                            <CardTitle tag={Link} to="/frosting">Frosting</CardTitle>
                            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardText>
                            <CardText>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

