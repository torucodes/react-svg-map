import { useState, useEffect } from 'react';

const Fetch = async () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('http://localhost:7028/api/user');
				const fetchedData = await res.json();
				//console.log(fetchedData);
				setData(fetchedData);
			} catch (error) {
				//console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	// Return the data variable
	return data;
};

export default Fetch;