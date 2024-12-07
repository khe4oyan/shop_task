import svgIcons from "./svgIcons";

export default function SvgIcon({
  iconName,
  className = "",
  width = 24,
  height = 24,
  filled = true,
}) {
  const svg = svgIcons[iconName]?.svg ?? svgIcons[iconName];

  if (!svg) {
    throw new Error("wrong icon");
  }

  const { viewBoxW, viewBoxH } = svgIcons[iconName];

  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={filled ? "" : "none"}
      viewBox={`0 0 ${viewBoxW ?? width} ${viewBoxH ?? height}`}
    >
      {svg}
    </svg>
  );
}