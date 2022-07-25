import { IoMdHelpBuoy } from 'react-icons/io'

export function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center border-success m-2 border-bottom">
      <div className="d-flex align-items-center m-2">
        <div className='h3 m-0 p-2 fw-bold' style={{ color: '#30336b' }}>Webine3</div>
        <button className="btn btn-light">Supplier</button>
      </div>
      <div className='d-flex align-items-center'>
        <IoMdHelpBuoy size={30} />
        <div className='m-2'>Help</div>
      </div>
    </div>
  );
}