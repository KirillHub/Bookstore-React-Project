import React from "react";
import axios from "axios";


interface TImage {
	id: number;
	imageUrl: string;
	img: string;
}

export default function Picture() {

	const [appState, setAppState] = React.useState<TImage[]>();

	React.useEffect(() => {

		const apiUrl = 'http://localhost:8000/books';

		axios.get(apiUrl).then((resp) => {

			console.log(resp);

			const allPersons = resp?.data;
			setAppState(allPersons);

		});
	}, [setAppState]);

	console.log(appState);

	// iterationData(appState)

	return (
		<div className='pic'>
			<img src={appState!?.[10]?.imageUrl} height='100' width='100' alt="" />
		</div>
	)
}


function iterationData(data: any) {
	console.log(data);

}

// export { }