import Container from '../../elements/Container'
import Heading from '../../elements/Heading'
import Dropdown from '../../elements/Dropdown'
import ContainerBottom from '../../elements/ContainerBottom'
import { services } from '../../../data/portfolioData'

export default function Services() {
  return (
    <Container variant="md" className="flex flex-col gap-12">
      <Heading tagName="h2" tagSize="h2" className="text-center">
        Services
      </Heading>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-5 p-6 sm:p-8 border-2 sm:border-3 border-base-900 bg-base-100/40 backdrop-blur-sm shadow-2xl">
          {services.map((service, index) => (
            <Dropdown
              key={service.title}
              title={`${index + 1}. ${service.title}`}
              text={service.text}
              defaultOpen={index === 0}
            />
          ))}
        </div>
        <ContainerBottom />
      </div>
    </Container>
  )
}
