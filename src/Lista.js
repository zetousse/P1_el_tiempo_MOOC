import React from "react";
import { Card } from "react-bootstrap";
import Producto from "./Producto";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Link, Route } from "react-router-dom";

function Lista(props) {
  return (
    <div>
      <Row lg={4}>
        {props.theproducts.map((item) => {
          return (
            <Card
              className="unproducto"
              key={item.id}
              style={{ width: "20rem" }}
            >
              <Card.Img variant="top" src={item.images[0]} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>

                <Link to={"/products/"+ item.id}>
                  <Button variant="info">Ver</Button>
                </Link>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </div>
  );
}

export default Lista;
