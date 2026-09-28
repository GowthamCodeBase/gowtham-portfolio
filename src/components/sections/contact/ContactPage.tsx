import { useState } from 'react'
import Container from '../../elements/Container'
import Heading from '../../elements/Heading'
import Text from '../../elements/Text'
import symbol from '../../../assets/ui/symbolWhite.svg'
import { candidateInfo } from '../../../data/portfolioData'

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const contactItems = [
    { title: "Email", value: candidateInfo.email, href: `mailto:${candidateInfo.email}` },
    { title: "Phone", value: candidateInfo.phone, href: `tel:${candidateInfo.phone}` },
    { title: "Location", value: candidateInfo.location, href: "#!" },
    { title: "LinkedIn", value: "gowthamdeveloper", href: candidateInfo.linkedin },
    { title: "GitHub", value: "GowthamCodeBase", href: candidateInfo.github }
  ]

  return (
    <div className="flex flex-col gap-16 pt-8">
      {/* Intro */}
      <Container variant="xl" className="text-center text-base-900 flex flex-col items-center gap-6">
        <Heading tagName="h1" tagSize="h1">
          Contact
        </Heading>
        <div className="max-w-3xl flex flex-col gap-4 text-center">
          <Text variant="xl" className="text-2xl sm:text-3xl font-grunge tracking-wide">
            Let's Create Something Amazing Together!
          </Text>
          <Text variant="sm" className="text-base-800 leading-relaxed font-mono">
            Ready to bring your vision to life? I'd love to hear about your team, high-impact opportunities, or discuss how we can engineer resilient frontend and full stack architectures that drive results.
          </Text>
          <Text variant="sm" className="text-base-600 font-mono text-xs">
            Currently accepting opportunities in Bengaluru, hybrid, and remote. Response time: within 24 hours.
          </Text>
        </div>
      </Container>

      {/* Contact Cards Grid */}
      <Container variant="md" className="flex flex-col gap-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 text-base-900 w-full">
          {contactItems.map((item) => (
            <div
              key={item.title}
              className="border-2 border-base-900 p-5 flex flex-col gap-4 w-full bg-base-100/40 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center">
                <Text variant="lg" className="text-2xl font-grunge tracking-wider">
                  {item.title}
                </Text>
                <img src={symbol} alt="UI Symbol" className="w-5 h-5 object-contain" />
              </div>
              <div className="h-px w-full bg-base-900/50" />
              <div>
                {item.href !== '#!' ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-base-800 hover:text-white underline break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm font-mono text-base-800">{item.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Message Form */}
        <div className="border-2 border-base-900 p-6 sm:p-8 bg-base-100/60 backdrop-blur-md shadow-2xl flex flex-col gap-6">
          <div className="flex justify-between items-center border-b border-base-900/40 pb-4">
            <Text variant="xl" className="text-2xl font-grunge tracking-wide">
              Send Direct Message
            </Text>
            <span className="font-mono text-xs text-base-600">ENCRYPTED &bull; ZERO SPAM</span>
          </div>

          {formSubmitted ? (
            <div className="p-6 border-2 border-base-900 bg-base-900 text-base-100 text-center font-mono">
              <p className="font-bold text-lg mb-2">Message Received!</p>
              <p className="text-sm opacity-90">
                Thank you for reaching out. Gowtham will get back to you at {formData.email || 'your email'} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-base-700 tracking-wider">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jane Doe"
                  className="p-3 bg-black/40 border border-base-700 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-base-700 tracking-wider">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. jane@company.com"
                  className="p-3 bg-black/40 border border-base-700 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-base-700 tracking-wider">
                  Project Details / Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="p-3 bg-black/40 border border-base-700 text-white font-mono text-sm focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 font-grunge text-2xl uppercase tracking-wider py-3 px-6 border-2 border-base-900 bg-transparent hover:bg-base-900 hover:text-base-100 transition-all cursor-pointer text-center"
              >
                Send Message ➔
              </button>
            </form>
          )}
        </div>
      </Container>
    </div>
  )
}
