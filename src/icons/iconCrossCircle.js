export default function IconCrossCircle({
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
      <path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
      <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
    </svg>
  );
}
