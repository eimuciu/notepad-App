import React from "react";
import styled from "styled-components";
import { ColoredButton } from "../atoms/VariousButtons";

const ColoredButtonsRow = ({ onChangeColor }) => (
  <Div>
    <ColoredButton
      buttonColor="#6F90E8"
      onChangeColor={() => onChangeColor("#6F90E8")}
    />
    <ColoredButton
      buttonColor="#4FE833"
      onChangeColor={() => onChangeColor("#4FE833")}
    />
    <ColoredButton
      buttonColor="#FFD745"
      onChangeColor={() => onChangeColor("#FFD745")}
    />
    <ColoredButton
      buttonColor="#E85833"
      onChangeColor={() => onChangeColor("#E85833")}
    />
    <ColoredButton
      buttonColor="#BA2AFF"
      onChangeColor={() => onChangeColor("#BA2AFF")}
    />
  </Div>
);

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
`;

export default ColoredButtonsRow;
