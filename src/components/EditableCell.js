import React from "react";

export const EditableCell = ({
  value: initialValue,
  row: { index, original },
  name,
  editedRows
}) => {
  // We need to keep and update the state of the cell normally
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
    editedRows.push(obj);
    console.log('updated', obj);
  }, [editedRows, name, original, value]);

  const onDoubleClick = React.useCallback(() => {
    setIsEditable(!editable)
  }, [editable])

  return <input onDoubleClick={onDoubleClick} value={value} className={`form-control${editable ? '' : '-plaintext'}`} onChange={onChange} onBlur={onBlur} />
}
