export default function QuoteSectionContents() {
  return (
    <>
      <h2 className="sr-only">My Favorite Quote</h2>

      <blockquote className="mx-5 flex flex-col items-center gap-4 sm:mx-8 lg:gap-3">
        <div className="flex flex-col items-center gap-2 lg:gap-1">
          <p className="text-center text-xl italic">
            Any fool can write code <br className="md:hidden" />
            that a computer can understand.
          </p>

          <p className="text-center text-xl italic">
            Good programmers write code <br className="md:hidden" />
            that <strong>humans</strong> can understand.
          </p>
        </div>

        <p className="dark:text-slate-400">&mdash; Martin Fowler</p>
      </blockquote>
    </>
  )
}
