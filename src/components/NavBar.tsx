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
      <div className="grid grid-flow-col place-content-center divide-x-2 divide-solid divide-gray-600 py-2 pt-4">
        {navItems}
      </div>
    </>
  )
}
