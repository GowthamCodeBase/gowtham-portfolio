import Container from '../../elements/Container'
import ContainerBottom from '../../elements/ContainerBottom'
import Heading from '../../elements/Heading'
import Dropdown from '../../elements/Dropdown'
import { faqs } from '../../../data/portfolioData'

export default function Faq() {
  return (
    <Container variant="md" className="flex flex-col gap-12">
      <Heading tagName="h2" tagSize="h2" className="text-center">
        FAQ
      </Heading>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-5 p-6 sm:p-8 border-2 sm:border-3 border-base-900 bg-base-100/40 backdrop-blur-sm shadow-2xl">
          {faqs.map((q, index) => (
            <Dropdown
              key={q.title}
              title={`${index + 1}. ${q.title}`}
              text={q.text}
              defaultOpen={index === 0}
            />
          ))}
        </div>
        <ContainerBottom />
      </div>
    </Container>
  )
}
