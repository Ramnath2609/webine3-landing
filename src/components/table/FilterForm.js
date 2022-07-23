import { useState, useCallback } from 'react'
import { FaSearch } from 'react-icons/fa'

export function FilterForm() {
  const [keyword, setKeyword] = useState('');
  const [po, setPo] = useState('');
  const [lot, setLot] = useState('');
  const [item, setItem] = useState('');

  const onKeywordChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const onPoChange = useCallback((e) => {
    setPo(e.target.value);
  }, [])

  const onLotChange = useCallback((e) => {
    setLot(e.target.value);
  }, [])

  const onItemChange = useCallback((e) => {
    setItem(e.target.value);
  }, [])

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(keyword, po, lot, item);
  }, [item, keyword, lot, po]);

  return (
    <form className="row g-3 pb-4" onSubmit={onSubmit} >
      <div className="col-md-3" >
        <input type="text" placeholder="Keyword Search" value={keyword} className="form-control" id="keyword" onChange={onKeywordChange} />
      </div >
      <div className="col-md-3" >
        <input type="text" placeholder="PO No." value={po} className="form-control" id="po" onChange={onPoChange} />
      </div >
      <div className="col-md-3" >
        <input type="text" className="form-control" value={lot} id="lot" placeholder="Lot No." onChange={onLotChange} />
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