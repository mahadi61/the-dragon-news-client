import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
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
            <Link className="text-decoration-none text-black mx-3">
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
