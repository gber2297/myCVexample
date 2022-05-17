import React from "react";
import "../stylesheet/Card.css";

function Card(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Technologies</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.skills}
        </Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Card;
