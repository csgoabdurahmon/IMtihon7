import { Link, useLocation } from 'react-router-dom'
import Logo from "../assets/Logo.svg";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Plant Care', path: '/plant-care' },
  { name: 'Blogs', path: '/blogs' },
]

export default function Navbar() {
  const location = useLocation()
  return (
    <header className="w-full border-b border-[#EAEAEA] bg-white">
      <div className="container flex h-[88px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Greenshop Logo" className="h-10 w-10" />
          <span className="text-[24px] font-bold text-[#46A358] tracking-tight">GREENSHOP</span>
        </Link>
        <nav className="flex items-center gap-8 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-[18px] font-medium text-[#3D3D3D] px-2 pb-2 transition-colors duration-200 ${
                location.pathname === link.path
                  ? 'text-[#3D3D3D] font-bold' : 'hover:text-[#46A358]'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded bg-[#46A358]"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <button className="text-[#3D3D3D] hover:text-[#46A358] text-xl">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
          <button className="relative text-[#3D3D3D] hover:text-[#46A358] text-xl">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg>
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#46A358] text-xs font-bold text-white">6</span>
          </button>
          <button className="rounded-lg border border-[#46A358] bg-white px-7 py-2 text-[16px] font-semibold text-[#46A358] transition-colors duration-200 hover:bg-[#46A358] hover:text-white">
            <svg className="inline-block mr-2 -mt-1" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="9 17 15 12 9 7"/></svg>
            Login
          </button>
        </div>
      </div>
    </header>
  )
}
