type CircleType = {
  width: number;
  strokeWidth: number;
};

function Circle({ width, strokeWidth }: CircleType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={width}
      style={{ transform: "rotate(-90deg)" }}
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#e91e63" />
          <stop offset="100%" stop-color="#673ab7" />
        </linearGradient>
      </defs>
      <circle
        cx="75"
        cy="75"
        r="70"
        // stroke-linecap="round"
        style={{
          fill: "none",
          stroke: "orange",
          strokeWidth: `${strokeWidth}px`,
          strokeDasharray: "472",
          strokeDashoffset: "460",
        }}
      />
    </svg>
  );
}

export default Circle;
