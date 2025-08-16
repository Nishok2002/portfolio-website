import Link from 'next/link';

const NavBar = () => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        <Link href="#" className="text-xl font-semibold">
          {/* Site name updated to reflect your portfolio */}
          Nishok&nbsp;Ilangovan
        </Link>
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;