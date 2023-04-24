import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import EditorsInsight from "../EditorsInsight/EditorsInsight";

const News = () => {
  const newsData = useLoaderData();
  console.log(newsData);
  const { _id, category_id, title, image_url, details } = newsData;
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Img className="my-3" src={image_url} />
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <BsArrowLeft className="fs-4 me-2" />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <EditorsInsight></EditorsInsight>
    </>
  );
};

export default News;
