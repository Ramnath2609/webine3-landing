export function Tabs() {
  return (
    <ul className="nav d-flex align-items-center ps-4 mt-4">
      <li className="nav-item pe-4 pb-2">
        <div className="text-secondary">
          <strong>Purchase Order</strong>
        </div>
      </li>
      <li className="nav-item ps-4 pe-4 pb-2 border-bottom border-3 border-success">
        <div className="text-success">
          <strong>Shipment</strong>
        </div>
      </li>
      <li className="nav-item pe-4 ps-4 pb-2">
        <button type="button" className="btn btn-light text-secondary">Merge Shipments</button>
      </li>
      <li className="nav-item pb-2">
        <button className="btn btn-light text-secondary">
          <strong>Create New Shipment</strong>
        </button>
      </li>
    </ul>
  )
}