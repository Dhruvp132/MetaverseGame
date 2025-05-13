import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('user')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    const endpoint = isSignup ? '/signup' : '/signin'
    const body = isSignup
      ? { username, password, type }
      : { username, password }
    try {
      const res = await fetch(`http://localhost:3000/api/v1${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      const data = await res.json()
      if (!res.ok) {
        setMessage(data.message || 'Something went wrong')
      } else {
        localStorage.setItem('token', data.token)
        navigate(`/spaces`)
        setMessage(isSignup ? `Signup successful! User ID: ${data.userId}` : `Signin successful! Token: ${data.token}`)
      }
    } catch (err) {
      setMessage('Network error')
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 24 }}>
      <h2>{isSignup ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {isSignup && (
          <div>
            <label>Type:</label>
            <select value={type} onChange={e => setType(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        )}
        <button type="submit">{isSignup ? 'Sign Up' : 'Sign In'}</button>
      </form>
      <button onClick={() => setIsSignup(!isSignup)} style={{ marginTop: 12 }}>
        {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
      {message && <div style={{ marginTop: 16, color: 'red' }}>{message}</div>}
    </div>
  )
}

export default Login