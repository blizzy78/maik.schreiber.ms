import React from 'react'

const BreakpointReadout = () => {
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed left-2 top-2 bg-bzlight border border-bzyellow px-2 py-1 opacity-50 rounded z-50">
      <div className="inline mr-1">Breakpoint:</div>
      <div className="inline sm:hidden">xs</div>
      <div className="hidden sm:inline md:hidden">sm</div>
      <div className="hidden md:inline lg:hidden">md</div>
      <div className="hidden lg:inline xl:hidden">lg</div>
      <div className="hidden xl:inline 2xl:hidden">xl</div>
      <div className="hidden 2xl:inline">2xl</div>
    </div>
  )
}

export default BreakpointReadout
