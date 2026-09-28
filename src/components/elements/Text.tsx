import React from 'react'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  className?: string
}

const variantStyle = {
  xsm: "text-xs font-mono tracking-tight",
  sm: "text-base font-mono leading-relaxed",
  md: "text-xl font-mono font-semibold uppercase text-base-700 tracking-wide",
  lg: "text-[2rem] font-grunge leading-tight tracking-wide",
  xl: "text-[2.5rem] font-grunge leading-tight tracking-wide"
}

export default function Text({
  variant = 'sm',
  className = '',
  children,
  ...rest
}: TextProps) {
  return (
    <p className={`${variantStyle[variant]} ${className}`} {...rest}>
      {children}
    </p>
  )
}
