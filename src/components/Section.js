import React from 'react'
import classnames from 'classnames'

const Section = ({className, children}) => (
  <section className={classnames('container 2xl:max-w-screen-xl mx-auto', className)}>
    {children}
  </section>
)

export default Section
