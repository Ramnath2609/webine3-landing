import { useMemo } from "react";
import { EditableCell } from "./Table";

export function useTableColumns() {
  const columns = useMemo(
    () => [
      {
        Header: 'Client & Order No.',
        accessor: (d) => d.clientAndOrderNo,
        Cell: ({ value }) => (
          <div className="d-flex flex-column">
            <div>
              <strong>
                <EditableCell value={value.client} />
              </strong>
            </div>
            <div className="text-secondary">
              <EditableCell value={value.no} />
            </div>
          </div>
        ),
        maxWidth: 120
      },
      {
        Header: 'Promised Delivery Date',
        accessor: (d) => d.deliveryDate,
        Cell: ({ value }) => (
          <div className="d-flex flex-column">
            <div>
              <EditableCell value={value.date} />
            </div>
            <div className="text-secondary">
              <EditableCell value={value.time} />
            </div>
          </div>
        ),
        maxWidth: 120
      },
      {
        Header: 'Container Id',
        id: 'containerId',
        accessor: (d) => d.containerId,
        Cell: ({ value }) => <EditableCell value={value} />,
        maxWidth: 100
      },
      {
        Header: 'Item & Item No ',
        id: 'itemAndItemNo',
        accessor: (d) => d.itemAndItemNo,
        Cell: ({ value }) => (
          <div className="d-flex flex-column">
            <div className="text-secondary">
              <EditableCell value={value.item} />
            </div>
            <div className="text-secondary"><EditableCell value={value.no} /></div>
          </div>
        ),
        maxWidth: 120
      },
      {
        Header: 'Purchase Id',
        accessor: 'purchaseId',
        Cell: ({ value }) => <span className="text-secondary"><EditableCell value={value} /></span>,
        maxWidth: 100
      },
      {
        Header: 'PO Date & Line',
        accessor: (d) => d.poDateAndLine,
        Cell: ({ value }) => (
          <div className="d-flex flex-column">
            <div className="text-secondary">
              <EditableCell value={value.date} />
            </div>
            <div className="text-secondary"><EditableCell value={value.line} /></div>
          </div>
        ),
        maxWidth: 100
      },
      {
        Header: 'PO Purchase & Company',
        accessor: (d) => d.poPurchaseAndCompany,
        Cell: ({ value }) => (
          <div className="d-flex flex-column">
            <div>
              <strong>
                <EditableCell value={value.purchase} />
              </strong>
            </div>
            <div className="text-secondary"><EditableCell value={value.company} /></div>
          </div>
        ),
        maxWidth: 120
      }
    ],
    []
  )
  return { columns };
}

export const data = [
  {
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
    clientAndOrderNo: {
      client: 'Dell Computers',
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
    clientAndOrderNo: {
      client: 'Apple Computers',
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
      purchase: 'Apple Tech',
      company: 'Apple Computers'
    }
  },
  {
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