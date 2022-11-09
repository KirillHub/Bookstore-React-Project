import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { fetchLogo, setChangeLogoInfoObj } from "../../../../store/logoSlice/slice";


interface TLogo {
	(): void;
	axiosData: TDataLogo
}

interface TDataLogo {
	shopTitle: string;
	shopSubTitle: string;
}


const Title: React.FC<TDataLogo> = ({ shopTitle, shopSubTitle }: TDataLogo) => {

	return (
		<div>
			<p
				className='title'> {shopTitle} </p>
			<p
				className='subtitle'> {shopSubTitle} </p>
		</div>
	)
}


export const Logo = () => {
	const dispatch = useAppDispatch();
	const headerLogo = useAppSelector((state) => state.headerLogo);


	const [title, setTitle] = useState<any>([]);

	//? как правильно присвоить элементы интерфейса TDataLogo?
	const axiosReqTitle = async () => {
		const link = 'http://localhost:8000/logo';
		const response = await axios.get<TDataLogo[]>(link)

		setTitle(response.data)
	};

	useEffect(() => {
		dispatch(fetchLogo())
	}, [])



	return (
		<div
			className="header__logo">
			<button
				onClick={() => dispatch(setChangeLogoInfoObj(headerLogo.logo))}
			>click</button>
			{headerLogo.logo.map((item, i) =>
				<div key={i} >
					<span>
						{item.shopTitle}
					</span>
					<span>
						{item.shopSubTitle}
					</span>
				</div>)}
		</div>
	)
}




/*

export const Logo = () => {
	const dispatch = useAppDispatch();
	const state = useAppSelector((state) => state);


	
	console.log(state);
	const [title, setTitle] = useState<any>([]);

	//? как правильно присвоить элементы интерфейса TDataLogo?
	const axiosReqTitle = async () => {
		const link = 'http://localhost:8000/logo';
		const response = await axios.get<TDataLogo[]>(link)

		setTitle(response.data)
	};

	useEffect(() => {
		dispatch(fetchLogo())
	}, [])



	return (
		<div
			className="header__logo">
			<button
				onClick={() => dispatch(setChangeLogoInfoObj(state.headerLogo.logo))}
			>click</button>

		</div>
	)
}


*/