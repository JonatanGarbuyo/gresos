import { useEffect, useState } from "react";

import useUser from "./useUser";

export function useCategories() {
  const { jwt } = useUser();
  const [categories, setCategories] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  useEffect(
    () =>
      getAllCategories()
        .then((data) => {
          setCategories(data);
          setIsLoading(false);
        })
        .catch((e) => console.log(e)),
    []
  );

  const getAllCategories = () =>
    fetch(`/api/categories`, {
      method: "GET",
      headers: {
        "x-auth-token": `bearer ${jwt}`,
      },
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));

  const deleteCategory = (id) => {
    fetch(`/api/categories/${id}`, {
      method: "DELETE",
      headers: {
        "x-auth-token": `bearer ${jwt}`,
      },
    })
      .then(setCategories(categories.filter((category) => category.id !== id)))
      .catch((e) => console.log(e));
  };

  const addCategory = (category) => {
    fetch(`/api/categories/`, {
      method: "POST",
      headers: {
        "x-auth-token": `bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => {
        if (!res.ok && res.status === 409) {
          alert("Category already exist");
          return Promise.reject(new Error("Category already exist"));
        } else return res.json();
      })
      .then((returnedCategory) => {
        setCategories(categories.concat(returnedCategory));
      })
      .catch((e) => console.error(e));
  };

  const editCategory = (category) => {
    fetch(`/api/categories/${category.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": `bearer ${jwt}`,
      },
      body: JSON.stringify(category),
    })
      .then(() =>
        setCategories(
          categories.map((c) => (c.id === category.id ? category : c))
        )
      )
      .catch((e) => console.log(e));
  };

  return [categories, addCategory, deleteCategory, editCategory, isloading];
}
