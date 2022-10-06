import { createSlice } from '@reduxjs/toolkit';

// Cambiamos usernameSlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usernameSlice = createSlice({
		name: 'username',
    initialState: '',
    reducers: {
        changeName: (state, action) => {
          const username = action.payload
          return username
        }
    }
})

export const { changeName  } = usernameSlice.actions;

export default usernameSlice.reducer;