import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './Card.css'

const Card = ({children}) => (
  <div className="flex flex-col gap-4 break-words border-bzyellow border-l-stripe">
    {children}
  </div>
)

const CardImage = ({image, altText}) => (
  <GatsbyImage image={getImage(image)} alt={altText} className="w-full"/>
)

const CardBody = ({children}) => (
  <div className="card-body flex-grow flex flex-col gap-3 px-4">
    {children}
  </div>
)

const CardTitle = ({children}) => (
  <h3 className="my-0">
    {children}
  </h3>
)

const CardFooter = ({children}) => (
  <div className="card-footer px-4 py-2 bg-bzlight">
    {children}
  </div>
)

export {Card, CardImage, CardBody, CardTitle, CardFooter}
