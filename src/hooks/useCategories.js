import { useEffect, useState } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.log(e));
  }, []);

  const deleteCategory = async (id) => {
    fetch(`http://localhost:5000/api/categories/${id}`, {
      method: "DELETE",
    })
      .then(setCategories(categories.filter((category) => category.id !== id)))
      .catch((e) => console.log(e));
  };

  return [categories, deleteCategory];
}
