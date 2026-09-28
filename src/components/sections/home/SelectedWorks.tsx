import Container from '../../elements/Container'
import Heading from '../../elements/Heading'
import Work, { type WorkItem } from '../../elements/Work'
import Link from '../../elements/Link'
import { portfolioWorks } from '../../../data/portfolioData'

interface SelectedWorksProps {
  onViewAllWorks: () => void
  onSelectWork?: (work: WorkItem) => void
}

export default function SelectedWorks({ onViewAllWorks, onSelectWork }: SelectedWorksProps) {
  const featuredWorks = portfolioWorks.filter((w) => w.isFeatured)

  return (
    <Container variant="lg" className="items-center justify-center flex flex-col gap-16 text-center">
      <Heading tagName="h2" tagSize="h2" className="text-center">
        Featured Works
      </Heading>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 w-full justify-items-center justify-center items-center">
        {featuredWorks.map((work) => (
          <Work key={work.slug} work={work} onSelect={onSelectWork} />
        ))}
      </div>

      <div className="pt-8 flex justify-center w-full">
        <Link
          variant="button"
          href="#works"
          onClick={(e) => {
            e.preventDefault()
            onViewAllWorks()
          }}
        >
          All Works ({portfolioWorks.length})
        </Link>
      </div>
    </Container>
  )
}
