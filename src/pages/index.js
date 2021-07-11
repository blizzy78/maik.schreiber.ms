import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import { Row } from '../components/Grid'
import Page from '../components/Page'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import StaticImage from '../components/StaticImage'
import classnames from 'classnames'

const Home = ({data}) => {
  const projectsData = useStaticQuery(graphql`{
    projects: allProjectsYaml(sort: {fields: order, order: ASC}) {
      edges {
        node {
          url
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          text
          technologies
          ongoing
          years
        }
      }
    }
  }`)

  return (
    <Page>
      <Section className="max-w-screen-md">
        <h1 className="my-0 content text-center text-bzbrown">Hi, I'm Maik</h1>

        <div className="mt-14 flex flex-col md:flex-row gap-10">
          <div className="md:pt-2">
            <StaticImage path="maik.jpg" altText="Photo of Maik" className="border-l-stripe border-bzyellow w-full md:w-44 md:h-44"/>
          </div>

          <div>
            <p className="mt-0">
              Born in 1978, I've started developing software in 1994. In 2003, I started working
              for <OutboundLink href="https://subshell.com" className="text-bzred">subshell GmbH</OutboundLink> in
              Hamburg, Germany, where I am working on our flagship product, Sophora CMS, as well as various other
              bigger and smaller projects. I am still working for subshell to this day.
            </p>

            <p>
              I have worked with many different technologies and programming languages over the years,
              most notably Java, Go, C#, and C. As projects come and go, I use frontend/backend frameworks,
              databases, and other technologies as appropriate. I'm always trying to stay on top of what's fresh.
            </p>

            <p className="mb-0">
              In my spare time I work on a variety of different projects which you can see below. Most of them
              are open source.
            </p>
          </div>
        </div>
      </Section>

      <ProjectsSection className="mt-20" title="Ongoing Projects" projects={projectsData.projects.edges.map(({node}) => node)} ongoing={true}/>

      <ProjectsSection className="mt-20" title="Past Projects" projects={projectsData.projects.edges.map(({node}) => node)} ongoing={false}/>

      <Section className="mt-20 container text-center">
        <h1 className="my-0 content text-bzbrown">Contact Me</h1>

        <p className="mt-14">
          I'll be happy to get in contact with you! You can message me at:
        </p>

        <p className="mb-0">
          <OutboundLink href="mailto:maik@schreiber.ms" className="text-bzred">maik@schreiber.ms</OutboundLink>
        </p>
      </Section>
    </Page>
  )
}

const ProjectsSection = ({className, title, projects, ongoing}) => (
  <Section className={classnames('max-w-screen-lg', className)}>
    <h1 className="my-0 content text-center text-bzbrown">{title}</h1>

    <Row className="mt-14 grid-cols-1 lg:grid-cols-2" gapClassName="gap-14">
      {
        projects
          .filter(node => node.ongoing === ongoing)
          .map((node, index) => (
            <ProjectCard project={node}/>
          ))
      }
    </Row>
  </Section>
)

export default Home
