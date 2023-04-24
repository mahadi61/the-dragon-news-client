import React from "react";
import { Card } from "react-bootstrap";
import { BsBookmark, BsShare } from "react-icons/bs";

const NewsCard = ({ news }) => {
  console.log(news);

  const { title, author, image_url, details, total_view, rating } = news;
  return (
    <Card className="mb-4" border="secondary">
      <Card.Header>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <div className="h-100">
              {/* <img src={author.img} className=" rounded-circle" alt="" /> */}
            </div>
            <div>
              <span> {author.name}</span>
              <p>{author.published_date}</p>
            </div>
          </div>
          <div className="fs-4">
            <BsBookmark className="me-3" />
            <BsShare />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img className="px-3 my-3" src={image_url} />
        <Card.Text>{details}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
