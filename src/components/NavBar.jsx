import { NavItem } from './NavItem'

const items = [
  {
    url: 'https://github.com/rafaykhan-source',
    content: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/rafaydkhan/',
    content: 'LinkedIn',
  },
  {
    url: 'https://www.linkedin.com/in/rafaydkhan/',
    content: 'Resume',
  },
]
export function NavBar() {
  const navItems = items.map((item) => (
    <NavItem url={item.url} content={item.content}></NavItem>
  ))
  return (
    <>
      <div className="grid grid-flow-col place-content-center divide-x-2 divide-solid divide-gray-400 border-b-2 border-gray-700 bg-zinc-950 py-2">
        {navItems}
      </div>
    </>
  )
}
