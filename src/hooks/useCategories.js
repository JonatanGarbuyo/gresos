import { useEffect, useState } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((e) => console.log(e));
  }, []);

  const deleteCategory = (id) => {
    fetch(`/api/categories/${id}`, {
      method: "DELETE",
    })
      .then(setCategories(categories.filter((category) => category.id !== id)))
      .catch((e) => console.log(e));
  };

  const addCategory = (category) => {
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

  const editCategory = (category) => {
    fetch(`/api/categories/${category.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    })
      .then(() =>
        setCategories(
          categories.map((c) => (c.id === category.id ? category : c))
        )
      )
      .catch((e) => console.log(e));
  };

  return [categories, addCategory, deleteCategory, editCategory];
}
