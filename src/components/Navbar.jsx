import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Icon from './Icon'
import LoginForm from './LoginForm'
import { navLinks } from '../data/navigation'
import { college } from '../data/college'
import { closeMobileNav, selectMobileNavOpen, toggleMobileNav } from '../store/uiSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const mobileOpen = useSelector(selectMobileNavOpen)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    dispatch(closeMobileNav())
  }, [location.pathname, location.hash, dispatch])

  useEffect(() => {
    if (!openDropdown) return undefined

    const closeOnOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpenDropdown(null)
    }

    document.addEventListener('mousedown', closeOnOutside)
    document.addEventListener('touchstart', closeOnOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('mousedown', closeOnOutside)
      document.removeEventListener('touchstart', closeOnOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [openDropdown])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  return (
    <header className="site-navbar">
      <div className="container d-flex align-items-center justify-content-between gap-2 py-2">
        <Link to="/" className="brand text-decoration-none" aria-label={college.name}>
          <img src="/images/trustlogo.png" alt={`${college.shortName} logo`} className="brand-logo" />
          <span className="brand-text">
            <span className="brand-trust">{college.trustName}</span>
            <span className="brand-name">Sant Eknath College of Engineering</span>
            <span className="brand-location d-none d-sm-block">Chhatrapati Sambhajinagar</span>
          </span>
        </Link>

        <div className="d-flex align-items-center gap-2">
          <Link to="/student-corner" className="btn btn-brand d-none d-lg-inline-flex">
            <Icon name="bell" size={16} />
            Notice Board
          </Link>
          <button
            type="button"
            className="navbar-burger d-lg-none"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => dispatch(toggleMobileNav())}
          >
            <Icon name={mobileOpen ? 'x' : 'menu'} size={26} />
          </button>
        </div>
      </div>

      <nav ref={navRef} className={`main-nav ${mobileOpen ? 'main-nav-open' : ''}`}>
        <div className="container">
          <ul className="main-nav-list list-unstyled mb-0">
            {navLinks.map((link) => {
              const hasChildren = Array.isArray(link.children) && link.children.length > 0
              const isPanel = link.type === 'login'
              const isExpandable = hasChildren || isPanel
              const isOpen = openDropdown === link.label
              return (
                <li
                  key={link.label}
                  className={`main-nav-item ${isExpandable ? 'has-children' : ''} ${isPanel ? 'main-nav-item-panel' : ''} ${isOpen ? 'is-open' : ''}`}
                >
                  {isExpandable ? (
                    <>
                      <button
                        type="button"
                        className="main-nav-link"
                        onClick={() => handleDropdown(link.label)}
                        aria-expanded={isOpen}
                      >
                        {isPanel && <Icon name="user" size={15} />}
                        {link.label}
                        <Icon name="chevron-down" size={15} className="nav-chevron" />
                      </button>
                      {isPanel ? (
                        <div className="main-nav-sub main-nav-sub-panel">
                          <LoginForm />
                        </div>
                      ) : (
                        <ul className="main-nav-sub list-unstyled mb-0">
                          {link.children.map((child) => (
                            <li key={child.label}>
                              <Link to={child.to} onClick={() => setOpenDropdown(null)}>
                                <Icon name="chevron-right" size={14} />
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `main-nav-link ${isActive ? 'active' : ''}`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.label}
                    </NavLink>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {mobileOpen && (
        <button
          type="button"
          className="nav-backdrop d-lg-none"
          aria-label="Close navigation"
          onClick={() => dispatch(closeMobileNav())}
        />
      )}
    </header>
  )
}
