import clsx from 'clsx'

export default function Card({
  className,
  colorClassName = 'dark:border-slate-600 dark:bg-slate-700 dark:shadow-slate-900',
  hoverColorClassName = 'hover:dark:border-slate-500 transition-[border] duration-200',
  url,
  children,
}: {
  className?: string
  colorClassName?: string
  hoverColorClassName?: string
  url?: string
  children: React.ReactNode
}) {
  const cssClass = clsx('rounded-xl border shadow', className, colorClassName, !!url && hoverColorClassName)

  if (!!url) {
    return (
      <a href={url} rel="noopener noreferrer" className={cssClass}>
        {children}
      </a>
    )
  }

  return <div className={cssClass}>{children}</div>
}
