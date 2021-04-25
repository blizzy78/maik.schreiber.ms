import React from 'react'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import './Card.css'

const Card = ({children}) => (
  <div className="relative flex flex-col min-w-0 break-words bg-white bg-clip-border border-bzyellow border-l-stripe">
    {children}
  </div>
)

const CardImage = ({image, altText}) => {
  return <GatsbyImage image={getImage(image)} alt={altText} className="mb-3 w-full"/>
}

const CardBody = ({children}) => (
  <div className="card-body flex-grow flex flex-col px-4">
    {children}
  </div>
)

const CardTitle = ({children}) => (
  <h3 className="card-title mt-0 mb-2 arvo">
    {children}
  </h3>
)

const CardFooter = ({children}) => (
  <div className="card-footer mt-4 px-4 py-2 bg-bzlight">
    {children}
  </div>
)

export {Card, CardImage, CardBody, CardTitle, CardFooter}
