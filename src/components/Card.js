import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './Card.css'

export function Card({children}) {
  return (
    <div className="flex flex-col gap-4 break-words border-bzyellow border-l-stripe">
      {children}
    </div>
  )
}

export function CardImage({image, altText}) {
  return (
    <GatsbyImage image={getImage(image)} alt={altText} className="w-full"/>
  )
}

export function CardBody({children}) {
  return (
    <div className="card-body flex-grow flex flex-col gap-3 px-4">
      {children}
    </div>
  )
}

export function CardTitle({children}) {
  return (
    <h3 className="my-0">
      {children}
    </h3>
  )
}

export function CardFooter({children}) {
  return (
    <div className="card-footer px-4 py-2 bg-bzlight">
      {children}
    </div>
  )
}
