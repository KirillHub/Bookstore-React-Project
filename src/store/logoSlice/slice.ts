import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LogoSliceState, Status, Logo } from './types'
import axios from '../../backend/axios';


export const fetchLogo = createAsyncThunk<Logo>('logo/fetchLogo', async () => {
	const { data } = await axios.get<Logo>('/logo');
	return data;
});

const initialState: LogoSliceState = {
	value: 0,
	logo: [],
	status: Status.LOADING,
};


export const logoSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: { //! не асинх. код
		setChangeLogoInfoObj: (state, action) => {
			switch (action.type) {

				default:
					return state;
			}
		},
		setChangeLogoInfoTest: (state) => {
			// state.value + 1;
		}
		/*
		в reducers можно добавлять сколько угодно методов
		*/
	},
	/*============================================================================================================*/
	extraReducers: (builder) => { //! работа с асинх. код
		builder.addCase(fetchLogo.pending, (state) => { //? abbCase (switch&case)
			state.status = Status.LOADING;
		});
		builder.addCase(fetchLogo.fulfilled, (state, action) => {
			state.logo = action.payload;
			state.status = Status.SUCCESS;
		});
		builder.addCase(fetchLogo.rejected, (state) => {
			state.status = Status.ERROR;
		});
	},
})

// Action creators are generated for each case reducer function
export const { setChangeLogoInfoObj } = logoSlice.actions

export const logoReducer = logoSlice.reducer