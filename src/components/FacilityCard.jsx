import Icon from './Icon'

export default function FacilityCard({ facility }) {
  return (
    <article className="facility-card h-100" id={facility.anchorder}>
      <span className="facility-card-icon">
        <Icon name={facility.icon} size={24} />
      </span>
      <h3 className="facility-card-title">{facility.name}</h3>
      <p className="facility-card-text">{facility.description}</p>
      <ul className="facility-card-list list-unstyled mb-0">
        {facility.features.map((feature) => (
          <li key={feature}>
            <Icon name="check" size={14} />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  )
}
