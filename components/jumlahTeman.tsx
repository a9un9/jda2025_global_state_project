'use client'

import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

export default function jumlahTeman() {
  const jumlah = useSelector((state: RootState) => state.friend.list.length)

  return <p>Jumlah teman: <strong>{jumlah}</strong></p>
}
