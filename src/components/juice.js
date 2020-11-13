import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Juice = ({ juice }) => {
  return (
    <div style={{ width: "300px", marginTop: "100px", marginBottom: "20px" }}>
      <Card>
        <CardImg
          top
          width="100%"
          src={juice.strDrinkThumb}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">{juice.strDrink}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {juice.strCategory}
          </CardSubtitle>
          <CardText>{juice.strGlass}</CardText>
          <Link to={`/drink/${juice.idDrink}`}>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default Juice;
