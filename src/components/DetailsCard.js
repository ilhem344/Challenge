import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
} from "reactstrap";

function DetailsCard({ juice, juiceLoaded }) {
  return (
    <div>
      <div style={{ width: "300px", marginTop: "100px", marginBottom: "20px" }}>
        {juiceLoaded ? (
          <Card>
            <CardImg
              top
              width="100%"
              src={juice[0].strDrinkThumb}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">{juice[0].strDrink}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                {juice[0].strCategory}
              </CardSubtitle>
              <CardText>{juice[0].strInstructions}</CardText>
              <CardText>{juice[0].strInstructionsDE}</CardText>
            </CardBody>
          </Card>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default DetailsCard;
