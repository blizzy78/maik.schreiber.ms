import React from 'react'
import {OutboundLink} from 'gatsby-plugin-google-gtag'
import {Card, CardImage, CardBody, CardTitle, CardFooter} from '../components/Card'

const ProjectCard = ({project}) => {
  let title = project.title
  if (!project.ongoing && project.years) {
    title += ' (' + project.years + ')'
  }
  return (
    <Card>
      {
        project.image && (
          project.url ? (
            <OutboundLink href={project.url}>
              <CardImage image={project.image} altText={project.title}/>
            </OutboundLink>
          ) : (
            <CardImage image={project.image} altText={project.title}/>
          )
        )
      }

      <CardBody>
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

        {
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
        }
      </CardBody>
      {
        project.technologies &&
        <CardFooter>
          <small>
            <div className="inline-block text-bzred mr-1">
              {
                project.technologies.length > 1 ? 'Technologies:' : 'Technology:'
              }
            </div>
            <div className="inline-block">
              {project.technologies.reduce((a, t) => a + ', ' + t)}
            </div>
          </small>
        </CardFooter>
      }
    </Card>
  )
}

export default ProjectCard
