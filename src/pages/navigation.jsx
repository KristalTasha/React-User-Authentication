import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav style={{display: 'flex', gap: '0.6em'}}>
    <Link to="/landing">Landing</Link>
    <Link to="/home">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/analytics">Analytics</Link>
    <Link to="/admin">Admin</Link>
  </nav>
  )
}
