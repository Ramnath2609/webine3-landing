import { useCallback, useMemo } from "react";
import { useTable, useRowSelect, usePagination, useFlexLayout } from "react-table"
import { useTableColumns } from "./table/table-hooks"
import { useTableContext } from "../contexts/TableContext";

export function UpdateModal({ rows, notify }) {
  const { setData, editedRows, setEditedRows } = useTableContext();
  // const [editedRows, setEditedRows] = useState([]);
  const { columns } = useTableColumns();
  const data = useMemo(() => rows.map((row) => row.original), [rows]);

  const onUpdate = useCallback(() => {
    const prevValues = JSON.parse(localStorage.getItem('table-data'));
    editedRows.forEach((value) => {
      const index = prevValues.findIndex((item) => item.id === value.id);
      prevValues.splice(index, 1, value);
    })
    window.localStorage.setItem('table-data', JSON.stringify(prevValues));
    setEditedRows([]);
    setData(prevValues);
    notify();
  }, [editedRows, notify, setData, setEditedRows]);


  return (
    <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModal" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="d-flex justify-content-center w-100">
              <h5 className="modal-title" id="updateModal">Update Shipment Details</h5>
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Table data={data} columns={columns} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-success" id="notificationsToast" data-bs-dismiss="modal" onClick={onUpdate}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex },
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage
  } = useTable(
    {
      columns,
      data
    },
    usePagination,
    useRowSelect,
    useFlexLayout
  )

  return (
    <div className='p-4'>
      <div className="modal-table table-wrap">
        <table {...getTableProps()} className="table table-hover table-responsive">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th style={{ maxWidth: column.maxWidth }} className='text-success' {...column.getHeaderProps()}>{column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="d-flex justify-content-center align-items-center">
          <button className='btn btn-light' onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button className='btn btn-light' onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
        </div>
      </div>
    </div>
  )
}