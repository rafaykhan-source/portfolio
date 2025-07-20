import { Link } from './Link'

export function NavItem({ url, content }) {
  return (
    <>
      <div className="max-w-lg px-2 text-center text-xl">
        <Link url={url} content={content}></Link>
      </div>
    </>
  )
}
