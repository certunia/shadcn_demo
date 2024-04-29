import { createLazyFileRoute } from '@tanstack/react-router'
import ContentWrapper from '../components/content-wrapper'
import { Item, columns } from "../components/tables/columns"
import { DataTable } from "../components/tables/data-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const Route = createLazyFileRoute('/data-table')({
  component: Index,
})

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     // ...
//   ]
// }

function Index() {
  // const data = await getData()

  const data =  [{
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  }] as Item[]

  return (
    <ContentWrapper title="Data table!!!">
      <div className="container mx-auto py-10">
        Try to play with variants
        <Tabs defaultValue="outlined" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Outlined</TabsTrigger>
            <TabsTrigger value="filled">Filled</TabsTrigger>
            <TabsTrigger value="colorful">Colorful</TabsTrigger>
          </TabsList>
        </Tabs>
        <DataTable columns={columns} data={data} />
      </div>
    </ContentWrapper>
  )
}