import Icon from './Icon'

const categoryIcons = {
  Examination: 'file-text',
  Admission: 'graduation-cap',
  Academic: 'book',
  Event: 'calendar',
  Holiday: 'calendar',
  General: 'info',
}

function formatDate(value) {
  try {
    return new Date(value).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return value
  }
}

export default function NoticeCard({ notice, view = 'grid' }) {
  return (
    <article className={`notice-card notice-card-${view} h-100 priority-${notice.priority}`}>
      <div className="notice-card-body">
        <div className="notice-card-top">
          <span className="notice-category">
            <Icon name={categoryIcons[notice.category] || 'info'} size={14} />
            {notice.category}
          </span>
          {notice.priority === 'high' && <span className="notice-flag">Important</span>}
        </div>
        <h3 className="notice-card-title">{notice.title}</h3>
        <p className="notice-card-text">{notice.body}</p>
      </div>
      <div className="notice-card-foot">
        <span className="notice-date">
          <Icon name="calendar" size={15} />
          {formatDate(notice.date)}
        </span>
        {notice.sample && <span className="notice-sample">Sample notice</span>}
      </div>
    </article>
  )
}
