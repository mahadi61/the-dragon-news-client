import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../newsCart/NewsCard";

const Category = () => {
  /*   const { id } = useParams();
  const newId = Number(id);
  const [newsCategory, setNewsCategory] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${newId}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []); */

  const categoryNews = useLoaderData();

  return (
    <div>
      <h3>All news category: {categoryNews.length}</h3>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
