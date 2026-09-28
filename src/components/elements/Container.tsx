import React from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'full' | 'xl' | 'lg' | 'md'
  children: React.ReactNode
  className?: string
}

const variantStyle = {
  full: "",
  xl: "xl:max-w-[85%] lg:max-w-[90%] lg:gap-32 gap-20",
  lg: "md:max-w-2/3 lg:gap-32 gap-20",
  md: "lg:max-w-1/2 lg:gap-32 gap-20"
}

export default function Container({
  variant = 'full',
  className = '',
  children,
  ...rest
}: ContainerProps) {
  const baseStyle = "w-full m-auto flex flex-col"

  return (
    <section className={`${baseStyle} ${variantStyle[variant]} ${className}`} {...rest}>
      {children}
    </section>
  )
}
