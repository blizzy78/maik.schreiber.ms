import React from 'react'

export default function BreakpointReadout() {
  return (
    process.env.NODE_ENV === 'development' && (
      <div className="fixed left-2 top-2 rounded border border-bzyellow bg-bzlight px-3 py-1 opacity-80 isolate">
        <div className="inline mr-1">Breakpoint:</div>
        <div className="inline sm:hidden">xs</div>
        <div className="hidden sm:inline md:hidden">sm</div>
        <div className="hidden md:inline lg:hidden">md</div>
        <div className="hidden lg:inline xl:hidden">lg</div>
        <div className="hidden xl:inline 2xl:hidden">xl</div>
        <div className="hidden 2xl:inline">2xl</div>
      </div>
    )
  )
}
