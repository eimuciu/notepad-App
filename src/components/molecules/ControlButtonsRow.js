import React from "react";
import { ControlButton } from "../atoms/VariousButtons";

const ControlButtonsRow = ({ onSave, onChangeView, onRemove }) => (
  <div>
    <ControlButton text="save" onAction={onSave} />
    <ControlButton text="zoom out" onAction={onChangeView} />
    <ControlButton text="del" onAction={onRemove} />
  </div>
);

export default ControlButtonsRow;
