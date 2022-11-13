import { Logo } from "./components/logo/Logo";
import { useEffect } from 'react';
import { Links } from "./components/links/Links";
import './Header.scss';
import Search from "./components/search/Search";
import Purchases from "./components/purchases/Purchases";


export default function Header() {

	useEffect(() => {

	});

	return (

		<div className="header header__block">
			<Logo />
			<Links />
			<Search/>
			<Purchases/>

		</div>

	)
}
