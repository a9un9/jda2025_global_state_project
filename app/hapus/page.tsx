'use client'

import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'
import { removeFriend } from '@/store/friendSlice'
import Link from 'next/link'

const styles: { [key: string]: React.CSSProperties } = {
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  listContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  listItem: {
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '6px',
    fontSize: '16px',
    backgroundColor: '#fff',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  removeButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 12px',
    cursor: 'pointer',
  },
  empty: {
    fontStyle: 'italic',
    color: '#666',
  },
}

export default function HapusPage() {
  const friends = useSelector((state: RootState) => state.friend.list)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <main style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={styles.title}>Hapus Teman</h1>
      <div style={styles.listContainer}>
        {friends.length === 0 ? (
          <p style={styles.empty}>Belum ada teman untuk dihapus.</p>
        ) : (
          <ul style={styles.list}>
            {friends.map((friend, index) => (
              <li key={index} style={styles.listItem}>
                <span>👤 {friend}</span>
                <button
                  onClick={() => dispatch(removeFriend(index))}
                  style={styles.removeButton}
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p style={{ marginTop: '30px' }}>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
          ← Kembali ke daftar
        </Link>
      </p>
    </main>
  )
}
