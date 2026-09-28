import { useState } from 'react'
import Text from './Text'

interface DropdownProps {
  title: string
  text: string
  defaultOpen?: boolean
}

export default function Dropdown({ title, text, defaultOpen = false }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="flex flex-col gap-2 border-b border-base-700/30 pb-4 last:border-b-0 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left cursor-pointer group py-1"
        aria-expanded={isOpen}
      >
        <Text variant="xl" className="text-base-900 group-hover:text-base-700 transition-colors">
          {title}
        </Text>
        <svg
          className={`shrink-0 transition-transform duration-300 w-6 h-6 text-base-900 ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 8 8"
          fill="currentColor"
        >
          <path d="M1.5 1L0 2.5l4 4l4-4L6.5 1L4 3.5L1.5 1z" />
        </svg>
      </button>
      {isOpen && (
        <div className="pt-2 animate-fadeIn">
          <Text variant="sm" className="text-base-800 leading-relaxed">
            {text}
          </Text>
        </div>
      )}
    </div>
  )
}
