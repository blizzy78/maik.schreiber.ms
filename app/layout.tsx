import SocialImage from '@/images/social.png'
import { GeistMono, GeistSans } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Maik Schreiber — Senior Software Engineer',
  description:
    'Portfolio of Maik Schreiber, a senior software engineer in Hamburg working across backend systems, web applications, and developer tooling.',
  icons: 'data:;base64,iVBORw0KGgo=',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-w-0 overflow-x-clip scroll-smooth motion-reduce:scroll-auto">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://maik.schreiber.ms" />

        <meta property="og:url" content="https://maik.schreiber.ms" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maik Schreiber — Senior Software Engineer" />
        <meta
          property="og:description"
          content="Senior software engineer in Hamburg working across backend systems, web applications, and developer tooling."
        />
        <meta property="og:image" content={'https://maik.schreiber.ms' + SocialImage.src} />
        <meta property="og:image:alt" content="Maik Schreiber — Senior Software Engineer" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maik Schreiber — Senior Software Engineer" />
        <meta
          name="twitter:description"
          content="Senior software engineer in Hamburg working across backend systems, web applications, and developer tooling."
        />
        <meta name="twitter:image" content={'https://maik.schreiber.ms' + SocialImage.src} />
        <meta name="twitter:image:alt" content="Maik Schreiber — Senior Software Engineer" />

        <meta name="theme-color" content="#e8f0f2" />
      </head>

      <body
        className={`min-w-0 overflow-x-clip bg-fog font-geist-sans text-ink antialiased ${GeistSans.variable} ${GeistMono.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
