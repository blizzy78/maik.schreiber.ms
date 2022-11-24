import * as Bookmarks400AVIFImage from './img/bookmarks-400.avif'
import * as Bookmarks400PNGImage from './img/bookmarks-400.png'
import * as Bookmarks400WebPImage from './img/bookmarks-400.webp'
import * as BookmarksAVIFImage from './img/bookmarks.avif'
import * as BookmarksPNGImage from './img/bookmarks.png'
import * as BookmarksWebPImage from './img/bookmarks.webp'
import * as ConditionalHTTP400AVIFImage from './img/conditional-http-400.avif'
import * as ConditionalHTTP400PNGImage from './img/conditional-http-400.png'
import * as ConditionalHTTP400WebPImage from './img/conditional-http-400.webp'
import * as ConditionalHTTPAVIFImage from './img/conditional-http.avif'
import * as ConditionalHTTPPNGImage from './img/conditional-http.png'
import * as ConditionalHTTPWebPImage from './img/conditional-http.webp'
import * as Consistent400AVIFImage from './img/consistent-400.avif'
import * as Consistent400PNGImage from './img/consistent-400.png'
import * as Consistent400WebPImage from './img/consistent-400.webp'
import * as ConsistentAVIFImage from './img/consistent.avif'
import * as ConsistentPNGImage from './img/consistent.png'
import * as ConsistentWebPImage from './img/consistent.webp'
import * as DevContainer400AVIFImage from './img/dev-container-400.avif'
import * as DevContainer400PNGImage from './img/dev-container-400.png'
import * as DevContainer400WebPImage from './img/dev-container-400.webp'
import * as DevContainerAVIFImage from './img/dev-container.avif'
import * as DevContainerPNGImage from './img/dev-container.png'
import * as DevContainerWebPImage from './img/dev-container.webp'
import * as EbitenUI400AVIFImage from './img/ebitenui-400.avif'
import * as EbitenUI400PNGImage from './img/ebitenui-400.png'
import * as EbitenUI400WebPImage from './img/ebitenui-400.webp'
import * as EbitenUIAVIFImage from './img/ebitenui.avif'
import * as EbitenUIPNGImage from './img/ebitenui.png'
import * as EbitenUIWebPImage from './img/ebitenui.webp'
import * as KesslerSyndrome400AVIFImage from './img/kessler-syndrome-400.avif'
import * as KesslerSyndrome400PNGImage from './img/kessler-syndrome-400.png'
import * as KesslerSyndrome400WebPImage from './img/kessler-syndrome-400.webp'
import * as KesslerSyndromeAVIFImage from './img/kessler-syndrome.avif'
import * as KesslerSyndromePNGImage from './img/kessler-syndrome.png'
import * as KesslerSyndromeWebPImage from './img/kessler-syndrome.webp'
import * as KSPToolbar400AVIFImage from './img/ksp-toolbar-400.avif'
import * as KSPToolbar400PNGImage from './img/ksp-toolbar-400.png'
import * as KSPToolbar400WebPImage from './img/ksp-toolbar-400.webp'
import * as KSPToolbarAVIFImage from './img/ksp-toolbar.avif'
import * as KSPToolbarPNGImage from './img/ksp-toolbar.png'
import * as KSPToolbarWebPImage from './img/ksp-toolbar.webp'
import * as Lighthouse400AVIFImage from './img/lighthouse-400.avif'
import * as Lighthouse400PNGImage from './img/lighthouse-400.png'
import * as Lighthouse400WebPImage from './img/lighthouse-400.webp'
import * as LighthouseAVIFImage from './img/lighthouse.avif'
import * as LighthousePNGImage from './img/lighthouse.png'
import * as LighthouseWebPImage from './img/lighthouse.webp'
import * as Luminoso400AVIFImage from './img/luminoso-400.avif'
import * as Luminoso400PNGImage from './img/luminoso-400.png'
import * as Luminoso400WebPImage from './img/luminoso-400.webp'
import * as LuminosoAVIFImage from './img/luminoso.avif'
import * as LuminosoPNGImage from './img/luminoso.png'
import * as LuminosoWebPImage from './img/luminoso.webp'
import * as Smooth2DCamera400AVIFImage from './img/smooth-2d-camera-400.avif'
import * as Smooth2DCamera400PNGImage from './img/smooth-2d-camera-400.png'
import * as Smooth2DCamera400WebPImage from './img/smooth-2d-camera-400.webp'
import * as Smooth2DCameraAVIFImage from './img/smooth-2d-camera.avif'
import * as Smooth2DCameraPNGImage from './img/smooth-2d-camera.png'
import * as Smooth2DCameraWebPImage from './img/smooth-2d-camera.webp'
import * as TwoDeeParticles400AVIFImage from './img/twodeeparticles-400.avif'
import * as TwoDeeParticles400PNGImage from './img/twodeeparticles-400.png'
import * as TwoDeeParticles400WebPImage from './img/twodeeparticles-400.webp'
import * as TwoDeeParticlesAVIFImage from './img/twodeeparticles.avif'
import * as TwoDeeParticlesPNGImage from './img/twodeeparticles.png'
import * as TwoDeeParticlesWebPImage from './img/twodeeparticles.webp'
import * as VarNameLen400AVIFImage from './img/varnamelen-400.avif'
import * as VarNameLen400PNGImage from './img/varnamelen-400.png'
import * as VarNameLen400WebPImage from './img/varnamelen-400.webp'
import * as VarNameLenAVIFImage from './img/varnamelen.avif'
import * as VarNameLenPNGImage from './img/varnamelen.png'
import * as VarNameLenWebPImage from './img/varnamelen.webp'

export interface Project {
  url: string
  images?: ImageFormats
  title: string
  description: string
  technologies: string[]
  startYear: number
  endYear?: number
}

export interface ImageFormats {
  png: Images<typeof import('*.png')>
  webp: Images<typeof import('*.webp')>
  avif: Images<typeof import('*.avif')>
}

export interface Images<T> {
  lg: T
  md: T
}

export const projects: Project[] = [
  {
    url: 'https://github.com/blizzy78/consistent',
    images: {
      png: {
        lg: ConsistentPNGImage,
        md: Consistent400PNGImage
      },
      webp: {
        lg: ConsistentWebPImage,
        md: Consistent400WebPImage
      },
      avif: {
        lg: ConsistentAVIFImage,
        md: Consistent400AVIFImage
      }
    },
    title: 'consistent',
    description: 'A Go linter/Analyzer checking that common language constructs are used consistently.',
    technologies: ['Go'],
    startYear: 2022
  },

  {
    url: 'https://github.com/blizzy78/varnamelen',
    images: {
      png: {
        lg: VarNameLenPNGImage,
        md: VarNameLen400PNGImage
      },
      webp: {
        lg: VarNameLenWebPImage,
        md: VarNameLen400WebPImage
      },
      avif: {
        lg: VarNameLenAVIFImage,
        md: VarNameLen400AVIFImage
      }
    },
    title: 'varnamelen',
    description: 'A Go linter/Analyzer checking that the length of a variable\'s name matches its usage scope. This linter is also part of the popular golangci-lint application.',
    technologies: ['Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/bookmarks',
    images: {
      png: {
        lg: BookmarksPNGImage,
        md: Bookmarks400PNGImage
      },
      webp: {
        lg: BookmarksWebPImage,
        md: Bookmarks400WebPImage
      },
      avif: {
        lg: BookmarksAVIFImage,
        md: Bookmarks400AVIFImage
      }
    },
    title: 'Bookmarks',
    description: 'My personal bookmarks management application. It\'s rather simplistic, but fast, searchable, and has tags.',
    technologies: ['Go', 'React', 'TypeScript', 'Algolia', 'Mantine', 'Tailwind CSS'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/dev-container',
    images: {
      png: {
        lg: DevContainerPNGImage,
        md: DevContainer400PNGImage
      },
      webp: {
        lg: DevContainerWebPImage,
        md: DevContainer400WebPImage
      },
      avif: {
        lg: DevContainerAVIFImage,
        md: DevContainer400AVIFImage
      }
    },
    title: 'Dev Container',
    description: 'An all-in-one dev container for Visual Studio Code. I use it for all my software development.',
    technologies: ['Docker', 'Go'],
    startYear: 2021
  },

  {
    url: 'https://github.com/blizzy78/conditional-http',
    images: {
      png: {
        lg: ConditionalHTTPPNGImage,
        md: ConditionalHTTP400PNGImage
      },
      webp: {
        lg: ConditionalHTTPWebPImage,
        md: ConditionalHTTP400WebPImage
      },
      avif: {
        lg: ConditionalHTTPAVIFImage,
        md: ConditionalHTTP400AVIFImage
      }
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
      png: {
        lg: TwoDeeParticlesPNGImage,
        md: TwoDeeParticles400PNGImage
      },
      webp: {
        lg: TwoDeeParticlesWebPImage,
        md: TwoDeeParticles400WebPImage
      },
      avif: {
        lg: TwoDeeParticlesAVIFImage,
        md: TwoDeeParticles400AVIFImage
      }
    },
    title: 'twodeeparticles',
    description: 'An engine-agnostic 2D particle system simulator for Go.',
    technologies: ['Go', 'Ebiten'],
    startYear: 2020
  },

  {
    url: 'https://ebitenui.github.io',
    images: {
      png: {
        lg: EbitenUIPNGImage,
        md: EbitenUI400PNGImage
      },
      webp: {
        lg: EbitenUIWebPImage,
        md: EbitenUI400WebPImage
      },
      avif: {
        lg: EbitenUIAVIFImage,
        md: EbitenUI400AVIFImage
      }
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
      png: {
        lg: KSPToolbarPNGImage,
        md: KSPToolbar400PNGImage
      },
      webp: {
        lg: KSPToolbarWebPImage,
        md: KSPToolbar400WebPImage
      },
      avif: {
        lg: KSPToolbarAVIFImage,
        md: KSPToolbar400AVIFImage
      }
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
      png: {
        lg: Smooth2DCameraPNGImage,
        md: Smooth2DCamera400PNGImage
      },
      webp: {
        lg: Smooth2DCameraWebPImage,
        md: Smooth2DCamera400WebPImage
      },
      avif: {
        lg: Smooth2DCameraAVIFImage,
        md: Smooth2DCamera400AVIFImage
      }
    },
    title: 'Smooth 2D Camera',
    description: 'Improves the rendering of the 2D camera in Unity 3D to display crisp and clear images, and avoid a pixelated or blurry look.',
    technologies: ['C#', 'Unity 3D'],
    startYear: 2015,
    endYear: 2015
  },

  {
    url: 'https://play.google.com/store/apps/details?id=de.blizzy.kesslersyndrome',
    images: {
      png: {
        lg: KesslerSyndromePNGImage,
        md: KesslerSyndrome400PNGImage
      },
      webp: {
        lg: KesslerSyndromeWebPImage,
        md: KesslerSyndrome400WebPImage
      },
      avif: {
        lg: KesslerSyndromeAVIFImage,
        md: KesslerSyndrome400AVIFImage
      }
    },
    title: 'Kessler Syndrome',
    description: 'A game of skill where you launch satellites into orbit.',
    technologies: ['C#', 'Unity 3D'],
    startYear: 2015,
    endYear: 2015
  },

  {
    url: 'https://store.steampowered.com/app/364660/Luminoso/',
    images: {
      png: {
        lg: LuminosoPNGImage,
        md: Luminoso400PNGImage
      },
      webp: {
        lg: LuminosoWebPImage,
        md: Luminoso400WebPImage
      },
      avif: {
        lg: LuminosoAVIFImage,
        md: Luminoso400AVIFImage
      }
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
      png: {
        lg: LighthousePNGImage,
        md: Lighthouse400PNGImage
      },
      webp: {
        lg: LighthouseWebPImage,
        md: Lighthouse400WebPImage
      },
      avif: {
        lg: LighthouseAVIFImage,
        md: Lighthouse400AVIFImage
      }
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
