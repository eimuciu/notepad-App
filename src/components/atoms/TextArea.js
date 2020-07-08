import React from "react";
import styled from "styled-components";

const TextArea = ({ onZoom, note, onInput, value }) => {
  return (
    <StyledTextArea
      onClick={onZoom}
      note={note}
      onChange={onInput}
      value={value}
    />
  );
};

const StyledTextArea = styled.textarea`
  background-color: ${({ note }) => note.color};
  width: ${({ note }) => (note.isOpen ? "100%" : "100%")};
  height: ${({ note }) => (note.isOpen ? "500px" : "auto")};
  overflow-y: ${({ note }) => (note.isOpen ? "auto" : "hidden")};
  cursor: ${({ note }) => (note.isOpen ? "auto" : "pointer")};
  border: ${({ note }) => (note.isOpen ? "solid white" : "none")};
  border-radius: 5px;
  margin: 0px;
  padding: 20px 10px;
  overflow-x: hidden;
  font-family: Arial;
  font-size: 1rem;
  box-sizing: border-box;
  display: block;
  resize: none;
  &:hover {
    transform: scale(${({ note }) => (note.isOpen ? 1 : 1.1)});
  }
  @media (max-width: 768px) {
    width: ${({ note }) => (note.isOpen ? "100%" : "100%")};
    height: ${({ note }) => (note.isOpen ? "70vh" : "auto")};
  }
`;

export default TextArea;
