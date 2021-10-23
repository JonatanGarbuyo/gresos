import "./styles.css";

const categories = [
  { id: 1, title: "food" },
  { id: 2, title: "clothes" },
  { id: 3, title: "rent" },
  { id: 4, title: "others" },
];

export default function Categories() {
  return (
    <main className="page_container">
      <div className="card_container"></div>

      <div className="resume">
        <h2 className="resume_title">Categories</h2>
        <ul className="detail detail_container">
          <div className="detail cell_header detail_row">
            <li className="cell ">id</li>
            <li className="cell ">category</li>
          </div>
          {categories.map(({ id, title }) => {
            return (
              <div className="detail detail_row" key={id}>
                <li className="cell">{id}</li>
                <li className="cell">{title}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
