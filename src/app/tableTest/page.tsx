import { Report, LastReport, columnsReport, columnsLastReport } from "./columns"
import { DataTable } from "./data-table"

async function getReportData(): Promise<Report[]> {
  return [
    {
      hour: "08:00",
      code: "123",
      location: "En tienda",
      anotation: "Anotación 1",
      operator: "Operador 1",
    },
    {
      hour: "09:00",
      code: "456",
      location: "Fuera de Tienda",
      anotation: "Anotación 2",
      operator: "Operador 2",
    },
  ]
}

export default async function TableTestPage() {
  const reportData = await getReportData()

  return (
    <>
      <div className="container mx-auto py-10">
        <DataTable columns={columnsReport} data={reportData} />
      </div>
      <div className="container mx-auto py-10">
        <DataTable columns={columnsLastReport} data={reportData} />
      </div>
    </>
  )
}
