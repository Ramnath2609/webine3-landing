import { MainLayout } from "../layouts/Main"
import { TableBase } from "../components/table/Table"
import { Tabs } from "../components/Tabs"
import { TableContextProvider } from "../contexts/TableContext"

export function Home() {
  return (
    <TableContextProvider>
      <MainLayout>
        <Tabs />
        <TableBase />
      </MainLayout>
    </TableContextProvider>
  )
}