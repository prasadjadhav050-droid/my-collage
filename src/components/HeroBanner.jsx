import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { college } from '../data/college'

const slides = [
  {
    image: '/images/slide1.jpg',
    eyebrow: "Shiva Trust's",
    title: 'Sant Eknath College of Engineering',
    text: 'Engineering education with quality training, modern laboratories and a supportive campus environment.',
  },
  {
    image: '/images/slide2.jpg',
    eyebrow: 'Approved by AICTE & DTE',
    title: 'Build Your Engineering Career',
    text: 'Undergraduate programmes in Computer Science, Mechanical, Electrical and Artificial Intelligence.',
  },
  {
    image: '/images/slide3.jpg',
    eyebrow: 'Affiliated to BATU, Lonere',
    title: 'Learn. Innovate. Succeed.',
    text: 'Hands-on laboratories, experienced guidance and opportunities to grow beyond the classroom.',
  },
  {
    image: '/images/slide4.jpg',
    eyebrow: 'Welcome to Our Campus',
    title: 'Your Campus Life, All in One Place',
    text: 'Access notices, academics, facilities, placements and events through this student portal.',
  },
]

const heroCtas = [
  { label: 'Explore Departments', to: '/departments', icon: 'building', primary: true },
  { label: 'Student Corner', to: '/student-corner', icon: 'bell', primary: false },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <section className="hero-section" aria-label="Highlights">
      <div
        className="hero-slide"
        style={{ backgroundImage: `url(${slides[current].image})` }}
        role="img"
        aria-label={slides[current].title}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="hero-eyebrow">{slides[current].eyebrow}</span>
          <h1 className="hero-title">{slides[current].title}</h1>
          <p className="hero-text">{slides[current].text}</p>
          <div className="hero-actions">
            {heroCtas.map((cta) => (
              <Link
                key={cta.to}
                to={cta.to}
                className={cta.primary ? 'btn btn-brand btn-lg' : 'btn btn-outline-light btn-lg'}
              >
                <Icon name={cta.icon} size={18} />
                {cta.label}
              </Link>
            ))}
          </div>
        </div>

        <button type="button" className="hero-nav hero-nav-prev" aria-label="Previous slide" onClick={() => goTo(current - 1)}>
          <Icon name="chevron-right" size={22} className="hero-nav-flip" />
        </button>
        <button type="button" className="hero-nav hero-nav-next" aria-label="Next slide" onClick={() => goTo(current + 1)}>
          <Icon name="chevron-right" size={22} />
        </button>

        <div className="hero-dots" role="tablist" aria-label="Choose slide">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              role="tab"
              aria-selected={index === current}
              aria-label={`Slide ${index + 1}`}
              className={`hero-dot ${index === current ? 'active' : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-strip">
          {college.approvals.map((item) => (
            <div key={item} className="hero-strip-item">
              <Icon name="check" size={16} />
              <span>{item}</span>
            </div>
          ))}
          <div className="hero-strip-item">
            <Icon name="graduation-cap" size={16} />
            <span>{college.affiliation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
