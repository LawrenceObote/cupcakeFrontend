import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Container } from 'reactstrap';

export default function Item(props) {
    console.log(props.image);
    return (
        <div className="wrapper">
            <Container>
                <Card className="card-margin-top">
                    <CardImg top width="100%" height="300px" src={props.image} alt="Card image cap" />
                    <CardBody className="card-colors">
                        <CardTitle>{props.name}</CardTitle>
                        <CardSubtitle>{props.price}</CardSubtitle>

                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}
