import React from "react";
import { useTableContext } from "../contexts/TableContext";

export const EditableCell = ({
  value: initialValue,
  row: { index, original },
  name
}) => {
  const { setIsEdit, setEditedRows, editedRows } = useTableContext();
  const [value, setValue] = React.useState(initialValue)
  const [editable, setIsEditable] = React.useState(false);

  const onChange = e => {
    setValue(e.target.value)
  }

  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onBlur = React.useCallback(() => {
    setIsEditable(false);
    let obj = { ...original };
    const splitted = name.split('.')
    if (splitted.length === 2) {
      obj[splitted[0]][splitted[1]] = value;
    } else {
      obj[name] = value;
    }
    setEditedRows([...editedRows, obj])
  }, [editedRows, name, original, setEditedRows, value]);

  const onDoubleClick = React.useCallback(() => {
    setIsEditable(!editable)
    setIsEdit(true);
  }, [editable, setIsEdit])

  return <input onDoubleClick={onDoubleClick} value={value} className={`form-control${editable ? '' : '-plaintext'}`} onChange={onChange} onBlur={onBlur} />
}
