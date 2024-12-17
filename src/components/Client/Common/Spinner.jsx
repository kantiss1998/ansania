import React from 'react'

const LoadingSpinner = ({ size = 'medium', color = 'primary' }) => {
  // Define spinner sizes
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  }

  // Define spinner colors
  const colorClasses = {
    primary: 'border-blue-500 border-t-blue-200',
    secondary: 'border-gray-500 border-t-gray-200',
    success: 'border-green-500 border-t-green-200',
    danger: 'border-red-500 border-t-red-200'
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div 
        className={`
          ${sizeClasses[size] || sizeClasses.medium} 
          ${colorClasses[color] || colorClasses.primary}
          border-4 
          border-solid 
          rounded-full 
          animate-spin
        `}
      />
    </div>
  )
}

export default LoadingSpinner