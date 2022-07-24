import { useMemo } from "react";
import { EditableCell } from "../EditableCell";

export function useTableColumns(editedRows) {
  const columns = useMemo(
    () => [
      {
        Header: 'Client & Order No.',
        accessor: (d) => d.clientAndOrderNo,
        Cell: ({ value, row }) => (
          <div className="d-flex flex-column">
            <div>
              <strong>
                <EditableCell value={value.client} row={row} name={'clientAndOrderNo.client'} editedRows={editedRows} />
              </strong>
            </div>
            <div className="text-secondary">
              <EditableCell value={value.no} row={row} name={'clientAndOrderNo.no'} editedRows={editedRows} />
            </div>
          </div>
        ),
        width: 100,
        maxWidth: 120,
        sortType: (a, b) => a.original.clientAndOrderNo.client > b.original.clientAndOrderNo.client ? 1 : -1
      },
      {
        Header: 'Promised Delivery Date',
        accessor: (d) => d.deliveryDate,
        Cell: ({ value, row }) => (
          <div className="d-flex flex-column">
            <div>
              <EditableCell value={value.date} row={row} name={'deliveryDate.date'} editedRows={editedRows} />
            </div>
            <div className="text-secondary">
              <EditableCell value={value.time} row={row} name={'deliveryDate.time'} editedRows={editedRows} />
            </div>
          </div>
        ),
        width: 100,
        maxWidth: 120
      },
      {
        Header: 'Container Id',
        id: 'containerId',
        accessor: (d) => d.containerId,
        Cell: ({ value, row }) => <EditableCell value={value} row={row} name={'containerId'} editedRows={editedRows} />,
        width: 100,
        maxWidth: 100
      },
      {
        Header: 'Item & Item No ',
        id: 'itemAndItemNo',
        accessor: (d) => d.itemAndItemNo,
        Cell: ({ value, row }) => (
          <div className="d-flex flex-column">
            <div className="text-secondary">
              <EditableCell value={value.item} row={row} name={'itemAndItemNo.item'} editedRows={editedRows} />
            </div>
            <div className="text-secondary"><EditableCell value={value.no} row={row} name={'itemAndItemNo.no'} editedRows={editedRows} /></div>
          </div>
        ),
        width: 100,
        maxWidth: 120,
        sortType: (a, b) => a.original.itemAndItemNo.item > b.original.itemAndItemNo.item ? 1 : -1
      },
      {
        Header: 'Purchase Id',
        accessor: 'purchaseId',
        Cell: ({ value, row }) => <span className="text-secondary"><EditableCell value={value} row={row} name={'purchaseId'} editedRows={editedRows} /></span>,
        width: 100,
        maxWidth: 100
      },
      {
        Header: 'PO Date & Line',
        accessor: (d) => d.poDateAndLine,
        Cell: ({ value, row }) => (
          <div className="d-flex flex-column">
            <div className="text-secondary">
              <EditableCell value={value.date} row={row} name={'poDateAndLine.date'} />
            </div>
            <div className="text-secondary"><EditableCell value={value.line} row={row} name={'poDateAndLine.line'} editedRows={editedRows} /></div>
          </div>
        ),
        width: 100,
        maxWidth: 100
      },
      {
        Header: 'PO Purchase & Company',
        accessor: (d) => d.poPurchaseAndCompany,
        Cell: ({ value, row }) => (
          <div className="d-flex flex-column">
            <div>
              <strong>
                <EditableCell value={value.purchase} row={row} name={'poPurchaseAndCompany.purchase'} />
              </strong>
            </div>
            <div className="text-secondary">
              <EditableCell value={value.company} row={row} name={'poPurchaseAndCompany.company'} editedRows={editedRows} />
            </div>
          </div>
        ),
        width: 100,
        maxWidth: 120,
        sortType: (a, b) => a.original.poPurchaseAndCompany.purchase > b.original.poPurchaseAndCompany.purchase ? 1 : -1

      }
    ],
    [editedRows]
  )
  return { columns };
}

export const data = [
  {
    id: '1',
    clientAndOrderNo: {
      client: 'HCL Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'BX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '5534123DAFSDF'
    },
    purchaseId: '88345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  },
  {
    id: '2',
    clientAndOrderNo: {
      client: 'Dell Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'XX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '1234123DAFSDF'
    },
    purchaseId: '128345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  },
  {
    id: '3',
    clientAndOrderNo: {
      client: 'Apple Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'SX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '1234123DAFSDF'
    },
    purchaseId: '528345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'Apple Tech',
      company: 'Apple Computers'
    }
  },
  {
    id: '4',
    clientAndOrderNo: {
      client: 'Usha Armour',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'DX2341234',
    itemAndItemNo: {
      item: 'Safety Equipments',
      no: '1234123DAFS123'
    },
    purchaseId: '928345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  },
  {
    id: '5',
    clientAndOrderNo: {
      client: 'Bata Footwear',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'DX2341234',
    itemAndItemNo: {
      item: 'Shoes',
      no: '1234123DAFSDF'
    },
    purchaseId: '928345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'Bata Shoes',
      company: 'Bata Footwear'
    }
  },
  {
    id: '6',
    clientAndOrderNo: {
      client: 'HCL Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'DX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '1234123DAFSDF'
    },
    purchaseId: '928345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  },
  {
    id: '7',
    clientAndOrderNo: {
      client: 'HCL Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'DX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '1234123DAFSDF'
    },
    purchaseId: '928345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  },
  {
    id: '8',
    clientAndOrderNo: {
      client: 'HCL Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'DX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '1234123DAFSDF'
    },
    purchaseId: '928345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  },
  {
    id: '9',
    clientAndOrderNo: {
      client: 'HCL Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'DX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '1234123DAFSDF'
    },
    purchaseId: '928345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  },
  {
    id: '10',
    clientAndOrderNo: {
      client: 'HCL Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'DX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '1234123DAFSDF'
    },
    purchaseId: '928345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  },
  {
    id: '11',
    clientAndOrderNo: {
      client: 'HCL Computers',
      no: 'CDX - 40561'
    },
    deliveryDate: {
      date: '22 Aug 2022',
      time: '14:00 - 16:00'
    },
    containerId: 'DX2341234',
    itemAndItemNo: {
      item: 'Computer Parts',
      no: '1234123DAFSDF'
    },
    purchaseId: '928345024',
    poDateAndLine: {
      date: '14 July 2022',
      line: 'DAFDAFDSF'
    },
    poPurchaseAndCompany: {
      purchase: 'HCL Tech',
      company: 'HCL Computers'
    }
  }
]