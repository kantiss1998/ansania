import React from 'react'

const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`
      w-full 
      max-w-7xl 
      mx-auto 
      px-4
      lg:px-6
      pt-24
      pb-8 
      ${className}
    `}>
      {children}
    </div>
  )
}

export default PageLayout