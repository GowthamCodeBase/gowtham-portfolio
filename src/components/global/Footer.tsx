import Container from '../elements/Container'
import Heading from '../elements/Heading'
import Text from '../elements/Text'
import Link from '../elements/Link'
import { candidateInfo } from '../../data/portfolioData'

interface FooterProps {
  setActiveView: (view: string) => void
}

export default function Footer({ setActiveView }: FooterProps) {
  const socials = [
    { title: "LinkedIn", href: candidateInfo.linkedin },
    { title: "GitHub", href: candidateInfo.github },
    { title: "Email", href: `mailto:${candidateInfo.email}` },
    { title: "Phone", href: `tel:${candidateInfo.phone}` }
  ]

  const navigation = [
    { title: "Home", id: "home" },
    { title: "Works", id: "works" },
    { title: "About", id: "about" },
    { title: "Contact", id: "contact" }
  ]

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    setActiveView(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container variant="xl" className="mt-32 pb-12 border-t border-base-800/20 pt-12">
      <div className="flex flex-col gap-10 md:flex-row justify-between mb-12">
        {/* Socials */}
        <div className="flex-1 md:text-left text-center">
          <Heading tagName="h3" tagSize="h4" className="text-base-900 mb-5">
            Socials
          </Heading>
          <ul className="flex flex-col gap-2">
            {socials.map((social) => (
              <li key={social.title}>
                <Link variant="nav" href={social.href} newWindow>
                  {social.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="flex-1 md:text-right text-center">
          <Heading tagName="h3" tagSize="h4" className="text-base-900 mb-5">
            Navigation
          </Heading>
          <ul className="flex flex-col gap-2">
            {navigation.map((navLink) => (
              <li key={navLink.id}>
                <button
                  onClick={(e) => handleNavClick(navLink.id, e)}
                  className="font-grunge hover:text-base-700 text-2xl uppercase underline underline-offset-4 decoration-2 tracking-wide text-base-900 cursor-pointer"
                >
                  {navLink.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Credits & Copyright */}
      <div className="flex flex-col text-center gap-2 pt-6 border-t border-base-900/10">
        <Text variant="sm" className="text-base-900">
          {candidateInfo.name} © 2026 All Rights Reserved
        </Text>
        <Text variant="xsm" className="text-base-700">
          Crafted with React 19, TypeScript & Tailwind CSS &bull; Based on Grunge Portfolio Aesthetics
        </Text>
      </div>
    </Container>
  )
}
