import PageHeader from '../components/PageHeader'
import SectionTitle from '../components/SectionTitle'
import DepartmentCard from '../components/DepartmentCard'
import Icon from '../components/Icon'
import { departments } from '../data/departments'

export default function Departments() {
  return (
    <>
      <PageHeader
        title="Departments"
        subtitle="Engineering branches, faculty information and laboratories."
        breadcrumbs={[{ label: 'Departments' }]}
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Engineering Branches"
            title="Our Departments"
            subtitle="Explore each department to learn about its focus areas, laboratories and curriculum highlights."
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

      <section className="section section-muted">
        <div className="container">
          <div className="note-box">
            <Icon name="info" size={20} />
            <p className="mb-0">
              Department names and branch codes reflect the programmes offered. Faculty names, laboratory
              inventories and intake details are maintained by the college; this portal shows representative
              information and marks unverified details as "to be updated".
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
