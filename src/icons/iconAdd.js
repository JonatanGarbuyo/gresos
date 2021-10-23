export default function IconAdd({
  fill = "black",
  height = 512,
  width = 512,
  ...props
}) {
  return (
    <svg
      alt="icon add"
      xmlns="http://www.w3.org/2000/svg"
      fill={`${fill}`}
      id="Outline"
      viewBox="0 0 24 24"
      width={`${width}`}
      height={`${height}`}
      {...props}
    >
      <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
    </svg>
  );
}
