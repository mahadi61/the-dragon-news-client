import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import editor1 from "../../../assets/editorsInsight1.png";
import editor2 from "../../../assets/editorsInsight2.png";
import editor3 from "../../../assets/editorsInsight3.png";

const EditorsInsight = () => {
  return (
    <div className="mt-4 gap-3">
      <h3>Editors Insight</h3>
      <CardGroup className="mt-4 gap-3">
        <Card>
          <Card.Img variant="top" src={editor1} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Jan 4, 2022</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={editor2} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Jan 4, 2022</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={editor3} />
          <Card.Body>
            <Card.Title>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Jan 4, 2022</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default EditorsInsight;
