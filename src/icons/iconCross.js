export default function IconCross({
  fill = "black",
  height = 512,
  width = 512,
  ...props
}) {
  return (
    <svg
      alt="icon cross"
      xmlns="http://www.w3.org/2000/svg"
      fill={`${fill}`}
      id="Outline"
      viewBox="0 0 24 24"
      width={`${width}`}
      height={`${height}`}
      {...props}
    >
      <path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z" />
    </svg>
  );
}
