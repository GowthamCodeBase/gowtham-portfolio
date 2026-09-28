import Container from '../../elements/Container'
import Heading from '../../elements/Heading'
import Text from '../../elements/Text'
import ImageContainer from '../../elements/ImageContainer'
import ResumeDropdown from '../../elements/ResumeDropdown'
import ContainerBottom from '../../elements/ContainerBottom'
import gowthamPhoto from '../../../assets/images/gowtham.jpg'
import { candidateInfo, experienceData, educationData } from '../../../data/portfolioData'

export default function AboutPage() {
  return (
    <div className="flex flex-col xl:gap-40 lg:gap-32 gap-24 pt-8">
      {/* 1. Intro Section */}
      <Container variant="xl" className="flex flex-col gap-12">
        <Heading tagName="h1" tagSize="h1" className="text-center">
          Meet Gowtham
        </Heading>
        <div className="flex md:flex-row flex-col gap-16 md:items-center">
          <div className="flex-1 flex flex-col gap-7">
            <Text variant="xl" className="text-base-900 text-2xl md:text-3xl font-grunge tracking-wide">
              {candidateInfo.shortBio}
            </Text>
            <Text variant="sm" className="text-base-800 leading-relaxed font-mono">
              {candidateInfo.aboutStory}
            </Text>
            <Text variant="sm" className="text-base-700 leading-relaxed font-mono">
              {candidateInfo.extendedStory}
            </Text>
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'React 19',
                'TypeScript',
                'Next.js',
                'Tailwind CSS',
                'Express.js',
                'MySQL',
                'Docker',
                'Gemini AI'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-base-900 text-base-100 font-mono text-xs uppercase tracking-wider font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 md:h-[480px] w-full max-w-[420px] mx-auto">
            <ImageContainer src={gowthamPhoto} alt={candidateInfo.name} />
          </div>
        </div>
      </Container>

      {/* 2. Experience Section */}
      <Container variant="md" className="flex flex-col gap-10">
        <Heading tagName="h2" tagSize="h2" className="text-center">
          Experience
        </Heading>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 p-6 sm:p-8 border-2 sm:border-3 border-base-900 bg-base-100/40 backdrop-blur-sm shadow-2xl">
            {experienceData.map((item, idx) => (
              <ResumeDropdown
                key={item.title}
                title={item.title}
                place={item.place}
                period={item.period}
                text={item.text}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
          <ContainerBottom />
        </div>
      </Container>

      {/* 3. Education & Credentials Section */}
      <Container variant="md" className="flex flex-col gap-10">
        <Heading tagName="h2" tagSize="h2" className="text-center">
          Education
        </Heading>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6 p-6 sm:p-8 border-2 sm:border-3 border-base-900 bg-base-100/40 backdrop-blur-sm shadow-2xl">
            {educationData.map((item, idx) => (
              <ResumeDropdown
                key={item.title}
                title={item.title}
                place={item.place}
                period={item.period}
                text={item.text}
                defaultOpen={idx === 0}
              />
            ))}
          </div>
          <ContainerBottom />
        </div>
      </Container>
    </div>
  )
}
