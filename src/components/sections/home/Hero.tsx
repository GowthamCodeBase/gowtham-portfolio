import Container from '../../elements/Container'
import Text from '../../elements/Text'
import Heading from '../../elements/Heading'
import ImageContainer from '../../elements/ImageContainer'
import Link from '../../elements/Link'
import gowthamPhoto from '../../../assets/images/gowtham.jpg'
import { candidateInfo } from '../../../data/portfolioData'

interface HeroProps {
  onContactClick: () => void
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <Container variant="xl" className="flex flex-col gap-8 min-h-[90vh] justify-center pt-8">
      {/* Intro Subtext */}
      <Text
        variant="xl"
        className="text-base-900 lg:max-w-[45%] md:max-w-[60%] w-full leading-tight font-grunge tracking-wide text-2xl md:text-3xl"
      >
        {candidateInfo.shortBio}
      </Text>

      {/* Main Hero Row */}
      <div className="flex md:flex-row flex-col gap-10 items-start justify-between">
        {/* Name and Button Column */}
        <div className="md:flex-2 flex flex-col items-start gap-6">
          <Link
            variant="button"
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              onContactClick()
            }}
          >
            Available for work
          </Link>

          <Heading tagName="h1" tagSize="h1" className="break-words">
            {candidateInfo.name}
          </Heading>

          <div className="flex flex-col gap-1 border-l-2 border-base-700 pl-4 mt-2">
            <span className="font-mono text-sm uppercase text-base-700 tracking-wider">
              {candidateInfo.title}
            </span>
            <span className="font-mono text-xs text-base-600">
              {candidateInfo.location}
            </span>
          </div>
        </div>

        {/* Gowtham's Photo Frame */}
        <div className="h-full md:h-[480px] w-full max-w-[420px] flex-1">
          <ImageContainer src={gowthamPhoto} alt={candidateInfo.name} />
        </div>
      </div>
    </Container>
  )
}
