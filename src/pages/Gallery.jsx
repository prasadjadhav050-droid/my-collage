import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import Icon from '../components/Icon'
import { galleryItems, galleryNote, galleryTags } from '../data/gallery'
import { selectActiveGalleryTag, setActiveGalleryTag } from '../store/uiSlice'

export default function Gallery() {
  const dispatch = useDispatch()
  const activeTag = useSelector(selectActiveGalleryTag)
  const [lightbox, setLightbox] = useState(null)

  const items = useMemo(
    () => (activeTag === 'All' ? galleryItems : galleryItems.filter((item) => item.tag === activeTag)),
    [activeTag],
  )

  const closeLightbox = () => setLightbox(null)

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        subtitle="Campus, classrooms, laboratories, festivals and college events."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Moments"
            title="Campus Life in Pictures"
            subtitle="Browse glimpses of the campus, facilities and activities."
            align="center"
          />

          <div className="gallery-filters">
            {galleryTags.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`notice-chip ${activeTag === tag ? 'active' : ''}`}
                onClick={() => dispatch(setActiveGalleryTag(tag))}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="row g-3 gallery-grid">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="col-6 col-md-4 col-lg-3"
                style={{ animationDelay: `${index * 45}ms` }}
              >
                {item.placeholder ? (
                  <div className="gallery-tile gallery-tile-placeholder">
                    <span className="gallery-placeholder-icon">
                      <Icon name="image" size={26} />
                    </span>
                    <span className="gallery-tile-title">{item.title}</span>
                    <span className="gallery-tile-tag">{item.tag}</span>
                  </div>
                ) : (
                  <button type="button" className="gallery-tile" onClick={() => setLightbox(item)}>
                    <img src={item.src} alt={item.title} loading="lazy" />
                    <span className="gallery-tile-overlay">
                      <span className="gallery-tile-title">{item.title}</span>
                      <span className="gallery-tile-tag">{item.tag}</span>
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="note-box mt-4">
            <Icon name="info" size={20} />
            <p className="mb-0">{galleryNote}</p>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button type="button" className="lightbox-close" aria-label="Close image" onClick={closeLightbox}>
            <Icon name="x" size={26} />
          </button>
          <figure className="lightbox-figure" onClick={(event) => event.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} />
            <figcaption>{lightbox.title}</figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
