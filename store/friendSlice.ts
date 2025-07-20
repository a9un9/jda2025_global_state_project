import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FriendState {
  list: string[]
}

const initialState: FriendState = {
  list: [],
}

const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
    addFriend: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload)
    },
  },
})

export const { addFriend } = friendSlice.actions
export default friendSlice.reducer
