import Heading from '../../elements/Heading'
import Text from '../../elements/Text'
import Container from '../../elements/Container'
import Link from '../../elements/Link'
import ImageContainer from '../../elements/ImageContainer'
import gowthamPhoto2 from '../../../assets/images/gowtham2.jpg'
import { candidateInfo } from '../../../data/portfolioData'

interface AboutSectionProps {
  onMoreAboutClick: () => void
}

export default function AboutSection({ onMoreAboutClick }: AboutSectionProps) {
  return (
    <Container variant="xl" className="flex flex-col gap-12">
      <Heading tagName="h2" tagSize="h2" className="text-center">
        About
      </Heading>

      <div className="flex lg:flex-row lg:gap-16 gap-10 flex-col items-center">
        {/* Story Text */}
        <div className="flex flex-col items-start gap-6 lg:pt-6 text-base-900 lg:flex-1">
          <Text variant="xl" className="text-2xl sm:text-3xl font-grunge tracking-wide">
            {candidateInfo.shortBio}
          </Text>
          <Text variant="sm" className="text-base-800 leading-relaxed font-mono">
            {candidateInfo.aboutStory}
          </Text>
          <Text variant="sm" className="text-base-700 leading-relaxed font-mono">
            {candidateInfo.extendedStory}
          </Text>
          <div className="pt-2">
            <Link
              variant="button"
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                onMoreAboutClick()
              }}
            >
              More about me
            </Link>
          </div>
        </div>

        {/* Gowtham Photo 2 with Barcode & Frame */}
        <div className="w-full lg:h-[480px] max-w-[420px] h-auto lg:flex-1">
          <ImageContainer src={gowthamPhoto2} alt={candidateInfo.name} />
        </div>
      </div>
    </Container>
  )
}
