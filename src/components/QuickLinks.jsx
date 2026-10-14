import { Link } from 'react-router-dom'
import Icon from './Icon'
import { quickLinks } from '../data/quickLinks'

export default function QuickLinks() {
  return (
    <div className="row g-3 g-lg-4">
      {quickLinks.map((link) => (
        <div key={link.to} className="col-6 col-md-4 col-lg-2">
          <Link to={link.to} className="quick-link h-100">
            <span className="quick-link-icon">
              <Icon name={link.icon} size={24} />
            </span>
            <span className="quick-link-label">{link.label}</span>
            <span className="quick-link-desc">{link.description}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}
