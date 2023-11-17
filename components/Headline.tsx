import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const H1 = ({ titleIcon, title }: { titleIcon: IconProp; title: string }) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex flex-row items-center gap-3">
        <FontAwesomeIcon className="inline-block h-7 w-7 dark:text-slate-300" icon={titleIcon} />

        <div className="inline-block text-2xl font-semibold after:ml-[0.125rem] after:content-['.'] dark:after:text-bzyellow">
          {title}
        </div>
      </h1>
    </div>
  )
}

export const H2 = ({ titleIcon, title }: { titleIcon: IconProp; title: string }) => {
  return (
    <h2 className="flex flex-row items-center gap-3">
      <FontAwesomeIcon className="inline-block h-7 w-7 dark:text-slate-300" aria-hidden icon={titleIcon} />

      <div className="inline-block text-2xl font-semibold after:ml-[0.125rem] after:content-['.'] dark:after:text-bzyellow">
        {title}
      </div>
    </h2>
  )
}
