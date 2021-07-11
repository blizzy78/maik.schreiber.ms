import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'
import Section from './Section'
import BreakpointReadout from './BreakpointReadout'
import '@fontsource/arvo'
import './Page.css'

export default function Page({children}) {
  return <>
    <Helmet>
      <link rel="preload" href="/static/arvo-latin-400-normal-eee79ea9c90aeaf1efe6bbabf290a6af.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
      <title>Maik Schreiber</title>
      <Meta/>
      <body className="px-5 pt-8 pb-20"/>
    </Helmet>

    <Header/>
    {children}

    <BreakpointReadout/>
  </>
}

const Meta = () => {
  const data = useStaticQuery(graphql`{
    images: allFile(
      filter: {sourceInstanceName: {eq: "images"}, relativePath: {eq: "social.png"}}
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }`)

  const socialImageNode = data.images.edges[0].node

  return <>
    <meta property="og:url" content="https://maik.schreiber.ms"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Maik Schreiber, Senior Software Engineer, subshell GmbH"/>
    <meta property="og:description" content="Having worked in the industry for over 20 years, Maik has in-depth experience with various programming languages and frameworks."/>
    <meta property="og:image" content={'https://maik.schreiber.ms' + socialImageNode.publicURL}/>
    <meta property="og:image:alt" content="Maik Schreiber, Senior Software Engineer, subshell GmbH"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Maik Schreiber, Senior Software Engineer, subshell GmbH"/>
    <meta name="twitter:description" content="Having worked in the industry for over 20 years, Maik has in-depth experience with various programming languages and frameworks."/>
    <meta name="twitter:image" content={'https://maik.schreiber.ms' + socialImageNode.publicURL}/>
    <meta name="twitter:image:alt" content="Maik Schreiber, Senior Software Engineer, subshell GmbH"/>
  </>
}

const Header = () => (
  <Section>
    <h1 className="head my-0 text-right">Maik Schreiber</h1>

    <div className="mt-3">
      <div className="bg-bzred h-stripe-lg"/>
      <div className="bg-bzorange h-stripe-lg"/>
      <div className="bg-bzyellow h-stripe-lg"/>
    </div>
  </Section>
)
