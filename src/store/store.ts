import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { logoReducer } from './logoSlice/slice';
import { booksReducer } from './booksSlice/slice';
// import { api } from './services/auth';
import authReducer from "./authSlice/authSlice"

export const store = configureStore({
	reducer: {
		headerLogo: logoReducer,
		booksList: booksReducer,
		// [api.reducerPath]: api.reducer,
		// auth: authReducer
	},

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();