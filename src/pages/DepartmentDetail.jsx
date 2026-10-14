import { Link, useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FacultyCard from '../components/FacultyCard'
import Icon from '../components/Icon'
import { departments } from '../data/departments'
import { faculty, facultyNote } from '../data/faculty'

export default function DepartmentDetail() {
  const { id } = useParams()
  const department = departments.find((item) => item.id === id)

  if (!department) {
    return (
      <>
        <PageHeader title="Department Not Found" breadcrumbs={[{ label: 'Departments', to: '/departments' }, { label: 'Not Found' }]} />
        <section className="section">
          <div className="container text-center">
            <p className="lead-text">The department you are looking for does not exist.</p>
            <Link to="/departments" className="btn btn-brand">
              <Icon name="arrow-right" size={17} className="icon-flip" />
              Back to Departments
            </Link>
          </div>
        </section>
      </>
    )
  }

  const members = faculty[department.id] || []

  return (
    <>
      <PageHeader
        title={department.name}
        subtitle={department.tagline}
        breadcrumbs={[{ label: 'Departments', to: '/departments' }, { label: department.code }]}
      />

      <section className="section" style={{ '--dept-accent': department.accent }}>
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-7">
              <div className="dept-detail-head">
                <span className="dept-detail-icon">
                  <Icon name={department.icon} size={30} />
                </span>
                <div>
                  <h2 className="mb-1">{department.name}</h2>
                  <span className="dept-detail-code">Branch Code: {department.code}</span>
                </div>
              </div>
              <p className="lead-text">{department.about}</p>
              <h4 className="mt-4 mb-3">Focus Areas</h4>
              <ul className="highlight-grid list-unstyled">
                {department.highlights.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={15} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5">
              <div className="dept-side-card">
                <h4>Department Snapshot</h4>
                <ul className="snapshot-list list-unstyled mb-0">
                  <li>
                    <span>Head of Department</span>
                    <strong>{department.hodLabel}</strong>
                  </li>
                  <li>
                    <span>Faculty</span>
                    <strong>{department.facultyCountLabel}</strong>
                  </li>
                  <li>
                    <span>Programme</span>
                    <strong>4 Years (B.E. / B.Tech)</strong>
                  </li>
                  <li>
                    <span>Laboratories</span>
                    <strong>{department.labs.length} listed</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="labs">
        <div className="container">
          <SectionTitle eyebrow="Practical Learning" title="Laboratories" align="center" />
          <div className="row g-4">
            {department.labs.map((lab) => (
              <div key={lab.name} className="col-md-6 col-lg-4">
                <div className="lab-card h-100">
                  <span className="lab-icon">
                    <Icon name="flask" size={22} />
                  </span>
                  <h4>{lab.name}</h4>
                  <p className="mb-0">{lab.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faculty">
        <div className="container">
          <SectionTitle
            eyebrow="Our People"
            title="Faculty Information"
            subtitle="Faculty details are maintained by the college and marked as placeholders here."
            align="center"
          />
          <div className="row g-4">
            {members.map((member) => (
              <div key={member.role} className="col-md-6 col-lg-4">
                <FacultyCard member={member} />
              </div>
            ))}
          </div>
          <div className="note-box mt-4">
            <Icon name="info" size={20} />
            <p className="mb-0">{facultyNote}</p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h3 className="mb-1">Explore more departments</h3>
            <p className="mb-0 text-muted-c">Compare branches and their focus areas.</p>
          </div>
          <Link to="/departments" className="btn btn-brand">
            All Departments
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
