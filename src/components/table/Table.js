import React from 'react'
import { useTable, useRowSelect, usePagination, useSortBy } from 'react-table'
import { useTableColumns, data } from './table-hooks'
import { IndeterminateCheckbox } from './Checkbox'
import { FilterForm } from './FilterForm';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import './style.css';
import { UpdateModal } from './UpdateModal';

export const EditableCell = ({
  value: initialValue,
  // row: { index },
  // column: { id },
  // updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)
  const [editable, setIsEditable] = React.useState(false);

  const onChange = e => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  // const onBlur = () => {
  //   updateMyData(index, id, value)
  // }

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onBlur = React.useCallback(() => setIsEditable(false), []);

  const onDoubleClick = React.useCallback(() => {
    setIsEditable(!editable)
  }, [editable])

  return <input onDoubleClick={onDoubleClick} value={value} className={`form-control${editable ? '' : '-plaintext'}`} onChange={onChange} onBlur={onBlur} />
}

const defaultColumn = {
  Cell: EditableCell,
  width: 'auto'
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
    previousPage,
    selectedFlatRows
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
          ),
          width: '30',
          maxWidth: '40'
        },
        ...columns,
      ])
    }
  )

  return (
    <div className='container-fluid '>
      <div className="row">
        <div className="col-md-11 pt-4">
          <FilterForm />
        </div>
        <div className="col-md-1" >
          <button hidden={!selectedFlatRows.length} type='submit' className='btn btn-success' data-bs-toggle="modal" data-bs-target="#updateModal">
            Update
          </button>
        </div >
      </div>
      <div className='container-fluid'>
        <table {...getTableProps()} className="table table-hover table-responsive">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th style={{ maxWidth: column.maxWidth }} className='text-success' {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <TiArrowSortedUp />
                          : <TiArrowSortedDown />
                        : ''}
                    </span>
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
      <UpdateModal rows={selectedFlatRows} />
    </div>
  )
}

export function TableBase() {
  const { columns } = useTableColumns();

  const memoizedData = React.useMemo(() => data, [])

  return (
    <Table columns={columns} data={memoizedData} />
  )
}