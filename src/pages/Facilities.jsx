import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import FacilityCard from '../components/FacilityCard'
import Icon from '../components/Icon'
import { facilities } from '../data/facilities'
import { college } from '../data/college'

export default function Facilities() {
  return (
    <>
      <PageHeader
        title="Facilities"
        subtitle="Library, laboratories, computer labs, sports, transportation and more."
        breadcrumbs={[{ label: 'Facilities' }]}
      />

      <section className="section" id="library">
        <div className="container">
          <div className="library-highlight">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4">
                <img src="/images/gallery/img12.jpg" alt="Central Library" className="library-image" />
              </div>
              <div className="col-lg-8">
                <SectionTitle eyebrow="Learning Hub" title="Central Library" />
                <p>
                  The central library is a key learning resource for students, offering textbooks, reference
                  material, journals and newspapers along with a Book Bank facility.
                </p>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="library-stat">
                      <Icon name="book" size={20} />
                      <span>{college.library.volumes}</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="library-stat">
                      <Icon name="user" size={20} />
                      <span>{college.library.bookBank}</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="library-stat">
                      <Icon name="file-text" size={20} />
                      <span>{college.library.newspapers}</span>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="library-stat">
                      <Icon name="globe" size={20} />
                      <span>{college.library.journals}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionTitle
            eyebrow="Campus Amenities"
            title="Facilities Available"
            subtitle="Explore the facilities that support learning and student life on campus."
            align="center"
          />
          <div className="row g-4">
            {facilities.map((facility) => (
              <div key={facility.id} className="col-md-6 col-lg-4">
                <FacilityCard facility={facility} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="note-box">
            <Icon name="info" size={20} />
            <p className="mb-0">
              Facility details such as canteen services and transport routes are indicative. For current
              information, please contact the college office.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
