import styled from "styled-components";

type CircleAnimationType = {
  width: number;
  strokeWidth: number;
  strokeDashoffset: number;
};

const CircleAnimation = styled.div<CircleAnimationType>`
  position: absolute;
  width: ${(props) => props.width};
  height: ${(props) => props.width};

  svg {
    transform: rotate(-90deg);
  }

  svg circle {
    fill: none;
    stroke: orange;
    stroke-width: ${(props) => props.strokeWidth}px;
    stroke-dasharray: ${(props) => props.strokeDashoffset};
    stroke-dashoffset: ${(props) => (props.strokeDashoffset * 30) / 100};
  }
`;

export default CircleAnimation;
