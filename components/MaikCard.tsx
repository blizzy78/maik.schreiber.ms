import MaikImage from '@/images/maik.jpg'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { faHandSpock, faLock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Card from './Card'
import { H1 } from './Headline'

export default function MaikCard() {
  return (
    <Card className="mx-auto flex w-full flex-col md:w-3/4 xl:grid xl:w-auto xl:max-w-screen-lg xl:grid-cols-2">
      <div className="relative">
        <figure className="w-full xl:h-full">
          <picture className="w-full">
            <Image
              src={MaikImage}
              className="w-full rounded-t-xl xl:h-full xl:rounded-l-xl xl:object-cover"
              priority
              alt="Maik"
            />
          </picture>
        </figure>

        <div className="absolute bottom-0 h-1/8 w-full dark:bg-gradient-b-slate-800 xl:right-0 xl:top-0 xl:h-full xl:w-1/8 dark:xl:bg-gradient-r-slate-800"></div>
      </div>

      <div className="flex flex-col px-6 md:px-8 xl:gap-5 xl:py-8">
        <div className="sticky top-0 flex flex-row items-center gap-3 py-6 dark:bg-slate-700 md:py-8 xl:static xl:top-auto xl:py-0">
          <H1 titleIcon={faHandSpock} title="Hi, I'm Maik" />
        </div>

        <section>
          <h2 className="sr-only">About Me</h2>

          <div className="mb-6 flex flex-col gap-5 md:mb-8 xl:mb-0">
            <p className="my-0 text-pretty">
              Born in 1978, I&nbsp;began developing software in 1994. I&nbsp;started working for{' '}
              <a href="https://subshell.com" rel="noopener noreferrer" className="dark:text-bzyellow">
                subshell GmbH
              </a>{' '}
              in Hamburg, Germany, in 2003, where I&nbsp;am currently working on our flagship product, Sophora CMS, as
              well as various other projects. I&nbsp;am still working for subshell to this day.
            </p>

            <p className="my-0 text-pretty">
              I&nbsp;have experience with many different technologies and programming languages, including Java, Go,
              React, C#, and C. As projects come and go, I&nbsp;use frontend/
              <wbr />
              backend frameworks, databases, and other technologies as needed. I&nbsp;am always trying to stay
              up-to-date with the latest technologies.
            </p>

            <p className="my-0 text-pretty">
              In my spare time, I&nbsp;work on a variety of different projects, most of which are open source. You can
              see some of these projects below.
            </p>

            <p className="my-0 text-pretty">I&nbsp;am always happy to connect with others:</p>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                <a href="mailto:maik@schreiber.ms" className="flex flex-row items-center gap-2">
                  <FontAwesomeIcon className="h-5 w-5 items-center dark:text-bzyellow" icon={faEnvelope} />
                  <div className="inline-block dark:text-bzyellow">maik@schreiber.ms</div>
                </a>

                <a
                  href="https://github.com/blizzy78"
                  rel="noopener noreferer"
                  className="flex flex-row items-center gap-2"
                >
                  <FontAwesomeIcon className="h-5 w-5 items-center dark:text-bzyellow" icon={faGithub} />
                  <div className="inline-block dark:text-bzyellow">@blizzy78</div>
                </a>

                <a
                  href="https://twitter.com/blizzy78"
                  rel="noopener noreferer"
                  className="flex flex-row items-center gap-2"
                >
                  <FontAwesomeIcon className="h-5 w-5 items-center dark:text-bzyellow" icon={faXTwitter} />
                  <div className="inline-block dark:text-bzyellow">@blizzy78</div>
                </a>
              </div>

              <div>
                <a className="flex flex-row items-center gap-2" href="0x1FFC078EECEE9AAC-public.asc">
                  <FontAwesomeIcon className="h-5 w-5 items-center dark:text-bzyellow" icon={faLock} />
                  <div className="inline-block dark:text-bzyellow">Download my OpenPGP public key</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Card>
  )
}
