import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { logoReducer } from './logoSlice/slice';
import { booksReducer } from './bookSlice/slice';

export const store = configureStore({
	reducer: {
		headerLogo: logoReducer,
		booksList: booksReducer,
	},
})


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


/*
useAppSelector  
useAppDispatch - это даннные, записанные в store.dispatch, function
хуки, которые обязательны для импорта
*/

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();