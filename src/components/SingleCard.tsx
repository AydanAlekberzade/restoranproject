import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

interface MySingleCardProps {
  url: number;
  img: string;
  title: string;
  price: number;
  desc: string;
  
}

const SingleCard = (props: MySingleCardProps) => {
  return (
    <div className="col-lg-4 p-3 mt-">
      <Card className="mycard">
        <Card.Img variant="top" src={props.img} />
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle" style={{ color: "whitesmoke" }}>{props.title}</Card.Title>
          <LinkContainer to={`/shop/${props.url}`}>
            <Button
              className="btndir mt-3"
              style={{ marginLeft: "20px" }}
            >
              DISCOVER
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
