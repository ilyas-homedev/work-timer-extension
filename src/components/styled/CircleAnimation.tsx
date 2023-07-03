import styled from "styled-components";

type CircleAnimationType = {
  width: number;
  strokeWidth: number;
  strokeDashoffset: number;
  timeout: number;
};

const CircleAnimation = styled.div<CircleAnimationType>`
  position: absolute;
  top: 0px;
  width: ${(props) => props.width};
  height: ${(props) => props.width};

  svg {
    transform: rotate(-90deg);
    pointer-events: none;
  }

  svg circle {
    fill: none;
    stroke: orange;
    stroke-width: ${(props) => props.strokeWidth}px;
    stroke-dasharray: ${(props) => props.strokeDashoffset};
    stroke-dashoffset: ${(props) => props.strokeDashoffset};
    transition: all ${(props) => props.timeout}s linear;
  }

  svg circle.timer_start {
    stroke-dashoffset: 0;
  }
`;

export default CircleAnimation;
