'use client'

import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '@/store'
import { updateFriend } from '@/store/friendSlice'
import Link from 'next/link'
import { useState } from 'react'

export default function UpdatePage() {
  const friends = useSelector((state: RootState) => state.friend.list)
  const dispatch = useDispatch<AppDispatch>()

  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [newName, setNewName] = useState('')

  const startEdit = (index: number, currentName: string) => {
    setEditIndex(index)
    setNewName(currentName)
  }

  const handleUpdate = () => {
    if (editIndex !== null && newName.trim()) {
      dispatch(updateFriend({ index: editIndex, newName }))
      setEditIndex(null)
      setNewName('')
    }
  }

  return (
    <main style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{
                fontSize: '2rem',
                marginBottom: '20px',
            }}>Ubah Teman</h1>
      
      <div
        style={{
            backgroundColor: '#f9f9f9',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}>
      {friends.length === 0 ? (
        <p style={{
            fontStyle: 'italic',
            color: '#666',
        }}>Belum ada teman untuk diubah.</p>
      ) : (
        <ul style={{ 
            padding: 0, 
            listStyle: 'none', 
            marginTop: '20px' 
            }}>
          {friends.map((friend, index) => (
            <li
              key={index}
              style={{
                marginBottom: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #ddd',
                padding: '10px',
                borderRadius: '6px',
                backgroundColor: '#fff',
              }}
            >
              {editIndex === index ? (
                <>
                  <input
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    style={{ flex: 1, marginRight: '10px' }}
                  />
                  <button
                    onClick={handleUpdate}
                    style={{
                      backgroundColor: '#4caf50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                    }}
                  >
                    Simpan
                  </button>
                </>
              ) : (
                <>
                  <span>👤 {friend}</span>
                  <button
                    onClick={() => startEdit(index, friend)}
                    style={{
                      backgroundColor: '#2196f3',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '6px 12px',
                      cursor: 'pointer',
                    }}
                  >
                    Ubah
                  </button>
                </>
              )}
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
