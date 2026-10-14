import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import EnquiryForm from '../components/EnquiryForm'
import Icon from '../components/Icon'
import { college } from '../data/college'

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(college.mapQuery)}&output=embed`

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Official address, contact details and an enquiry form."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="contact-card h-100">
                <span className="contact-icon">
                  <Icon name="map-pin" size={22} />
                </span>
                <h4>Institute Address</h4>
                <p className="mb-0">
                  {college.addressLines.map((line) => (
                    <span key={line} className="d-block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-card h-100">
                <span className="contact-icon">
                  <Icon name="phone" size={22} />
                </span>
                <h4>Phone</h4>
                <ul className="list-unstyled mb-0">
                  {college.phones.map((phone) => (
                    <li key={phone}>
                      <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`}>{phone}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-card h-100">
                <span className="contact-icon">
                  <Icon name="mail" size={22} />
                </span>
                <h4>Email</h4>
                <a href={`mailto:${college.email}`} className="contact-email">
                  {college.email}
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="contact-card h-100">
                <span className="contact-icon">
                  <Icon name="clock" size={22} />
                </span>
                <h4>Working Hours</h4>
                <p className="mb-0">{college.workingHours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-6">
              <SectionTitle
                eyebrow="Get in Touch"
                title="Send Us an Enquiry"
                subtitle="Fill in the form and our team will get back to you. This is a demo form with no backend."
              />
              <div className="enquiry-panel">
                <EnquiryForm />
              </div>
            </div>
            <div className="col-lg-6">
              <SectionTitle eyebrow="Find Us" title="Campus Location" />
              <div className="map-frame">
                <iframe
                  title="College location map"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="contact-social-row">
                <a href={college.socials.facebook} target="_blank" rel="noreferrer" className="btn btn-outline-brand">
                  <Icon name="facebook" size={17} />
                  Facebook
                </a>
                <a href={college.socials.instagram} target="_blank" rel="noreferrer" className="btn btn-outline-brand">
                  <Icon name="instagram" size={17} />
                  Instagram
                </a>
                <Link to="/departments" className="btn btn-outline-brand">
                  <Icon name="building" size={17} />
                  Departments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
