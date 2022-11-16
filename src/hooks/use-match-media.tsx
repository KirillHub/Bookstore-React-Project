import { useState, useLayoutEffect } from 'react';

export type IMediaQuery = Array<string>

export type IMatchedMedia = Array<boolean>

// export default function useMatchMedia (queries: IMediaQuery, defaults?: IMatchedMedia): IMatchedMedia


const queries = [
	'(max-width: 766px)',
	'(max-width: 767px) and (max-width: 1199px)',
	'(min-width: 1200px)'
];

export function useMatchMedia () {
	const mediaQueryLists = queries.map(query => matchMedia(query));

	const getValues = mediaQueryLists.map(mql => mql.matches);

	const [values, setValues] = useState(getValues);

	useLayoutEffect(() => {
		const handler = () => setValues(getValues);

		mediaQueryLists.forEach(mql => mql.addEventListener('change', handler));

		return () : void => mediaQueryLists.forEach(mql => mql.removeEventListener('change', handler));
	});

	return ['isMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
		...acc,
		[screen]: values[index]
	}), {});

}