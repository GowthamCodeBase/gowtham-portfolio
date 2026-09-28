import barCode from '../../assets/ui/barcode.svg'

interface ImageContainerProps {
  src: string
  alt: string
  className?: string
}

export default function ImageContainer({ src, alt, className = '' }: ImageContainerProps) {
  return (
    <div className={`flex flex-col items-end gap-2 w-full h-full ${className}`}>
      <img src={barCode} alt="Bar Code" className="h-6 object-contain" />
      <div className="p-4 border-2 border-base-900 w-full h-full bg-base-100/50">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover grayscale contrast-125 filter hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </div>
  )
}
