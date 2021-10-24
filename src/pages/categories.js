import { useState } from "react";
import { Link } from "react-router-dom";
import NewCategoryForm from "../forms/newCategoryForm";
import IconAdd from "../icons/iconAdd";
import IconDelete from "../icons/iconDelete";
import IconEdit from "../icons/iconEdit";
import "./styles.css";

const allCategories = [
  { id: 1, title: "food" },
  { id: 2, title: "clothes" },
  { id: 3, title: "rent" },
  { id: 4, title: "others" },
];

export default function Categories() {
  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState(allCategories);

  const handleDeleteCategory = (id) => {
    console.log("ID: ", id);
    setCategories(categories.filter((income) => income.id !== id));
  };

  return (
    <main className="page_container">
      <div className="card_container card_container_categories">
        <IconAdd
          alt="icon"
          height={"2.5rem"}
          width={"2.5rem"}
          fill="green"
          className="addButton"
          onClick={() => setShowForm(true)}
        />
      </div>

      <div className="resume">
        <h2 className="resume_title">Categories</h2>
        <ul className="detail detail_container">
          <div className="detail cell_header detail_row_category">
            <li className="cell ">category</li>
            <li className="cell "></li>
          </div>

          <NewCategoryForm
            setShowForm={setShowForm}
            className={showForm ? "detail detail_row_category" : "form_hidden"}
            inputClassName="form_cell"
          />

          {categories.map(({ id, title }) => {
            return (
              <div className="detail detail_row_category" key={id}>
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
