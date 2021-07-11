import React from 'react'
import classnames from 'classnames'

const Row = ({className, gapClassName, children}) => (
  <div className={classnames('grid', gapClassName || 'gap-4' , className)}>
    {children}
  </div>
)

const Col = ({children}) => (
  <div className="col grid grid-cols-1">
    {children}
  </div>
)

export {Row, Col}
