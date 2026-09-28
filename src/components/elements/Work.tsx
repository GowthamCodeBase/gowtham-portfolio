import symbol from '../../assets/ui/symbol.svg'
import vinylTexture from '../../assets/work-card/vinyltexture.jpg'
import vinylDisk from '../../assets/work-card/vinyldisk.png'
import Text from './Text'
import Heading from './Heading'

export interface WorkItem {
  slug: string
  title: string
  client: string
  category: string
  featuredImage: string
  description?: string
  techStack?: string[]
  liveUrl?: string
  githubUrl?: string
}

interface WorkProps {
  work: WorkItem
  onSelect?: (work: WorkItem) => void
}

export default function Work({ work, onSelect }: WorkProps) {
  const { title, client, category, featuredImage, liveUrl, githubUrl } = work

  const handleClick = (e: React.MouseEvent) => {
    if (onSelect) {
      e.preventDefault()
      onSelect(work)
    }
  }

  return (
    <div className="group m-auto flex flex-col items-center justify-center text-center cursor-pointer" onClick={handleClick}>
      <div className="relative xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[380px] md:h-[380px] sm:w-[280px] sm:h-[280px] w-[240px] h-[240px] overflow-visible mb-5 select-none mx-auto">
        {/* Category Badge */}
        <div className="absolute top-2 left-2 z-40 bg-base-900 border-2 border-base-100 px-3 py-1 flex items-center gap-2 shadow-lg">
          <Text variant="lg" className="text-base-100 uppercase tracking-wider text-xl">
            {category}
          </Text>
          <img src={symbol} alt="UI Symbol" className="w-5 h-5 object-contain invert" />
        </div>

        {/* Vinyl Texture Overlay */}
        <div
          style={{ backgroundImage: `url(${vinylTexture})` }}
          className="absolute inset-0 bg-cover opacity-40 z-30 pointer-events-none mix-blend-overlay"
        />

        {/* Project Thumbnail Image */}
        <img
          src={featuredImage}
          alt={title}
          className="relative w-full h-full object-cover z-20 border border-base-700/50 shadow-2xl filter grayscale-30 group-hover:grayscale-0 transition-all duration-500"
        />

        {/* Vinyl Disk that spins and slides out on group hover */}
        <div
          style={{ backgroundImage: `url(${vinylDisk})` }}
          className="absolute top-0 -right-10 sm:-right-12 bg-cover bg-center z-0 xl:w-[350px] xl:h-[350px] lg:w-[300px] lg:h-[300px] md:w-[380px] md:h-[380px] sm:w-[280px] sm:h-[280px] w-[240px] h-[240px] transition-all duration-500 ease-out group-hover:-right-20 sm:group-hover:-right-28 animate-[spin_6s_linear_infinite]"
        />
      </div>

      {/* Info Header */}
      <Heading
        tagName="h3"
        tagSize="h4"
        className="text-center group-hover:underline decoration-2 underline-offset-4 text-base-900 transition-all"
      >
        {title}
      </Heading>
      <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-center">
        <Text variant="md" className="text-base-700">
          {client}
        </Text>
        <div className="flex items-center gap-3 text-xs font-mono text-base-800">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-white underline"
            >
              Demo ↗
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-white underline"
            >
              Code ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
