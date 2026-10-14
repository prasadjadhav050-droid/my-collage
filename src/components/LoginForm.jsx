import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Icon from './Icon'

const loginSchema = z.object({
  identifier: z.string().trim().min(3, 'Enter your PRN / Roll No. or email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  remember: z.boolean().optional(),
})

export default function LoginForm() {
  const [submitted, setSubmitted] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(loginSchema) })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div className="login-panel-success">
        <span className="login-panel-icon">
          <Icon name="check" size={22} />
        </span>
        <p className="mb-1">
          <strong>Demo login</strong>
        </p>
        <p className="login-panel-note mb-3">This portal has no backend, so no account is actually signed in.</p>
        <button type="button" className="btn btn-outline-brand btn-sm" onClick={() => setSubmitted(false)}>
          Back to form
        </button>
      </div>
    )
  }

  return (
    <form className="login-panel" onSubmit={handleSubmit(onSubmit)} noValidate>
      <p className="login-panel-title">
        <Icon name="user" size={16} />
        Student Login
      </p>

      <div className="mb-2">
        <label className="form-label" htmlFor="login-id">PRN / Roll No. or Email</label>
        <input
          id="login-id"
          type="text"
          autoComplete="username"
          className={`form-control form-control-sm ${errors.identifier ? 'is-invalid' : ''}`}
          placeholder="PRN, roll no. or email"
          {...register('identifier')}
        />
        {errors.identifier && <div className="invalid-feedback">{errors.identifier.message}</div>}
      </div>

      <div className="mb-2">
        <label className="form-label" htmlFor="login-password">Password</label>
        <div className="login-password">
          <input
            id="login-password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            className={`form-control form-control-sm ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Enter password"
            {...register('password')}
          />
          <button
            type="button"
            className="login-password-toggle"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            onClick={() => setShowPassword((value) => !value)}
          >
            <Icon name="eye" size={16} />
          </button>
        </div>
        {errors.password && <div className="invalid-feedback d-block">{errors.password.message}</div>}
      </div>

      <div className="form-check mb-3">
        <input className="form-check-input" type="checkbox" id="login-remember" {...register('remember')} />
        <label className="form-check-label" htmlFor="login-remember">Remember me</label>
      </div>

      <button type="submit" className="btn btn-brand btn-sm w-100" disabled={isSubmitting}>
        <Icon name="log-in" size={16} />
        {isSubmitting ? 'Signing in...' : 'Sign in'}
      </button>

      <p className="login-panel-note mb-0 mt-2">
        <Icon name="info" size={14} />
        Demo only — no backend connected.
      </p>
    </form>
  )
}
