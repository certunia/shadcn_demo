import { createLazyFileRoute } from '@tanstack/react-router'
import ContentWrapper from '../components/content-wrapper'

export const Route = createLazyFileRoute('/about')({
  component: Index,
})

function Index() {
  return (
    <ContentWrapper title="Data table!!!">
      <div>asdf</div>
    </ContentWrapper>
  )
}