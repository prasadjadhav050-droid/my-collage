import Icon from './Icon'

export default function StatCard({ icon, value, label, note }) {
  return (
    <div className="stat-card h-100">
      <span className="stat-card-icon">
        <Icon name={icon} size={22} />
      </span>
      <div>
        <div className="stat-card-value">{value}</div>
        <div className="stat-card-label">{label}</div>
        {note && <div className="stat-card-note">{note}</div>}
      </div>
    </div>
  )
}
