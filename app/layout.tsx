import SocialImage from '@/images/social.png'
import { GeistSans } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Maik Schreiber',
  icons: 'data:;base64,iVBORw0KGgo=',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://maik.schreiber.ms" />

        <meta property="og:url" content="https://maik.schreiber.ms" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maik Schreiber, Senior Software Engineer, subshell GmbH" />
        <meta
          property="og:description"
          content="Having worked in the industry for over 20 years, Maik has in-depth experience with various programming languages and frameworks."
        />
        <meta property="og:image" content={'https://maik.schreiber.ms' + SocialImage.src} />
        <meta property="og:image:alt" content="Maik Schreiber, Senior Software Engineer, subshell GmbH" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maik Schreiber, Senior Software Engineer, subshell GmbH" />
        <meta
          name="twitter:description"
          content="Having worked in the industry for over 20 years, Maik has in-depth experience with various programming languages and frameworks."
        />
        <meta name="twitter:image" content={'https://maik.schreiber.ms' + SocialImage.src} />
        <meta name="twitter:image:alt" content="Maik Schreiber, Senior Software Engineer, subshell GmbH" />

        <meta name="theme-color" content="#f3efe4" />

      </head>

      <body className={`font-geist-sans antialiased ${GeistSans.variable}`}>{children}</body>
    </html>
  )
}
