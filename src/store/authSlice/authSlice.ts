import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import type { AuthState, User } from './type'


const authSlice = createSlice({
	name: 'auth',
	initialState: { user: null, token: null } as AuthState,
	reducers: {
		setCredential: (
			state,
			{ payload: { user, token } }: PayloadAction<{ user: User; token: string }>
		) => {
			state.user = user
			state.token = token
		},
	},
});

export const { setCredential } = authSlice.actions;

export default authSlice.reducer;

// export const selectCurrentUser = (state: RootState) => state.auth.user;