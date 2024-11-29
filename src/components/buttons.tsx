const PrimaryButton = function ({
  content,
  url,
}: {
  content: string
  url: string
}) {
  return (
    <a
      href={url}
      className={`rounded-full bg-indigo-700 px-10 py-5 text-md font-bold text-white shadow-sm hover:bg-indigo-600  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      {content}
    </a>
  )
}

const WhiteButton = function ({
  content,
  url,
}: {
  content: string
  url: string
}) {
  if (url == '') {
    return (
      <div
        className={`rounded-full bg-white px-10 py-5 text-md font-bold text-indigo-700 shadow-sm outline outline-indigo-500 outline-2 hover:text-white hover:bg-indigo-700`}
      >
        {content}
      </div>
    )
  }
  return (
    <a
      href={url}
      className={`rounded-full bg-white px-10 py-5 text-md font-bold text-indigo-700 shadow-sm outline outline-indigo-500 outline-2 hover:text-white hover:bg-indigo-700`}
    >
      {content}
    </a>
  )
}

export { PrimaryButton, WhiteButton }
