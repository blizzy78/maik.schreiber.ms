import React from 'react'
import classnames from 'classnames'

export default function Section({className, widthClassName, children}) {
  return (
    <section className={classnames('mx-auto', widthClassName || 'container 2xl:max-w-screen-xl', className)}>
      {children}
    </section>
  )
}
