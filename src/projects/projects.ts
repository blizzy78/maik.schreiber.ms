import * as BookmarksImage from './bookmarks.png'
import * as VarNameLenImage from './varnamelen.png'
import * as TwoDeeParticlesImage from './twodeeparticles.png'
import * as ConditionalHTTPImage from './conditional-http.png'
import * as DevContainerImage from './dev-container.png'
import * as KSPToolbarImage from './ksp-toolbar.png'
import * as LighthouseImage from './lighthouse.png'
import * as EbitenUIImage from './ebitenui.png'

export interface Project {
  url: string
  image?: typeof import('*.png')
  title: string
  description: string
  technologies?: string[]
  startYear: number
  endYear?: number
}

export const Projects: Project[] = [
  {
    url: 'https://github.com/blizzy78/varnamelen',
    image: VarNameLenImage,
    title: 'varnamelen',
    description: 'A Go linter/Analyzer checking that the length of a variable\'s name matches its usage scope. This linter is also part of the popular golangci-lint package.',
    technologies: ['Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/bookmarks',
    image: BookmarksImage,
    title: 'Bookmarks',
    description: 'My personal bookmarks management application. It\'s rather simplistic, but fast, searchable, and has tags.',
    technologies: ['Go', 'React', 'Algolia', 'Tailwind CSS'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/dev-container',
    image: DevContainerImage,
    title: 'Dev Container',
    description: 'An all-in-one dev container for Visual Studio Code. I use it for all my software development.',
    technologies: ['Docker', 'Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/conditional-http',
    image: ConditionalHTTPImage,
    title: 'Conditional HTTP Middleware',
    description: 'Provides middleware for conditional HTTP requests supporting the ETag, Last-Modified, If-Modified-Since, and If-None-Match headers.',
    technologies: ['Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/twodeeparticles',
    image: TwoDeeParticlesImage,
    title: 'twodeeparticles',
    description: 'An engine-agnostic 2D particle system simulator for Go.',
    technologies: ['Go', 'Ebiten'],
    startYear: 2020
  },

  {
    url: 'https://ebitenui.github.io',
    image: EbitenUIImage,
    title: 'Ebiten UI',
    description: 'An extension to Ebiten that provides an engine to render a complete user interface, with widgets such as buttons, lists, combo boxes, and so on.',
    technologies: ['Go', 'Ebiten'],
    startYear: 2020,
    endYear: 2022
  },

  {
    url: 'https://github.com/blizzy78/copper',
    title: 'Copper',
    description: 'A template rendering engine written in Go. It is agnostic of any HTTP router or any other framework and can also be used standalone.',
    technologies: ['Go'],
    startYear: 2019,
    endYear: 2021
  },

  {
    url: 'https://forum.kerbalspaceprogram.com/index.php?/topic/161857-19x-toolbar-continued-common-api-for-draggableresizable-buttons-toolbar/',
    image: KSPToolbarImage,
    title: 'KSP Toolbar',
    description: 'A popular add-on for Kerbal Space Program that provides a unified toolbar for other add-ons.',
    technologies: ['C#', 'Unity 3D'],
    startYear: 2013,
    endYear: 2016
  },

  {
    url: 'https://blendswap.com/blend/13091',
    image: LighthouseImage,
    title: 'Lighthouse 3D Model',
    description: 'A 3D model of a well-known lighthouse in northern Germany.',
    technologies: ['Blender'],
    startYear: 2014,
    endYear: 2014
  },
]
