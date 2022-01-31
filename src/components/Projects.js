import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Projects = () => {
    return(
        <Container fluid id="projects" style={{backgroundColor: "#343a40", padding: "20px"}}>
            <h1 style={{width: "100%", textAlign: "center", marginBottom: "50px", marginTop: "20px", color: "#dee2e6"}}>Projects</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "100%"}}>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>Fake Uber Eat API</Card.Title>
                            <Card.Text>
                            Develop containerized event-based microservices for supporting a RESTful API which is similar to the service provided by the Uber Eat API.
                            </Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%', margin: "20px 0" }}>
                        <Card.Body>
                            <Card.Title>Mobile Shopping App</Card.Title>
                            <Card.Text>
                            Design and implement a mobile computingapplication using the Android platform.
                            </Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>The Jungle Game</Card.Title>
                            <Card.Text>
                            Work in groups on the designand implementation of a Jungle game to be played in the command line console.
                            </Card.Text>
                            <Button variant="primary">More Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;