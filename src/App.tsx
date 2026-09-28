import { useState, useEffect } from 'react'
import Navigation from './components/global/Navigation'
import Footer from './components/global/Footer'
import Hero from './components/sections/home/Hero'
import SelectedWorks from './components/sections/home/SelectedWorks'
import Services from './components/sections/home/Services'
import AboutSection from './components/sections/home/AboutSection'
import Faq from './components/sections/home/Faq'
import AboutPage from './components/sections/about/AboutPage'
import WorksPage from './components/sections/works/WorksPage'
import ContactPage from './components/sections/contact/ContactPage'
import WorkModal from './components/elements/WorkModal'
import type { WorkItem } from './components/elements/Work'
import bgImage from './assets/images/bg.jpg'

export default function App() {
  const [activeView, setActiveView] = useState('home')
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null)

  // Sync hash routing if user loads #about, #works, #contact
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (['home', 'works', 'about', 'contact'].includes(hash)) {
        setActiveView(hash)
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleViewChange = (view: string) => {
    setActiveView(view)
    window.location.hash = view === 'home' ? '' : view
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover bg-center bg-no-repeat bg-fixed min-h-screen text-[#f7f7f7] relative overflow-x-hidden selection:bg-base-900 selection:text-base-100"
    >
      {/* Background noise effect */}
      <div className="fixed inset-0 pointer-events-none z-10 grunge-noise opacity-30" />

      {/* Main Wrapper matching Grunge template layout */}
      <div className="relative z-20 px-4 sm:px-8 md:pt-28 pt-24 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-between">
        {/* Navigation Bar */}
        <Navigation activeView={activeView} setActiveView={handleViewChange} />

        {/* Dynamic Route/View Display */}
        <main className="flex flex-col xl:gap-48 lg:gap-40 gap-28 flex-grow">
          {activeView === 'home' && (
            <>
              <Hero onContactClick={() => handleViewChange('contact')} />
              <SelectedWorks
                onViewAllWorks={() => handleViewChange('works')}
                onSelectWork={setSelectedWork}
              />
              <Services />
              <AboutSection onMoreAboutClick={() => handleViewChange('about')} />
              <Faq />
            </>
          )}

          {activeView === 'works' && (
            <WorksPage onSelectWork={setSelectedWork} />
          )}

          {activeView === 'about' && (
            <AboutPage />
          )}

          {activeView === 'contact' && (
            <ContactPage />
          )}
        </main>

        {/* Global Footer */}
        <Footer setActiveView={handleViewChange} />
      </div>

      {/* Project Detail Modal */}
      <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </div>
  )
}
