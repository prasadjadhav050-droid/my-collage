import { Link } from 'react-router-dom'
import Icon from './Icon'
import { college } from '../data/college'

export default function TopBar() {
  return (
    <div className="site-topbar d-none d-lg-block">
      <div className="container d-flex align-items-center justify-content-between flex-wrap gap-2 py-1">
        <ul className="topbar-list list-unstyled mb-0">
          <li>
            <a href={`tel:${college.phones[0].replace(/[^0-9+]/g, '')}`}>
              <Icon name="phone" size={15} />
              <span>{college.phones[0]}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${college.email}`}>
              <Icon name="mail" size={15} />
              <span>{college.email}</span>
            </a>
          </li>
          <li className="d-none d-xl-flex">
            <span>
              <Icon name="clock" size={15} />
              <span>{college.workingHours}</span>
            </span>
          </li>
        </ul>
        <div className="topbar-social d-flex align-items-center gap-2">
          <span className="topbar-social-label">Follow us</span>
          <a href={college.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <Icon name="facebook" size={16} />
          </a>
          <a href={college.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
            <Icon name="twitter" size={16} />
          </a>
          <a href={college.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Icon name="instagram" size={16} />
          </a>
          <Link to="/contact" className="topbar-cta">
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  )
}
