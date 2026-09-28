import { useState } from 'react'
import Container from '../../elements/Container'
import Heading from '../../elements/Heading'
import Work, { type WorkItem } from '../../elements/Work'
import Text from '../../elements/Text'
import { portfolioWorks } from '../../../data/portfolioData'

interface WorksPageProps {
  onSelectWork?: (work: WorkItem) => void
}

export default function WorksPage({ onSelectWork }: WorksPageProps) {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const categories = ['All', 'Full Stack AI', 'Web & Mobile', 'AI / Multi-Agent', 'DevOps & Cloud']

  const filteredWorks =
    selectedFilter === 'All'
      ? portfolioWorks
      : portfolioWorks.filter((w) => w.category === selectedFilter)

  return (
    <div className="flex flex-col gap-16 pt-8">
      {/* Works Page Heading */}
      <Heading tagName="h1" tagSize="h1" className="text-center">
        Works
      </Heading>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`font-mono text-xs uppercase px-4 py-2 border transition-all cursor-pointer ${
              selectedFilter === cat
                ? 'bg-base-900 text-base-100 border-base-900 font-bold'
                : 'bg-transparent text-base-700 border-base-700/50 hover:border-base-900 hover:text-base-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <Container variant="lg" className="items-center justify-center text-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 w-full justify-items-center justify-center items-center">
          {filteredWorks.map((work) => (
            <Work key={work.slug} work={work} onSelect={onSelectWork} />
          ))}
        </div>

        {filteredWorks.length === 0 && (
          <div className="text-center py-12">
            <Text variant="md" className="text-base-600">
              No works found under this category.
            </Text>
          </div>
        )}
      </Container>
    </div>
  )
}
