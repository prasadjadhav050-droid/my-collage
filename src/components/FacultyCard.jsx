import Icon from './Icon'

export default function FacultyCard({ member }) {
  return (
    <article className="faculty-card h-100">
      <span className="faculty-avatar">
        <Icon name="user" size={26} />
      </span>
      <h4 className="faculty-name">{member.name}</h4>
      <span className="faculty-role">{member.role}</span>
      <dl className="faculty-meta mb-0">
        <div>
          <dt>Qualification</dt>
          <dd>{member.qualification}</dd>
        </div>
        <div>
          <dt>Area</dt>
          <dd>{member.expertise}</dd>
        </div>
      </dl>
    </article>
  )
}
