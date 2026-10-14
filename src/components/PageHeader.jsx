import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="page-header">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb page-breadcrumb mb-2">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1
              return isLast || !crumb.to ? (
                <li key={crumb.label} className="breadcrumb-item active" aria-current="page">
                  {crumb.label}
                </li>
              ) : (
                <li key={crumb.label} className="breadcrumb-item">
                  <Link to={crumb.to}>{crumb.label}</Link>
                </li>
              )
            })}
          </ol>
        </nav>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
        <div className="page-header-accent">
          <Icon name="graduation-cap" size={20} />
        </div>
      </div>
    </section>
  )
}
