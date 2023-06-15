import logo from '../B4Vlogo.jpg';

const navigation = [
  { name: 'Picks', href: '/#' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-12">
          <a href="/#" className="-m-1.5 p-1.5">
            <span className="sr-only">Betting For Value</span>
            <img className="h-16 w-auto" src={logo} alt="B4V loggo" />
          </a>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}