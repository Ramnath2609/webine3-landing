import React, { useCallback } from 'react'
import { useTable, useRowSelect, usePagination, useSortBy } from 'react-table'
import { useTableColumns } from './table-hooks'
import { IndeterminateCheckbox } from './Checkbox'
import { FilterForm } from '../FilterForm';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import './style.css';
import { useTableContext } from '../../contexts/TableContext';
import { UpdateModal } from '../UpdateModal';
import { EditableCell } from '../EditableCell';

const defaultColumn = {
  Cell: EditableCell,
  width: 'auto'
}


function Table({ columns, data, updateData }) {
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
      defaultColumn,
      autoResetSelectedRows: false,
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
      <div className="row align-items-center">
        <div className="col-md-11 pt-4">
          <FilterForm />
        </div>
        <div className="col-md-1" >
          <button hidden={!selectedFlatRows.length} type='submit' className='btn btn-success' data-bs-toggle="modal" data-bs-target="#updateModal">
            Update
          </button>
        </div >
      </div>
      <div className='container-fluid table-wrap '>
        <table {...getTableProps()} className="table table-hover table-responsive tableFixHead">
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
      </div>

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
      <UpdateModal rows={selectedFlatRows} />
    </div>
  )
}

export function TableBase() {
  const { data, filteredData, isFilterApplied } = useTableContext();
  const editedRows = []
  const { columns } = useTableColumns(editedRows);
  const memoizedData = React.useMemo(() => isFilterApplied ? filteredData : data, [data, filteredData, isFilterApplied]);

  const updateData = useCallback((props) => {
    console.log('within update data', props)
  }, []);


  return (
    <Table columns={columns} data={memoizedData} updateData={updateData} />
  )
}
