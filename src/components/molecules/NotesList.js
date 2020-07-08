import React from "react";
import ColoredButtonsRow from "./ColoredButtonsRow";
import ControlButtonsRow from "./ControlButtonsRow";
import TextArea from "../atoms/TextArea";
import styled from "styled-components";

const NotesList = ({
  items,
  onChangeColor,
  onSave,
  onChangeView,
  onRemove,
  onZoom,
  onChange
}) => {
  return (
    <>
      {items.map((item, index) => (
        <Wrapper key={index}>
          <Container isOpen={item.isOpen}>
            <TextArea
              onZoom={() => onZoom(item)}
              note={item}
              onInput={event => onChange(event, item)}
              value={item.text}
            />
            <ButtonContainer isOpen={item.isOpen}>
              <ColoredButtonsRow
                onChangeColor={color => onChangeColor(color, item)}
              />
              <ControlButtonsRow
                onSave={() => onSave(item)}
                onChangeView={() => onChangeView(item)}
                onRemove={() => onRemove(item)}
              />
            </ButtonContainer>
          </Container>
        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = styled.div`
  padding: 5px;
  width: 90%;
`;

const Container = styled.div`
  z-index: ${({ isOpen }) => (isOpen ? "1" : "0")};
  position: ${({ isOpen }) => (isOpen ? "fixed" : "static")};
  left: ${({ isOpen }) => (isOpen ? "50%" : undefined)};
  margin-left: ${({ isOpen }) => (isOpen ? "-45%" : undefined)};
  opacity: ${({ isOpen }) => (isOpen ? "0.95" : "1")};
  top: ${({ isOpen }) => (isOpen ? "10px" : undefined)};
  width: ${({ isOpen }) => (isOpen ? "90%" : "100%")};
  &:hover {
    opacity: ${({ isOpen }) => (isOpen ? "0.95" : "0.8")};
  }
`;

const ButtonContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  bottom: ${({ isOpen }) => (isOpen ? "5px" : undefined)};
  right: ${({ isOpen }) => (isOpen ? "20px" : undefined)};
  position: absolute;
  margin: 0px;
`;

export default NotesList;
