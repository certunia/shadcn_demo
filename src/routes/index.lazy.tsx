import { createLazyFileRoute } from '@tanstack/react-router'
import ContentWrapper from '../components/content-wrapper'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <ContentWrapper title="Home">
      Here is some demo project i've built using React, Typescript, and TailwindCSS.
      Check out the other page with a data table. 
    </ContentWrapper>
  )
}