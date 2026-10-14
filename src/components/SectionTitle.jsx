export default function SectionTitle({ eyebrow, title, subtitle, align = 'start', light = false }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-start'
  return (
    <div className={`section-title ${alignment} ${light ? 'section-title-light' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
