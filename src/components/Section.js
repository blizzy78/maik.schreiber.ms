import React from 'react'
import classnames from 'classnames'

export default function Section({className, children}) {
  return (
    <section className={classnames('mx-auto', className)}>
      {children}
    </section>
  )
}
