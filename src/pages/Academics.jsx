import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import Icon from '../components/Icon'
import { academicCalendar, courses, examination, syllabus, timetable } from '../data/academics'

export default function Academics() {
  return (
    <>
      <PageHeader
        title="Academics"
        subtitle="Courses, syllabus, timetable, academic calendar and examination information."
        breadcrumbs={[{ label: 'Academics' }]}
      />

      <section className="section" id="courses">
        <div className="container">
          <SectionTitle
            eyebrow="Programmes"
            title="Courses Offered"
            subtitle="Undergraduate engineering programmes affiliated to BATU, Lonere."
            align="center"
          />
          <div className="row g-4">
            {courses.map((course) => (
              <div key={course.id} className="col-md-6 col-xl-3">
                <div className="course-card h-100">
                  <span className="course-code">{course.code}</span>
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <ul className="course-meta list-unstyled mb-0">
                    <li>
                      <Icon name="clock" size={15} />
                      {course.duration}
                    </li>
                    <li>
                      <Icon name="users" size={15} />
                      {course.intakeLabel}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="syllabus">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <SectionTitle eyebrow="Curriculum" title="Syllabus Overview" />
              <p>
                The syllabus follows the scheme prescribed by the university. The overview below shows how the
                curriculum progresses across the four years of study.
              </p>
              <div className="note-inline">
                <Icon name="file-text" size={16} />
                Official syllabus documents are published by BATU, Lonere.
              </div>
            </div>
            <div className="col-lg-7">
              <ul className="timeline list-unstyled mb-0">
                {syllabus.map((item) => (
                  <li key={item.year} className="timeline-item">
                    <span className="timeline-dot" />
                    <div className="timeline-content">
                      <h4>{item.year}</h4>
                      <p className="mb-0">{item.subjects}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="timetable">
        <div className="container">
          <SectionTitle
            eyebrow="Schedule"
            title="Timetable"
            subtitle="A representative weekly structure. Exact timetables are displayed on department notice boards."
            align="center"
          />
          <div className="table-responsive timetable-wrap">
            <table className="table timetable-table align-middle mb-0">
              <thead>
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Morning</th>
                  <th scope="col">Afternoon</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((row) => (
                  <tr key={row.day}>
                    <th scope="row">{row.day}</th>
                    <td>{row.morning}</td>
                    <td>{row.afternoon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="calendar">
        <div className="container">
          <SectionTitle
            eyebrow="Plan Ahead"
            title="Academic Calendar"
            subtitle="Key academic milestones. Actual dates follow the university calendar."
            align="center"
          />
          <div className="row g-3">
            {academicCalendar.map((item) => (
              <div key={item.term} className="col-md-6">
                <div className="calendar-row">
                  <span className="calendar-icon">
                    <Icon name="calendar" size={18} />
                  </span>
                  <div>
                    <h4>{item.term}</h4>
                    <p className="mb-0">{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="examination">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <SectionTitle eyebrow="Assessment" title="Examination Information" />
              <p>{examination.info}</p>
              <ul className="check-list list-unstyled mb-0">
                {examination.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={15} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="exam-links">
                {examination.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noreferrer' : undefined}
                    className="exam-link"
                  >
                    <span>
                      <Icon name="external-link" size={18} />
                      {link.label}
                    </span>
                    <Icon name="arrow-right" size={16} />
                  </a>
                ))}
              </div>
              <div className="note-box mt-4">
                <Icon name="info" size={20} />
                <p className="mb-0">{examination.disclaimer}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
