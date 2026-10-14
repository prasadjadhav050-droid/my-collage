import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import StatCard from '../components/StatCard'
import Icon from '../components/Icon'
import { college } from '../data/college'

const salientFeatures = [
  { icon: 'graduation-cap', title: 'Engineering Programmes', text: 'Undergraduate programmes across four engineering disciplines.' },
  { icon: 'shield', title: 'Approved & Affiliated', text: 'Approved by AICTE & DTE and affiliated to BATU, Lonere.' },
  { icon: 'library', title: 'Learning Resources', text: 'Central library with Book Bank, journals and newspapers.' },
  { icon: 'users', title: 'Student Support', text: 'Grievance redressal, anti-ragging and complaint committees.' },
  { icon: 'factory', title: 'Practical Exposure', text: 'Departmental laboratories and industrial visits.' },
  { icon: 'compass', title: 'Career Guidance', text: 'Training & placement cell supporting career readiness.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        title="About College"
        subtitle="History, vision and verified information about the institute."
        breadcrumbs={[{ label: 'About' }]}
      />

      <section className="section" id="about-institute">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-7">
              <SectionTitle eyebrow={college.trustName} title="About the Institute" />
              <p className="lead-text">{college.about}</p>
              <p>
                The college is situated at Nipani-Bhalgaon on the Beed Highway, near Videocon Company, in
                Chhatrapati Sambhajinagar (Aurangabad). The campus brings together classrooms, departmental
                laboratories, a central library and administrative offices to support engineering education.
              </p>
              <div className="info-pill-row">
                {college.approvals.map((item) => (
                  <span key={item} className="info-pill">
                    <Icon name="check" size={14} />
                    {item}
                  </span>
                ))}
                <span className="info-pill">
                  <Icon name="graduation-cap" size={14} />
                  {college.affiliation}
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row g-3">
                {college.quickStats.map((stat, index) => (
                  <div key={stat.label} className="col-6">
                    <StatCard icon={['building', 'shield', 'graduation-cap', 'map-pin'][index]} {...stat} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="vision">
        <div className="container">
          <SectionTitle
            eyebrow="Our Purpose"
            title="Vision, Mission & Programme Educational Objectives"
            align="center"
          />
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="vmp-card h-100">
                <span className="vmp-icon">
                  <Icon name="eye" size={24} />
                </span>
                <h3>Vision</h3>
                <p>{college.vision}</p>
                <ul className="vmp-list list-unstyled">
                  {college.visionPoints.map((point) => (
                    <li key={point}>
                      <Icon name="check" size={15} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="vmp-card h-100">
                <span className="vmp-icon">
                  <Icon name="target" size={24} />
                </span>
                <h3>Mission</h3>
                <p className="mb-0">{college.mission}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="vmp-card">
                <span className="vmp-icon">
                  <Icon name="award" size={24} />
                </span>
                <h3>Programme Educational Objectives</h3>
                <ol className="vmp-numbered">
                  {college.peo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="approvals">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <SectionTitle eyebrow="Credentials" title="Approvals & Affiliation" />
              <p>
                The institute operates under the approvals and affiliation verified below. Students are advised to
                refer to official college documents for certified records.
              </p>
            </div>
            <div className="col-lg-7">
              <ul className="approval-list list-unstyled mb-0">
                <li>
                  <span className="approval-icon"><Icon name="shield" size={20} /></span>
                  <div>
                    <h4>All India Council for Technical Education (AICTE)</h4>
                    <p className="mb-0">Approved by AICTE, New Delhi.</p>
                  </div>
                </li>
                <li>
                  <span className="approval-icon"><Icon name="shield" size={20} /></span>
                  <div>
                    <h4>Directorate of Technical Education (DTE)</h4>
                    <p className="mb-0">Approved by DTE, Mumbai.</p>
                  </div>
                </li>
                <li>
                  <span className="approval-icon"><Icon name="graduation-cap" size={20} /></span>
                  <div>
                    <h4>University Affiliation</h4>
                    <p className="mb-0">{college.affiliation}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="salient">
        <div className="container">
          <SectionTitle eyebrow="Why Choose Us" title="Salient Features" align="center" />
          <div className="row g-4">
            {salientFeatures.map((feature) => (
              <div key={feature.title} className="col-md-6 col-lg-4">
                <div className="feature-card h-100">
                  <span className="feature-icon">
                    <Icon name={feature.icon} size={22} />
                  </span>
                  <h4>{feature.title}</h4>
                  <p className="mb-0">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="note-box">
            <Icon name="info" size={20} />
            <p className="mb-0">{college.disclaimer}</p>
          </div>
        </div>
      </section>
    </>
  )
}
