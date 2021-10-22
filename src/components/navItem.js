import "./navItem.css";
export default function NavItem({ destination = "#", title = "", Icon }) {
  return (
    <>
      <Icon
        height={"1.5rem"}
        width={"1.5rem"}
        fill="var(--secondary)"
        alt="icon"
        className="icon"
      />
      <a href={`${destination}`} title={title}>
        {title}
      </a>
    </>
  );
}
