import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProjectCard({title, description}) {
    return (
        <>
        <Card className="myStyle">
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            </Card.Body>

            <Button style={{backgroundColor: '#646cffaa'}}>Link to Page</Button>
        </Card>
        </>
    )
}

