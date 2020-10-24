import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_TAMUCC from "../../assets/img/experience/tamucc.svg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_TAMUCC} alt="Tamucc logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Graduate Reserach Assistant</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    
                    <br />
                    <strong>Technology:</strong> Java 8, Python, Tableau, Javascript
                    <br />
                    <strong>Duration:</strong> November 2018 - May 2020
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>Created, designed and maintained webpages with added feature enhancement for better User Interface using html, css, and javascript.</li>
                      <li>Conducting surveys for the non-attendees and analyzing the results by creating Tableau Reports and Dashboards.
                      </li>
                      <li>Extensively used SQL concepts to Insert, Retrieve, Update the information in the database. 
                      </li>
                      <li>Created Graduate Student Handbook and deployed it into S3 bucket.</li>
                      {}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
