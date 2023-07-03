type CircleType = {
  width: number;
  strokeWidth: number;
  strokeDashoffset: number;
  className: string;
};

function Circle({
  width,
  strokeWidth,
  strokeDashoffset,
  className,
}: CircleType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={width}
      className={className}
      // style={{ transform: "rotate(-90deg)" }}
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stopColor="#e91e63" />
          <stop offset="100%" stopColor="#673ab7" />
        </linearGradient>
      </defs>
      <circle
        cx={`${width / 2}`}
        cy={`${width / 2}`}
        r={`${(width - strokeWidth) / 2}`}
        // strokeLinecap="butt"
        style={
          {
            // fill: "none",
            // stroke: "orange",
            // strokeWidth: `${strokeWidth}px`,
            // strokeDasharray: `${strokeDashoffset}`,
            // strokeDashoffset: `${(strokeDashoffset * 50) / 100}`,
          }
        }
      />
    </svg>
  );
}

export default Circle;
