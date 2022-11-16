import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { fetchLogo } from "../../../../store/logoSlice/slice";
import Waiting from '../../../../Components/DataStatusLoading/Waiting/Waiting';
import BookSVG from '../../../../SVG-components/BookSVG';
import './Logo.scss'


export interface TDataLogo {
	shopTitle: string;
	shopSubTitle: string;
}


const LogoTitleElements: React.FC<TDataLogo> = ({ shopTitle, shopSubTitle }: TDataLogo) => {

	return (
		<div
			className='header__logo-text'>
			<p className='header__title'> {shopTitle} </p>
			<p className='header__subtitle'> {shopSubTitle} </p>
		</div>
	);
}


export const Logo = () => {
	const dispatch = useAppDispatch();
	const headerLogo = useAppSelector(state => state.headerLogo);

	useEffect(() => {
		dispatch(fetchLogo())
	}, []);

	const CompliteLogoBlock = () => {

		return (
			<>
				{headerLogo.logo.map((titleElem: TDataLogo, i: number) =>
					<LogoTitleElements
						key={i}
						shopSubTitle={titleElem.shopSubTitle}
						shopTitle={titleElem.shopTitle} />)}
			</>
		)
	};

	return (
		<div
			className="header__logo">

			{headerLogo.logo.length === 0 ? <Waiting /> :
				<>
					<BookSVG /> <CompliteLogoBlock />
				</>}
		</div>
	)
}



