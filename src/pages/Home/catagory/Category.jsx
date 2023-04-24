import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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

  return <div>All news category: {categoryNews.length}</div>;
};

export default Category;
