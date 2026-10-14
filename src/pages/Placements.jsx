import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import Icon from '../components/Icon'
import { internships, placementActivities, placementIntro, recruitersNote, trainingPrograms } from '../data/placements'

export default function Placements() {
  return (
    <>
      <PageHeader
        title="Training & Placements"
        subtitle="Placement cell information, training, internships and career opportunities."
        breadcrumbs={[{ label: 'Placements' }]}
      />

      <section className="section">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-lg-7">
              <SectionTitle eyebrow="Career Readiness" title="Placement Cell" />
              <p className="lead-text">{placementIntro}</p>
              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="info-pill">
                  <Icon name="check" size={14} />
                  Training & guidance
                </span>
                <span className="info-pill">
                  <Icon name="check" size={14} />
                  Campus interactions
                </span>
                <span className="info-pill">
                  <Icon name="check" size={14} />
                  Internship support
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="placement-cta-card">
                <span className="placement-cta-icon">
                  <Icon name="briefcase" size={26} />
                </span>
                <h3>Student Registration</h3>
                <p className="mb-3">
                  Final year students can register with the placement cell for training and campus opportunities.
                </p>
                <Link to="/contact" className="btn btn-brand">
                  <Icon name="send" size={17} />
                  Contact Placement Cell
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="What We Offer"
            title="Training Programmes"
            subtitle="Structured training to help students become industry-ready."
            align="center"
          />
          <div className="row g-4">
            {trainingPrograms.map((program) => (
              <div key={program.title} className="col-md-6 col-lg-4">
                <div className="training-card h-100">
                  <span className="training-icon">
                    <Icon name={program.icon} size={22} />
                  </span>
                  <h3>{program.title}</h3>
                  <p className="mb-0">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-6">
              <SectionTitle eyebrow="Activities" title="Placement Cell Activities" />
              <ul className="check-list list-unstyled mb-0">
                {placementActivities.map((activity) => (
                  <li key={activity}>
                    <Icon name="check" size={15} />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <SectionTitle eyebrow="Experience" title="Internships & Projects" />
              <ul className="internship-list list-unstyled mb-0">
                {internships.map((item) => (
                  <li key={item.title}>
                    <span className="internship-icon">
                      <Icon name="briefcase" size={18} />
                    </span>
                    <div>
                      <h4>{item.title}</h4>
                      <p className="mb-0">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="note-box mt-5">
            <Icon name="info" size={20} />
            <p className="mb-0">{recruitersNote}</p>
          </div>
        </div>
      </section>
    </>
  )
}
