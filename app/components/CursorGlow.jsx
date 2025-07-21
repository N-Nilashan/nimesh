'use client'
import React, { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const blob = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blob.current) return
      blob.current.animate(
        {
          left: `${e.clientX - 100}px`,
          top: `${e.clientY - 100}px`,
        },
        {
          duration: 800,
          fill: 'forwards',
          easing: 'ease-out',
        }
      )
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={blob}
      className="pointer-events-none fixed top-0 left-0 w-[200px] h-[200px] bg-[#ffffff80] rounded-full blur-3xl opacity-30 z-0"
    />
  )
}

export default CursorGlow
