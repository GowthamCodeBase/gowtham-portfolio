import { useState } from 'react'

interface NavigationProps {
  activeView: string
  setActiveView: (view: string) => void
}

export default function Navigation({ activeView, setActiveView }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { title: "Home", id: "home" },
    { title: "Works", id: "works" },
    { title: "About", id: "about" },
    { title: "Contact", id: "contact" }
  ]

  const handleNavClick = (id: string) => {
    setActiveView(id)
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="flex justify-end py-8 fixed top-0 right-6 left-0 z-50 pointer-events-auto px-6 md:px-12 backdrop-blur-[2px]">
      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 items-center bg-base-100/60 px-6 py-2 border border-base-700/40 shadow-xl">
        {navLinks.map((link, index) => {
          const isActive = activeView === link.id
          return (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link.id)}
                className={`font-grunge text-2xl uppercase tracking-wider cursor-pointer transition-all underline-offset-4 decoration-2 ${
                  isActive
                    ? 'text-white underline decoration-white font-bold'
                    : 'text-base-800 hover:text-base-600 hover:underline'
                }`}
              >
                {index + 1}. {link.title}
              </button>
            </li>
          )
        })}
      </ul>

      {/* Mobile Nav Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open Navigation"
          className="p-2 bg-base-100/80 border border-base-700 text-white rounded cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="m9.5 16.5l7-4.5l-7-4.5v9ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
            />
          </svg>
        </button>

        {/* Mobile Fullscreen Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-[#121212]/95 z-50 flex flex-col items-center justify-center p-6 animate-fadeIn">
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close Navigation"
              className="absolute top-6 right-6 text-white p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M9 16h2V8H9v8Zm4 0h2V8h-2v8Zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
                />
              </svg>
            </button>
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="font-grunge text-4xl uppercase text-white hover:text-base-600 underline underline-offset-8"
                  >
                    {index + 1}. {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
