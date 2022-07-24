import React from "react";

const TableContext = React.createContext();


export function TableContextProvider({ children }) {
  const [data, setData] = React.useState([]);
  const [isFilterApplied, setIsFilterApplied] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [editedRows, setEditedRows] = React.useState([]);

  React.useEffect(() => setData(JSON.parse(window.localStorage.getItem('table-data'))), []);

  const resetData = React.useCallback(() => {
    setData(JSON.parse(window.localStorage.getItem('table-data')));
  }, []);

  return (
    <TableContext.Provider value={{ data, setData, resetData, isFilterApplied, setIsFilterApplied, filteredData, setFilteredData, isEdit, setIsEdit, editedRows, setEditedRows }}>
      {children}
    </TableContext.Provider>
  );
}

export function useTableContext() {
  return React.useContext(TableContext);
}