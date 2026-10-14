import { Link } from 'react-router-dom'
import Icon from './Icon'
import { college } from '../data/college'
import { quickLinks } from '../data/quickLinks'
import { departments } from '../data/departments'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <img src="/images/trustlogo.png" alt={`${college.shortName} logo`} className="footer-logo" />
              <div>
                <div className="footer-trust">{college.trustName}</div>
                <div className="footer-name">{college.name}</div>
              </div>
            </div>
            <p className="footer-about">{college.about.slice(0, 170)}...</p>
            <div className="footer-social">
              <a href={college.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Icon name="facebook" size={18} />
              </a>
              <a href={college.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <Icon name="twitter" size={18} />
              </a>
              <a href={college.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>
                    <Icon name="chevron-right" size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h4 className="footer-heading">Departments</h4>
            <ul className="footer-links list-unstyled">
              {departments.map((dept) => (
                <li key={dept.id}>
                  <Link to={`/departments/${dept.id}`}>
                    <Icon name="chevron-right" size={14} />
                    {dept.code}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/academics">
                  <Icon name="chevron-right" size={14} />
                  Academics
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h4 className="footer-heading">Reach Us</h4>
            <ul className="footer-contact list-unstyled">
              <li>
                <Icon name="map-pin" size={17} />
                <span>{college.addressLines.join(' ')}</span>
              </li>
              {college.phones.map((phone) => (
                <li key={phone}>
                  <Icon name="phone" size={17} />
                  <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a>
                </li>
              ))}
              <li>
                <Icon name="mail" size={17} />
                <a href={`mailto:${college.email}`}>{college.email}</a>
              </li>
              <li>
                <Icon name="clock" size={17} />
                <span>{college.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 py-3">
          <p className="mb-0">© {new Date().getFullYear()} Sant Eknath College of Engineering. All rights reserved.</p>
          <p className="mb-0 footer-demo">
            <Icon name="info" size={15} />
            Student information portal — demo frontend project.
          </p>
        </div>
      </div>
    </footer>
  )
}
