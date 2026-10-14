import Icon from './Icon'
import SectionTitle from './SectionTitle'
import { college } from '../data/college'

export default function LocationSection() {
  const mapSrc = college.mapCid
    ? `https://maps.google.com/maps?cid=${college.mapCid}&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(college.mapQuery)}&output=embed`
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(college.mapQuery)}`

  return (
    <section className="section location-section" id="location">
      <div className="container">
        <SectionTitle
          eyebrow="Location"
          title="Find Us"
          subtitle={college.addressLines.join(' ')}
          align="center"
        />

        <div className="location-card">
          <div className="map-frame">
            <iframe
              title={`${college.name} location map`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="location-actions">
            <a href={directionsUrl} target="_blank" rel="noreferrer" className="btn btn-brand btn-lg">
              <Icon name="compass" size={18} />
              Get Directions
            </a>
            <span className="location-hint">
              <Icon name="external-link" size={15} />
              Opens in Google Maps
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
