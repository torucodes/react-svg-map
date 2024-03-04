/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import fetchData from '../taiwan.main';
import { RadioSVGMap } from '../../../src/';
import { getLocationName } from '../utils';

const RadioMap = () => {
	const [pointedLocation, setPointedLocation] = useState(null);
	const [focusedLocation, setFocusedLocation] = useState(null);
	const [selectedLocation, setSelectedLocation] = useState(null);
	const [mapData, setMapData] = useState(null);

	const handleLocationMouseOver = (event) => {
		const pointedLocation = getLocationName(event);
		setPointedLocation(pointedLocation);
	};

	const handleLocationMouseOut = () => {
		setPointedLocation(null);
	};

	const handleLocationFocus = (event) => {
		const focusedLocation = getLocationName(event);
		setFocusedLocation(focusedLocation);
	};

	const handleLocationBlur = () => {
		setFocusedLocation(null);
	};

	const handleOnChange = (selectedNode) => {
		setSelectedLocation(selectedNode.attributes.name.value);
	};

	useEffect(() => {
		// Inside the effect, we can use async/await syntax
		const fetchDataAsync = async () => {
			try {
				const data = await fetchData();
				setMapData(data);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		// Call the asynchronous function
		fetchDataAsync();
	}, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

	return (
		<article className="examples__block">
			<h2 className="examples__block__title">Radio Buttons</h2>
			<div className="examples__block__info">
				<div className="examples__block__info__item">Pointed: {pointedLocation}</div>
				<div className="examples__block__info__item">Selected: {selectedLocation}</div>
			</div>
			<div className="examples__block__map examples__block__map--australia">
				{mapData && (
					<RadioSVGMap
						map={mapData}
						onLocationMouseOver={handleLocationMouseOver}
						onLocationMouseOut={handleLocationMouseOut}
						onLocationFocus={handleLocationFocus}
						onLocationBlur={handleLocationBlur}
						onChange={handleOnChange}
					/>
				)}
			</div>
		</article>
	);
};

export default RadioMap;