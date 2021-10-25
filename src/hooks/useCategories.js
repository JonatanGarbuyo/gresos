import { useEffect, useState } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.log(e));
  }, []);

  const deleteCategory = async (id) => {
    fetch(`/api/categories/${id}`, {
      method: "DELETE",
    })
      .then(setCategories(categories.filter((category) => category.id !== id)))
      .catch((e) => console.log(e));
  };

  const addCategory = async (category) => {
    fetch(`/api/categories/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((returnedCategory) =>
        setCategories(categories.concat(returnedCategory))
      )
      .catch((e) => console.log(e));
  };

  return [categories, deleteCategory, addCategory];
}
