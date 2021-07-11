import React from 'react'
import classnames from 'classnames'

export function Row({className, gapClassName, children}) {
  return (
    <div className={classnames('grid', className, gapClassName || 'gap-4')}>
      {children}
    </div>
  )
}

export function Col({children}) {
  return (
    <div className="col grid grid-cols-1">
      {children}
    </div>
  )
}
