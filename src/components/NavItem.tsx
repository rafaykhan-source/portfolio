import { Link } from './Link'

export function NavItem({ url, content }) {
  return (
    <>
      <div className="px-2 text-lg">
        <Link url={url} content={content}></Link>
      </div>
    </>
  )
}
