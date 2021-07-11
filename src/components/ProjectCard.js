import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Card, CardImage, CardBody, CardTitle, CardFooter } from '../components/Card'

export default function ProjectCard({project}) {
  return (
    <Card>
      {
        project.image && <Image project={project}/>
      }
      <Body project={project}/>
      <Footer project={project}/>
    </Card>
  )
}

const Image = ({project}) => (
  project.url ? (
    <OutboundLink href={project.url}>
      <CardImage image={project.image} altText={project.title}/>
    </OutboundLink>
  ) : (
    <CardImage image={project.image} altText={project.title}/>
  )
)

const Body = ({project}) => (
  <CardBody>
    <Title project={project}/>
    <Text project={project}/>
  </CardBody>
)

const Title = ({project}) => {
  let title = project.title
  if (!project.ongoing && project.years) {
    title += ' (' + project.years + ')'
  }

  return (
    <CardTitle>
      {
        project.url ? (
          <OutboundLink href={project.url} className="text-bzred">
            {title}
          </OutboundLink>
        ) : <>
          {title}
        </>
      }
    </CardTitle>
  )
}

const Text = ({project}) => (
  project.url ? (
    <OutboundLink href={project.url} className="text-current font-normal">
      <p>
        {project.text}
      </p>
    </OutboundLink>
  ) : <>
    <p>
      {project.text}
    </p>
  </>
)

const Footer = ({project}) => (
  project.technologies &&
  <CardFooter>
    <small>
      <div className="inline text-bzred">
        {
          project.technologies.length > 1 ? 'Technologies:' : 'Technology:'
        }
      </div>
      <div className="inline ml-1">
        {project.technologies.reduce((a, t) => a + ', ' + t)}
      </div>
    </small>
  </CardFooter>
)
