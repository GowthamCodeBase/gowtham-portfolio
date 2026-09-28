import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: 'inline' | 'button' | 'nav'
  newWindow?: boolean
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const variantStyle = {
  inline: "font-mono font-semibold hover:text-base-700 underline underline-offset-4 cursor-pointer transition-colors",
  button: "inline-block font-grunge px-6 py-2 border-2 border-base-900 hover:bg-base-900 hover:text-base-100 text-2xl uppercase tracking-wider text-center cursor-pointer transition-all duration-200 active:scale-95",
  nav: "font-grunge hover:text-base-700 text-2xl uppercase underline underline-offset-4 decoration-2 tracking-wider cursor-pointer transition-colors"
}

export default function Link({
  href,
  variant = 'inline',
  newWindow = false,
  className = '',
  children,
  onClick,
  ...rest
}: LinkProps) {
  const baseStyle = "text-base-900"

  return (
    <a
      href={href}
      className={`${baseStyle} ${variantStyle[variant]} ${className}`}
      target={newWindow ? '_blank' : undefined}
      rel={newWindow ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      {...rest}
    >
      {children}
    </a>
  )
}
