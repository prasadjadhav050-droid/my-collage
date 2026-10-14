import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function DepartmentCard({ department }) {
  return (
    <article className="dept-card h-100" style={{ '--dept-accent': department.accent }}>
      <div className="dept-card-top">
        <span className="dept-card-icon">
          <Icon name={department.icon} size={26} />
        </span>
        <span className="dept-card-code">{department.code}</span>
      </div>
      <h3 className="dept-card-title">{department.name}</h3>
      <p className="dept-card-text">{department.tagline}</p>
      <ul className="dept-card-tags list-unstyled">
        {department.highlights.slice(0, 3).map((item) => (
          <li key={item}>
            <Icon name="check" size={14} />
            {item}
          </li>
        ))}
      </ul>
      <Link to={`/departments/${department.id}`} className="dept-card-link">
        View Department
        <Icon name="arrow-right" size={16} />
      </Link>
    </article>
  )
}
