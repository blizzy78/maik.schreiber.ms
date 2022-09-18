import * as Bookmarks400Image from './bookmarks-400.png'
import * as BookmarksImage from './bookmarks.png'
import * as ConditionalHTTP400Image from './conditional-http-400.png'
import * as ConditionalHTTPImage from './conditional-http.png'
import * as Consistent400Image from './consistent-400.png'
import * as ConsistentImage from './consistent.png'
import * as DevContainer400Image from './dev-container-400.png'
import * as DevContainerImage from './dev-container.png'
import * as EbitenUI400Image from './ebitenui-400.png'
import * as EbitenUIImage from './ebitenui.png'
import * as KSPToolbar400Image from './ksp-toolbar-400.png'
import * as KSPToolbarImage from './ksp-toolbar.png'
import * as Lighthouse400Image from './lighthouse-400.png'
import * as LighthouseImage from './lighthouse.png'
import * as Luminoso400Image from './luminoso-400.png'
import * as LuminosoImage from './luminoso.png'
import * as Smooth2DCamera400Image from './smooth-2d-camera-400.png'
import * as Smooth2DCameraImage from './smooth-2d-camera.png'
import * as TwoDeeParticles400Image from './twodeeparticles-400.png'
import * as TwoDeeParticlesImage from './twodeeparticles.png'
import * as VarNameLen400Image from './varnamelen-400.png'
import * as VarNameLenImage from './varnamelen.png'

export interface Project {
  url: string
  images?: Images
  title: string
  description: string
  technologies?: string[]
  startYear: number
  endYear?: number
}

export interface Images {
  lg: typeof import('*.png')
  md: typeof import('*.png')
}

export const Projects: Project[] = [
  {
    url: 'https://github.com/blizzy78/consistent',
    images: {
      lg: ConsistentImage,
      md: Consistent400Image,
    },
    title: 'consistent',
    description: 'A Go linter/Analyzer that checks that common language constructs are used consistently.',
    technologies: ['Go'],
    startYear: 2022
  },

  {
    url: 'https://github.com/blizzy78/varnamelen',
    images: {
      lg: VarNameLenImage,
      md: VarNameLen400Image,
    },
    title: 'varnamelen',
    description: 'A Go linter/Analyzer checking that the length of a variable\'s name matches its usage scope. This linter is also part of the popular golangci-lint application.',
    technologies: ['Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/bookmarks',
    images: {
      lg: BookmarksImage,
      md: Bookmarks400Image,
    },
    title: 'Bookmarks',
    description: 'My personal bookmarks management application. It\'s rather simplistic, but fast, searchable, and has tags.',
    technologies: ['Go', 'React', 'TypeScript', 'Algolia', 'Mantine', 'Tailwind CSS'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/dev-container',
    images: {
      lg: DevContainerImage,
      md: DevContainer400Image,
    },
    title: 'Dev Container',
    description: 'An all-in-one dev container for Visual Studio Code. I use it for all my software development.',
    technologies: ['Docker', 'Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/conditional-http',
    images: {
      lg: ConditionalHTTPImage,
      md: ConditionalHTTP400Image,
    },
    title: 'Conditional HTTP Middleware',
    description: 'Provides middleware for conditional HTTP requests supporting the ETag, Last-Modified, If-Modified-Since, and If-None-Match headers.',
    technologies: ['Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/textsimilarity',
    title: 'textsimilarity',
    description: 'A Go package to analyze files for copied and pasted (and possibly slightly modified) text.',
    technologies: ['Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/twodeeparticles',
    images: {
      lg: TwoDeeParticlesImage,
      md: TwoDeeParticles400Image,
    },
    title: 'twodeeparticles',
    description: 'An engine-agnostic 2D particle system simulator for Go.',
    technologies: ['Go', 'Ebiten'],
    startYear: 2020
  },

  {
    url: 'https://ebitenui.github.io',
    images: {
      lg: EbitenUIImage,
      md: EbitenUI400Image,
    },
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
    images: {
      lg: KSPToolbarImage,
      md: KSPToolbar400Image,
    },
    title: 'KSP Toolbar',
    description: 'A popular add-on for Kerbal Space Program that provides a unified toolbar for other add-ons.',
    technologies: ['C#', 'Unity 3D'],
    startYear: 2013,
    endYear: 2016
  },

  {
    url: 'https://assetstore.unity.com/packages/tools/camera/smooth-2d-camera-40914',
    images: {
      lg: Smooth2DCameraImage,
      md: Smooth2DCamera400Image,
    },
    title: 'Smooth 2D Camera',
    description: 'Improves the rendering of the 2D camera in Unity 3D to display crisp and clear images, and avoid a pixelated or blurry look.',
    technologies: ['C#', 'Unity 3D'],
    startYear: 2015,
    endYear: 2015
  },

  {
    url: 'https://store.steampowered.com/app/364660/Luminoso/',
    images: {
      lg: LuminosoImage,
      md: Luminoso400Image,
    },
    title: 'Luminoso',
    description: 'A puzzle game with laser beams.',
    technologies: ['C#', 'Unity 3D', 'Blender'],
    startYear: 2015,
    endYear: 2015
  },

  {
    url: 'https://blendswap.com/blend/13091',
    images: {
      lg: LighthouseImage,
      md: Lighthouse400Image,
    },
    title: 'Lighthouse 3D Model',
    description: 'A 3D model of a well-known lighthouse in northern Germany.',
    technologies: ['Blender'],
    startYear: 2014,
    endYear: 2014
  },

  {
    url: 'http://aminet.net/package/comm/mail/MailDemon4_11',
    title: 'MailDemon',
    description: 'A powerful mailing list manager for Amiga-based bulletin board systems.',
    technologies: ['C', 'Magic User Interface'],
    startYear: 1995,
    endYear: 1996
  }
]
