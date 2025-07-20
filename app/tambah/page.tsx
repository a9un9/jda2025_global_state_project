'use client'

import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addFriend } from '@/store/friendSlice'
import type { AppDispatch } from '@/store'
import Link from 'next/link'

export default function TambahPage() {
  const [name, setName] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addFriend(name))
      setName('')
    }
  }

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Tambah Teman</h1>

      <div style={styles.formGroup}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama teman"
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.button}>
          Tambah
        </button>
      </div>

      <p style={styles.backLink}>
        <Link href="/">← Kembali ke daftar</Link>
      </p>
    </main>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '40px 20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
  formGroup: {
    display: 'flex',
    gap: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    padding: '10px 18px',
    backgroundColor: '#0070f3',
    color: '#fff',
    fontWeight: 500,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  backLink: {
    marginTop: '30px',
    display: 'inline-block',
  },
}
