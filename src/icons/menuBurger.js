export default function IconMenuBurger({
  fill = "black",
  height = 512,
  width = 512,
  ...props
}) {
  return (
    <svg
      alt="icon menu burger"
      xmlns="http://www.w3.org/2000/svg"
      fill={`${fill}`}
      id="Outline"
      viewBox="0 0 24 24"
      width={`${width}`}
      height={`${height}`}
      {...props}
    >
      <rect y="11" width="24" height="2" rx="1" />
      <rect y="4" width="24" height="2" rx="1" />
      <rect y="18" width="24" height="2" rx="1" />
    </svg>
  );
}
