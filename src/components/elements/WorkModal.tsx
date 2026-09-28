import type { WorkItem } from './Work'
import Heading from './Heading'
import Text from './Text'

interface WorkModalProps {
  work: WorkItem | null
  onClose: () => void
}

export default function WorkModal({ work, onClose }: WorkModalProps) {
  if (!work) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-base-100 border-2 border-base-900 p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-base-900 hover:text-white font-mono text-2xl font-bold cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-base-700">
            {work.category}
          </span>
          <Heading tagName="h2" tagSize="h3">
            {work.title}
          </Heading>
          <Text variant="md" className="text-base-600">
            {work.client}
          </Text>
        </div>

        <div className="w-full h-64 sm:h-80 border-2 border-base-900 overflow-hidden">
          <img
            src={work.featuredImage}
            alt={work.title}
            className="w-full h-full object-cover"
          />
        </div>

        {work.description && (
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-base-700">
              Overview
            </span>
            <Text variant="sm" className="text-base-800 leading-relaxed font-mono">
              {work.description}
            </Text>
          </div>
        )}

        {work.techStack && work.techStack.length > 0 && (
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-base-700">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {work.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-base-900 text-base-100 font-mono text-xs uppercase tracking-wider"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 pt-4 border-t border-base-900/30">
          {work.liveUrl && (
            <a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-grunge text-xl uppercase px-5 py-2 border-2 border-base-900 bg-base-900 text-base-100 hover:bg-transparent hover:text-base-900 transition-all text-center"
            >
              Launch Live Demo ↗
            </a>
          )}
          {work.githubUrl && (
            <a
              href={work.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-grunge text-xl uppercase px-5 py-2 border-2 border-base-900 bg-transparent text-base-900 hover:bg-base-900 hover:text-base-100 transition-all text-center"
            >
              View Source ↗
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto font-mono text-sm uppercase text-base-700 hover:text-base-900 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
