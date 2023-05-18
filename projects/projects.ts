import BookmarksImage from './images/bookmarks.png'
import ConditionalHTTPImage from './images/conditional-http.png'
import ConsistentImage from './images/consistent.png'
import DevContainerImage from './images/dev-container.png'
import EbitenUIImage from './images/ebitenui.png'
import KesslerSyndromeImage from './images/kessler-syndrome.png'
import KSPToolbarImage from './images/ksp-toolbar.png'
import LighthouseImage from './images/lighthouse.png'
import LuminosoImage from './images/luminoso.png'
import ReactOutlineImage from './images/react-outline.png'
import Smooth2DCameraImage from './images/smooth-2d-camera.png'
import TwoDeeParticlesImage from './images/twodeeparticles.png'
import VarNameLenImage from './images/varnamelen.png'

export type Project = {
  url: string
  image?: string
  title: string
  description: string
  technologies: readonly string[]
  startYear: number
  endYear?: number
}

const projects: readonly Project[] = [
  {
    url: 'https://github.com/blizzy78/react-outline',
    image: ReactOutlineImage.src,
    title: 'react-outline',
    description: 'A React component that shows a live document outline.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    startYear: 2023,
  },

  {
    url: 'https://github.com/blizzy78/consistent',
    image: ConsistentImage.src,
    title: 'consistent',
    description: 'A Go linter/Analyzer checking that common language constructs are used consistently.',
    technologies: ['Go'],
    startYear: 2022,
  },

  {
    url: 'https://github.com/blizzy78/varnamelen',
    image: VarNameLenImage.src,
    title: 'varnamelen',
    description:
      "A Go linter/Analyzer checking that the length of a variable's name matches its usage scope. This linter is also part of the popular golangci-lint application.",
    technologies: ['Go'],
    startYear: 2021,
  },

  {
    url: 'https://github.com/blizzy78/bookmarks',
    image: BookmarksImage.src,
    title: 'Bookmarks',
    description:
      "My personal bookmarks management application. It's rather simplistic, but fast, searchable, and has tags.",
    technologies: ['Go', 'React', 'TypeScript', 'Algolia', 'Mantine', 'Tailwind CSS'],
    startYear: 2021,
  },

  {
    url: 'https://github.com/blizzy78/dev-container',
    image: DevContainerImage.src,
    title: 'Dev Container',
    description: 'An all-in-one dev container for Visual Studio Code. I use it for all my software development.',
    technologies: ['Docker', 'Go'],
    startYear: 2021,
  },

  {
    url: 'https://github.com/blizzy78/conditional-http',
    image: ConditionalHTTPImage.src,
    title: 'Conditional HTTP Middleware',
    description:
      'Provides middleware for conditional HTTP requests supporting the ETag, Last-Modified, If-Modified-Since, and If-None-Match headers.',
    technologies: ['Go'],
    startYear: 2021,
  },

  {
    url: 'https://github.com/blizzy78/textsimilarity',
    title: 'textsimilarity',
    description: 'A Go package to analyze files for copied and pasted (and possibly slightly modified) text.',
    technologies: ['Go'],
    startYear: 2021,
  },

  {
    url: 'https://github.com/blizzy78/twodeeparticles',
    image: TwoDeeParticlesImage.src,
    title: 'twodeeparticles',
    description: 'An engine-agnostic 2D particle system simulator for Go.',
    technologies: ['Go', 'Ebiten'],
    startYear: 2020,
  },

  {
    url: 'https://ebitenui.github.io',
    image: EbitenUIImage.src,
    title: 'Ebiten UI',
    description:
      'An extension to Ebiten that provides an engine to render a complete user interface, with widgets such as buttons, lists, combo boxes, and so on.',
    technologies: ['Go', 'Ebiten'],
    startYear: 2020,
    endYear: 2022,
  },

  {
    url: 'https://github.com/blizzy78/copper',
    title: 'Copper',
    description:
      'A template rendering engine written in Go. It is agnostic of any HTTP router or any other framework and can also be used standalone.',
    technologies: ['Go'],
    startYear: 2019,
    endYear: 2021,
  },

  {
    url: 'https://forum.kerbalspaceprogram.com/index.php?/topic/161857-19x-toolbar-continued-common-api-for-draggableresizable-buttons-toolbar/',
    image: KSPToolbarImage.src,
    title: 'KSP Toolbar',
    description: 'A popular add-on for Kerbal Space Program that provides a unified toolbar for other add-ons.',
    technologies: ['C#', 'Unity 3D'],
    startYear: 2013,
    endYear: 2016,
  },

  {
    url: 'https://assetstore.unity.com/packages/tools/camera/smooth-2d-camera-40914',
    image: Smooth2DCameraImage.src,
    title: 'Smooth 2D Camera',
    description:
      'Improves the rendering of the 2D camera in Unity 3D to display crisp and clear images, and avoid a pixelated or blurry look.',
    technologies: ['C#', 'Unity 3D'],
    startYear: 2015,
    endYear: 2015,
  },

  {
    url: 'https://play.google.com/store/apps/details?id=de.blizzy.kesslersyndrome',
    image: KesslerSyndromeImage.src,
    title: 'Kessler Syndrome',
    description: 'A game of skill where you launch satellites into orbit.',
    technologies: ['C#', 'Unity 3D'],
    startYear: 2015,
    endYear: 2015,
  },

  {
    url: 'https://store.steampowered.com/app/364660/Luminoso/',
    image: LuminosoImage.src,
    title: 'Luminoso',
    description: 'A puzzle game with laser beams.',
    technologies: ['C#', 'Unity 3D', 'Blender'],
    startYear: 2015,
    endYear: 2015,
  },

  {
    url: 'https://blendswap.com/blend/13091',
    image: LighthouseImage.src,
    title: 'Lighthouse 3D Model',
    description: 'A 3D model of a well-known lighthouse in northern Germany.',
    technologies: ['Blender'],
    startYear: 2014,
    endYear: 2014,
  },

  {
    url: 'http://aminet.net/package/comm/mail/MailDemon4_11',
    title: 'MailDemon',
    description: 'A powerful mailing list manager for Amiga-based bulletin board systems.',
    technologies: ['C', 'Magic User Interface'],
    startYear: 1995,
    endYear: 1996,
  },
]

export default projects
