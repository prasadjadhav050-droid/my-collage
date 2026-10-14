import Icon from './Icon'

function parseDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return { day: '--', month: '---' }
  }
  return {
    day: date.toLocaleDateString('en-IN', { day: '2-digit' }),
    month: date.toLocaleDateString('en-IN', { month: 'short' }),
  }
}

export default function EventCard({ event }) {
  const { day, month } = parseDate(event.date)
  return (
    <article className="event-card h-100">
      <div className="event-card-date">
        <span className="event-day">{day}</span>
        <span className="event-month">{month}</span>
      </div>
      <div className="event-card-body">
        <span className="event-type">{event.type}</span>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-text">{event.description}</p>
        <div className="event-meta">
          <span>
            <Icon name="clock" size={14} />
            {event.time}
          </span>
          <span>
            <Icon name="map-pin" size={14} />
            {event.venue}
          </span>
        </div>
      </div>
    </article>
  )
}
