import React from 'react'

const headingOptions = {
  h1: 'lg:text-[13.5rem] md:text-[8rem] text-[5.5rem] leading-[0.85]',
  h2: 'lg:text-[8rem] md:text-[5rem] text-[4rem] leading-[0.85]',
  h3: 'lg:text-[5rem] md:text-[3rem] text-[2.5rem] leading-[0.9]',
  h4: 'lg:text-[3rem] md:text-[2.5rem] text-[2rem] leading-[0.95]',
  h5: 'lg:text-[2rem] md:text-[1.5rem] text-[1.25rem] leading-[1]',
  h6: 'lg:text-[1.5rem] md:text-[1.25rem] text-[1rem] leading-[1]'
}

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  tagName?: keyof typeof headingOptions
  tagSize?: keyof typeof headingOptions
  children: React.ReactNode
  className?: string
}

export default function Heading({
  tagName = 'h2',
  tagSize = 'h2',
  className = '',
  children,
  ...rest
}: HeadingProps) {
  const Tag = tagName as React.ElementType
  const baseStyle = "font-grunge uppercase text-base-900 tracking-tight select-none"

  return (
    <Tag className={`${baseStyle} ${headingOptions[tagSize]} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
