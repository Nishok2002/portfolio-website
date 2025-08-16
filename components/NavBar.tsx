import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
  // Define the navigation items and their target anchors.
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Featured Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track whether the mobile sidebar is open.
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Smoothly scrolls to the given section and closes the sidebar on mobile.
   */
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:py-6">
        {/* Replace portfolio name with the GitHub ID and link to profile */}
        <Link
          href="https://github.com/Nishok2002"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-indigo-600 hover:text-indigo-800"
        >
          Nishok2002
        </Link>
        {/* Desktop navigation */}
        <div className="hidden space-x-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-gray-700 text-lg transition-colors hover:text-indigo-600"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile hamburger button */}
        <button
          className="relative z-50 flex h-8 w-8 items-center justify-center rounded md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-6 w-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 transform bg-white/95 p-6 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="mt-12 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="block text-lg font-medium text-gray-700 hover:text-indigo-600"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;