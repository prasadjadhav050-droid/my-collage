import { Link } from 'react-router-dom'
import HeroBanner from '../components/HeroBanner'
import SectionTitle from '../components/SectionTitle'
import QuickLinks from '../components/QuickLinks'
import NoticeBoard from '../components/NoticeBoard'
import DepartmentCard from '../components/DepartmentCard'
import FacilityCard from '../components/FacilityCard'
import EventCard from '../components/EventCard'
import StatCard from '../components/StatCard'
import LocationSection from '../components/LocationSection'
import Icon from '../components/Icon'
import { college } from '../data/college'
import { departments } from '../data/departments'
import { facilities } from '../data/facilities'
import { events } from '../data/events'

export default function Home() {
  return (
    <>
      <HeroBanner />

      <section className="section section-quick">
        <div className="container">
          <SectionTitle
            eyebrow="Explore"
            title="Quick Access"
            subtitle="Everything a student needs, just a click away."
            align="center"
          />
          <QuickLinks />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className="col-lg-6">
              <SectionTitle
                eyebrow={college.trustName}
                title="Welcome to Sant Eknath College of Engineering"
              />
              <p className="lead-text">{college.about}</p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <Link to="/about" className="btn btn-brand">
                  <Icon name="info" size={17} />
                  About College
                </Link>
                <Link to="/departments" className="btn btn-outline-brand">
                  <Icon name="building" size={17} />
                  Our Departments
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
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

      <section className="section section-muted" id="notices">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <SectionTitle
              eyebrow="Notice Board"
              title="Latest News & Announcements"
              subtitle="Searchable updates on exams, admissions, events and academics."
            />
            <Link to="/student-corner" className="btn btn-outline-brand">
              View all notices
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
          <NoticeBoard limit={3} showToolbar={false} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Engineering Branches"
            title="Departments"
            subtitle="Four undergraduate programmes designed for a strong engineering foundation."
            align="center"
          />
          <div className="row g-4">
            {departments.map((department) => (
              <div key={department.id} className="col-md-6 col-xl-3">
                <DepartmentCard department={department} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <SectionTitle
            eyebrow="Campus Life"
            title="Facilities at a Glance"
            subtitle="Learning resources, laboratories and amenities that support students every day."
            align="center"
            light
          />
          <div className="row g-4">
            {facilities.slice(0, 3).map((facility) => (
              <div key={facility.id} className="col-md-6 col-lg-4">
                <FacilityCard facility={facility} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/facilities" className="btn btn-light btn-lg">
              <Icon name="library" size={18} />
              Explore All Facilities
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
            <SectionTitle
              eyebrow="What's Happening"
              title="Events & Activities"
              subtitle="Workshops, technical activities, sports and celebrations on campus."
            />
            <Link to="/student-corner" className="btn btn-outline-brand">
              All events
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
          <div className="row g-4">
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="col-md-6 col-lg-4">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cta">
        <div className="container">
          <div className="cta-box">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7">
                <h2 className="cta-title">Have a question about admissions or courses?</h2>
                <p className="cta-text mb-0">
                  Reach out to the college office or send us an enquiry. Our team will be happy to help.
                </p>
              </div>
              <div className="col-lg-5 d-flex gap-2 flex-wrap justify-content-lg-end">
                <Link to="/contact" className="btn btn-light btn-lg">
                  <Icon name="send" size={18} />
                  Contact Us
                </Link>
                <a href={`tel:${college.phones[1]}`} className="btn btn-outline-light btn-lg">
                  <Icon name="phone" size={18} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  )
}
