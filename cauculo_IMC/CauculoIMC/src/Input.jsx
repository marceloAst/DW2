import React from 'react'

export default function Input({ label, valor, onChange }) {
  return (
    <input
      type="text"
      placeholder={label}
      value={valor}
      onChange={onChange}
      style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
    />
  )
}
