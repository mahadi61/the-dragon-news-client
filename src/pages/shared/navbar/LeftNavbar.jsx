import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import card1 from "../../../assets/1.png";
import card2 from "../../../assets/2.png";
import card3 from "../../../assets/3.png";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-dragon-news-server-mahadi61.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h4>All Category</h4>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black mx-3"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <CardGroup className="d-flex flex-column mt-4 gap-3">
          <Card>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Jan 4, 2022</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={card2} />
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
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>
                Bayern Slams Authorities Over Flight Delay to Club World Cup
              </Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Jan 4, 2022</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
};

export default LeftNavbar;
