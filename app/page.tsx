'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import Link from 'next/link'

export default function HomePage() {
  const friends = useSelector((state: RootState) => state.friend.list)

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Daftar Teman</h1>

      <Link href="/tambah" style={styles.addButton}>
        Tambah Teman
      </Link>

      <div style={styles.listContainer}>
        {friends.length === 0 ? (
          <p style={styles.empty}>Belum ada teman. Tambahkan sekarang!</p>
        ) : (
          <ul style={styles.list}>
            {friends.map((friend, i) => (
              <li key={i} style={styles.listItem}>
                👤 {friend}
              </li>
            ))}
          </ul>
        )}
      </div>
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
    marginBottom: '20px',
  },
  addButton: {
    display: 'inline-block',
    marginBottom: '30px',
    padding: '10px 18px',
    backgroundColor: '#0070f3',
    color: '#fff',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 500,
  },
  listContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: '10px 15px',
    borderRadius: '6px',
    marginBottom: '10px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
  },
  empty: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#666',
  },
}
