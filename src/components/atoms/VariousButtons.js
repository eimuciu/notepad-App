import React from "react";
import styled from "styled-components";

export const ColoredButton = ({ buttonColor, onChangeColor }) => (
  <StyledColoredButton buttonColor={buttonColor} onClick={onChangeColor} />
);

const StyledColoredButton = styled.button`
  background-color: ${props => props.buttonColor};
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid black;
  &:hover {
    transform: scale(1.2);
  }
`;

export const ControlButton = ({ text, onAction }) => (
  <StyledControlButton onClick={onAction}>{text}</StyledControlButton>
);

const StyledControlButton = styled.button`
  border-radius: 3px;
  border: 1px solid black;
  padding: 3px;
  cursor: pointer;
  margin: 0.5px;
  position: relative;
  &:hover {
    top: -2px;
  }
`;
