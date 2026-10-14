import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Icon from './Icon'
import { courses } from '../data/academics'

const enquirySchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  email: z.email('Enter a valid email address'),
  mobile: z
    .string()
    .trim()
    .regex(/^[6-9][0-9]{9}$/, 'Enter a valid 10-digit mobile number'),
  course: z.string().min(1, 'Please select a course'),
  message: z.string().trim().min(10, 'Please write at least 10 characters'),
})

const courseOptions = [
  { value: '', label: 'Select a course' },
  ...courses.slice(0, 4).map((course) => ({ value: course.name, label: course.name })),
  { value: 'Other / General Enquiry', label: 'Other / General Enquiry' },
]

export default function EnquiryForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(enquirySchema) })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="enquiry-success">
        <span className="enquiry-success-icon">
          <Icon name="check" size={26} />
        </span>
        <h4>Thank you for your enquiry!</h4>
        <p className="mb-3">
          This is a frontend demo. Your details were <strong>not</strong> sent anywhere — no backend is connected.
        </p>
        <button type="button" className="btn btn-brand" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className={`enquiry-form ${compact ? 'enquiry-form-compact' : ''}`} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="enq-name">Full Name</label>
          <input
            id="enq-name"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Enter your full name"
            {...register('name')}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="enq-mobile">Mobile Number</label>
          <input
            id="enq-mobile"
            type="tel"
            inputMode="numeric"
            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
            placeholder="10-digit mobile number"
            {...register('mobile')}
          />
          {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="enq-email">Email</label>
          <input
            id="enq-email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="you@example.com"
            {...register('email')}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="enq-course">Course</label>
          <select
            id="enq-course"
            className={`form-select ${errors.course ? 'is-invalid' : ''}`}
            defaultValue=""
            {...register('course')}
          >
            {courseOptions.map((option) => (
              <option key={option.value} value={option.value} disabled={option.value === ''}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.course && <div className="invalid-feedback">{errors.course.message}</div>}
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="enq-message">Message</label>
          <textarea
            id="enq-message"
            rows={compact ? 3 : 4}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            placeholder="How can we help you?"
            {...register('message')}
          />
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>

        <div className="col-12 d-flex align-items-center gap-3 flex-wrap">
          <button type="submit" className="btn btn-brand btn-lg" disabled={isSubmitting}>
            <Icon name="send" size={18} />
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
          </button>
          <span className="form-note">
            <Icon name="info" size={15} />
            Demo form — no data is submitted.
          </span>
        </div>
      </div>
    </form>
  )
}
