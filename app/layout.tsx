import BreakpointReadout from '@/components/BreakpointReadout'
import SocialImage from '@/images/social.png'
import '@total-typescript/ts-reset'
import clsx from 'clsx'
import Script from 'next/script'
import { GeistSans } from './fonts'
import './globals.css'

export const metadata = {
  title: 'Maik Schreiber',
  icons: 'data:;base64,iVBORw0KGgo=',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
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

        <meta name="theme-color" content="#1e293b" />

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9BYMJMEBSQ" async />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9BYMJMEBSQ');`}
        </Script>
      </head>

      <body className={clsx('font-geist-sans dark:bg-slate-800 dark:text-slate-200', GeistSans.variable)}>
        {children}

        {process.env.NODE_ENV !== 'production' && <BreakpointReadout className="fixed right-2 top-2 opacity-80" />}
      </body>
    </html>
  )
}
