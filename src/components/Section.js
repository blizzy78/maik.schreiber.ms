import React from 'react'
import classnames from 'classnames'

export default function Section({className, children}) {
  return (
    <section className={classnames('container 2xl:max-w-screen-xl mx-auto', className)}>
      {children}
    </section>
  )
}
