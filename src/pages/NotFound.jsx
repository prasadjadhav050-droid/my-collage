import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container text-center">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="lead-text">Sorry, the page you are looking for could not be found.</p>
        <div className="d-flex justify-content-center gap-2 flex-wrap">
          <Link to="/" className="btn btn-brand btn-lg">
            <Icon name="arrow-right" size={18} className="icon-flip" />
            Back to Home
          </Link>
          <Link to="/student-corner" className="btn btn-outline-brand btn-lg">
            <Icon name="bell" size={18} />
            Student Corner
          </Link>
        </div>
      </div>
    </section>
  )
}
