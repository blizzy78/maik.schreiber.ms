export const H1 = ({
  titleIcon,
  title,
}: {
  titleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
}) => {
  const TitleIcon = titleIcon

  return (
    <div className="flex flex-col gap-3">
      <h1 className="flex flex-row items-center gap-3">
        <TitleIcon className="inline-block h-8 w-8 fill-slate-300" aria-hidden />

        <div className="inline-block text-2xl font-semibold after:ml-[0.125rem] after:content-['.'] dark:after:text-bzyellow">
          {title}
        </div>
      </h1>
    </div>
  )
}

export const H2 = ({
  titleIcon,
  title,
}: {
  titleIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  title: string
}) => {
  const TitleIcon = titleIcon

  return (
    <h2 className="flex flex-row items-center gap-3">
      <TitleIcon className="inline-block h-8 w-8 fill-slate-300" aria-hidden />

      <div className="inline-block text-2xl font-semibold after:ml-[0.125rem] after:content-['.'] dark:after:text-bzyellow">
        {title}
      </div>
    </h2>
  )
}
