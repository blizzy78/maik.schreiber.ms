import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

const StaticImage = ({className, path, altText}) => {
  let data = useStaticQuery(graphql`{
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
  let node = data.images.edges.find(({node}) => node.relativePath === path).node
  let image = getImage(node)
  return <GatsbyImage image={image} alt={altText} className={className}/>
}

export default StaticImage
