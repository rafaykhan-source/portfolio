export function Link({ url, content }) {
  return (
    <>
      <a
        className="font-sans text-gray-300 underline duration-200 hover:text-gray-400"
        href={url}
      >
        {content}
      </a>
    </>
  )
}
