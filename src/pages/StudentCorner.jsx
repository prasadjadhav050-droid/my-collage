import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import NoticeBoard from '../components/NoticeBoard'
import EventCard from '../components/EventCard'
import Icon from '../components/Icon'
import { events } from '../data/events'
import { notices } from '../data/notices'
import { examination } from '../data/academics'

const supportCells = [
  { icon: 'shield', title: 'Grievance Redressal Cell', text: 'For student grievances and complaints.' },
  { icon: 'users', title: 'Anti-Ragging Committee', text: 'Zero tolerance policy on ragging.' },
  { icon: 'info', title: 'Internal Complaint Committee', text: 'Support related to campus safety.' },
  { icon: 'user', title: 'SC / ST Committee', text: 'Support and representation cell.' },
]

export default function StudentCorner() {
  const holidays = notices.filter((notice) => notice.category === 'Holiday')
  const examNotices = notices.filter((notice) => notice.category === 'Examination')

  return (
    <>
      <PageHeader
        title="Student Corner"
        subtitle="Notices, exam updates, results, holidays, events and student support."
        breadcrumbs={[{ label: 'Student Corner' }]}
      />

      <section className="section" id="notices">
        <div className="container">
          <SectionTitle
            eyebrow="Notice Board"
            title="Circulars & Notices"
            subtitle="Search and filter announcements by category."
            align="center"
          />
          <NoticeBoard />
        </div>
      </section>

      <section className="section section-muted" id="updates">
        <div className="container">
          <SectionTitle eyebrow="Stay Updated" title="Exam Updates & Results" align="center" />
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="update-card h-100">
                <span className="update-icon">
                  <Icon name="file-text" size={22} />
                </span>
                <h3>Examination Updates</h3>
                <ul className="check-list list-unstyled mb-0">
                  {examNotices.slice(0, 3).map((notice) => (
                    <li key={notice.id}>
                      <Icon name="dot-circle" size={15} />
                      {notice.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="update-card h-100">
                <span className="update-icon">
                  <Icon name="award" size={22} />
                </span>
                <h3>Results & University Portal</h3>
                <p>
                  Results are declared by Dr. Babasaheb Ambedkar Technological University. Use the official
                  university portal to check verified results.
                </p>
                <a
                  href="https://dbatu.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-brand"
                >
                  <Icon name="external-link" size={17} />
                  Check University Results
                </a>
              </div>
            </div>
          </div>
          <div className="note-box mt-4">
            <Icon name="info" size={20} />
            <p className="mb-0">{examination.disclaimer}</p>
          </div>
        </div>
      </section>

      <section className="section" id="events">
        <div className="container">
          <SectionTitle
            eyebrow="Campus Activities"
            title="Events, Workshops & Technical Activities"
            subtitle="A snapshot of activities planned for students across the semester."
            align="center"
          />
          <div className="row g-4">
            {events.map((event) => (
              <div key={event.id} className="col-md-6 col-lg-4">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="holidays">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <SectionTitle eyebrow="Calendar" title="Holidays" />
              <p>Institute holidays are declared as per the academic calendar and government notifications.</p>
              <ul className="check-list list-unstyled mb-0">
                {holidays.map((holiday) => (
                  <li key={holiday.id}>
                    <Icon name="calendar" size={15} />
                    {holiday.title}
                  </li>
                ))}
                <li>
                  <Icon name="calendar" size={15} />
                  Other holidays as declared by the institute
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <SectionTitle eyebrow="Support" title="Student Support Cells" />
              <div className="row g-3">
                {supportCells.map((cell) => (
                  <div key={cell.title} className="col-sm-6">
                    <div className="support-card h-100">
                      <span className="support-icon">
                        <Icon name={cell.icon} size={20} />
                      </span>
                      <h4>{cell.title}</h4>
                      <p className="mb-0">{cell.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link to="/contact" className="btn btn-outline-brand">
                  <Icon name="chat" size={17} />
                  Contact the College
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
