import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function StaticImage({className, path, altText}) {
  const data = useStaticQuery(graphql`{
    images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }`)

  const node = data.images.edges.find(({node}) => node.relativePath === path).node
  const image = getImage(node)

  return (
    <GatsbyImage image={image} alt={altText} className={className}/>
  )
}
