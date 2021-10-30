import { useState } from "react";
import { Link } from "react-router-dom";

import { useCategories } from "../hooks/useCategories";

import NewCategoryForm from "../forms/newCategoryForm";
import IconAdd from "../icons/iconAdd";
import IconDelete from "../icons/iconDelete";
import IconEdit from "../icons/iconEdit";

import "./styles.css";

export default function Categories() {
  const [showForm, setShowForm] = useState(false);
  const [activeEditForm, setActiveEditForm] = useState(null);
  const [categories, addCategory, deleteCategory, editCategory] =
    useCategories();

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
        <div className="detail detail_container">
          <div className="detail cell_header detail_row_category">
            <div className="cell ">Name</div>
            <div className="cell "></div>
          </div>

          <NewCategoryForm
            onSubmit={addCategory}
            showForm={showForm}
            setShowForm={setShowForm}
            formClassName={
              showForm ? "detail detail_row_category" : "form_hidden"
            }
          />

          {categories.map(({ id, name }) => {
            return activeEditForm === id ? (
              <NewCategoryForm
                key={id}
                initialValues={{ id, name }}
                onSubmit={editCategory}
                showForm={showForm}
                setShowForm={setActiveEditForm}
                formClassName="detail detail_row_category"
              />
            ) : (
              <Link
                to={`/transactions/category/${id}`}
                className="detail detail_row_category"
                key={id}
              >
                <div className="cell">{name}</div>
                <div className="cell">
                  <IconEdit
                    onClick={() => setActiveEditForm(id)}
                    height={"100%"}
                    width={"1.5rem"}
                    fill="var(--primary)"
                    alt="icon"
                    className="icon_edit"
                  />
                  <IconDelete
                    onClick={() => deleteCategory(id)}
                    height={"100%"}
                    width={"1.5rem"}
                    fill="var(--primary)"
                    alt="icon"
                    className="icon_edit"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
