import { useState, useCallback } from 'react'
import { FaSearch } from 'react-icons/fa'
import { matchSorter } from 'match-sorter';
import { useTableContext } from '../contexts/TableContext';
import { keywordFilterKeys } from '../utils/constants';

export function FilterForm() {
  const { data, resetData, setFilteredData, setIsFilterApplied } = useTableContext();
  const [keyword, setKeyword] = useState('');
  const [po, setPo] = useState('');
  const [containerId, setContainerId] = useState('');
  const [item, setItem] = useState('');

  const onKeywordChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const onPoChange = useCallback((e) => {
    setPo(e.target.value);
  }, [])

  const onContainerIdChange = useCallback((e) => {
    setContainerId(e.target.value);
  }, [])

  const onItemChange = useCallback((e) => {
    setItem(e.target.value);
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (keyword.length || containerId.length || po.length || item.length) {
      const values = new Set();
      if (keyword.length) {
        matchSorter(data, keyword, {
          keys: keywordFilterKeys
        }).forEach((item) => values.add(item))
      }
      if (containerId.length) {
        matchSorter(data, containerId, {
          keys: ['containerId']
        }).forEach((item) => values.add(item))

      }
      if (po.length) {
        matchSorter(data, po, {
          keys: ['poDateAndLine.line']
        }).forEach((item) => values.add(item))
      }
      if (item.length) {
        matchSorter(data, item, {
          keys: ['itemAndItemNo.no']
        }).forEach((item) => values.add(item))
      }
      setFilteredData([...values]);
      setIsFilterApplied(true);
      console.log('wihtin if', [...values]);
    } else {
      resetData();
      setIsFilterApplied(false);
    }
  }, [containerId, data, item, keyword, po, resetData, setFilteredData, setIsFilterApplied]);

  return (
    <form className="row g-3 pb-4" onSubmit={onSubmit} >
      <div className="col-md-3" >
        <input type="text" placeholder="Keyword Search" value={keyword} className="form-control" id="keyword" onChange={onKeywordChange} />
      </div >
      <div className="col-md-3" >
        <input type="text" placeholder="PO No." value={po} className="form-control" id="po" onChange={onPoChange} />
      </div >
      <div className="col-md-3" >
        <input type="text" className="form-control" value={containerId} id="containerId" placeholder="Container No." onChange={onContainerIdChange} />
      </div >
      <div className="col-md-2" >
        <input type="text" className="form-control" value={item} id="item" placeholder="Item No." onChange={onItemChange} />
      </div >
      <div className="col-md-1" >
        <button type='submit' className='btn btn-success'>
          <FaSearch />
        </button>
      </div >
    </form >
  )
}