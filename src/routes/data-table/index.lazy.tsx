import { createLazyFileRoute } from '@tanstack/react-router'
import ContentWrapper from '../../components/content-wrapper'
import { Payment, columns } from "../../components/tables/columns"
import { DataTable } from "../../components/tables/data-table"

export const Route = createLazyFileRoute('/data-table/')({
  component: Index,
})

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

function Index() {
  // const data = await getData()

  const data =  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  }

  return (
    <ContentWrapper title="Data table!!!">
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </ContentWrapper>
  )
}