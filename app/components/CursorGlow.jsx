'use client'
import React, { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const blob = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!blob.current) return
      blob.current.animate(
        {
          left: `${e.clientX - 50}px`,
          top: `${e.clientY - 50}px`,
        },
        {
          duration: 600,
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
      className="pointer-events-none fixed top-0 left-0 w-[100px] h-[100px] bg-[var(--color-accent)]/20 rounded-full blur-2xl opacity-20 z-0"
    />
  )
}

export default CursorGlow
