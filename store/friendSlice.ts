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

    removeFriend: (state, action: PayloadAction<number>) => {
    state.list.splice(action.payload, 1)
    },

    updateFriend: (state, action: PayloadAction<{ index: number; newName: string }>) => {
      const { index, newName } = action.payload
      if (state.list[index]) {
        state.list[index] = newName
      }
    }

  },
})

export const { addFriend, removeFriend, updateFriend } = friendSlice.actions
export default friendSlice.reducer
