import { useState } from "react";
import { Link } from "react-router-dom";
import IconAdd from "../icons/iconAdd";
import IconDelete from "../icons/iconDelete";
import IconEdit from "../icons/iconEdit";
import "./styles.css";

export default function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, title: "food" },
    { id: 2, title: "clothes" },
    { id: 3, title: "rent" },
    { id: 4, title: "others" },
  ]);

  const handleDeleteCategory = (id) => {
    console.log("ID: ", id);
    setCategories(categories.filter((income) => income.id !== id));
  };

  return (
    <main className="page_container">
      <div className="card_container card_container_categories">
        <Link to="/new/category" className="addButton">
          <IconAdd
            alt="icon"
            height={"2.5rem"}
            width={"2.5rem"}
            fill="green"
            className=""
          />
        </Link>
      </div>

      <div className="resume">
        <h2 className="resume_title">Categories</h2>
        <ul className="detail detail_container">
          <div className="detail cell_header detail_row_category">
            <li className="cell ">id</li>
            <li className="cell ">category</li>
            <li className="cell "></li>
          </div>
          {categories.map(({ id, title }) => {
            return (
              <div className="detail detail_row_category" key={id}>
                <li className="cell">{id}</li>
                <li className="cell">{title}</li>
                <li className="cell">
                  <Link to={`/edit/${id}`}>
                    <IconEdit
                      height={"100%"}
                      width={"1.5rem"}
                      fill="var(--primary)"
                      alt="icon"
                      className="icon_edit"
                    />
                  </Link>
                  <IconDelete
                    onClick={() => handleDeleteCategory(id)}
                    height={"100%"}
                    width={"1.5rem"}
                    fill="var(--primary)"
                    alt="icon"
                    className="icon_edit"
                  />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
