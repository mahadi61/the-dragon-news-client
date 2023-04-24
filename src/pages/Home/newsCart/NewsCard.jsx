import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { BsBookmark, BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);

  const { _id, title, author, image_url, details, total_view, rating } = news;
  return (
    <Card className="mb-4" border="secondary">
      <Card.Header>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <Image style={{ height: "45px" }} src={author.img} roundedCircle />
            <div>
              <span className="d-block"> {author.name}</span>
              <span>{moment(author.published_date).format("YYYY-MM-DD")}</span>
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
        <Card.Text>
          {details.length < 300 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 300)}....{" "}
              <Link
                to={`/news/${_id}`}
                className="text-warning text-decoration-none fw-bold"
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <hr className="mx-3" />
      <div></div>
    </Card>
  );
};

export default NewsCard;
