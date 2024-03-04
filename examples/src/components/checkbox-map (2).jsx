/* eslint-disable no-console */
import React, { useState } from 'react';
import fetchData from '../taiwan.main';
import { CheckboxSVGMap } from '../../../src/';
import { getLocationName } from '../utils';

const CheckboxMap = () => {
	const [pointedLocation, setPointedLocation] = useState(null);
	const [focusedLocation, setFocusedLocation] = useState(null);
	const [selectedLocations, setSelectedLocations] = useState([]);

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

	const handleOnChange = (selectedNodes) => {
		setSelectedLocations(selectedNodes.map(node => node.attributes.name.value));
	};

	// Assign the entire promise to a variable
	const fetchDataPromise = fetchData();

	// Use the variable with the promise logic
	

	return (
		<article className="examples__block">
			<h2 className="examples__block__title">
                Taiwan SVG map as checkboxes
			</h2>
			<div className="examples__block__info">
				<div className="examples__block__info__item">
                    Pointed location: {pointedLocation}
				</div>
				<div className="examples__block__info__item">
                    Focused location: {focusedLocation}
				</div>
				<div className="examples__block__info__item">
                    Selected locations:
					<ul>
						{selectedLocations.map(location => (<li key={location}>{location}</li>))}
					</ul>
				</div>
			</div>
			<div className="examples__block__map">
				<CheckboxSVGMap
					map={fetchDataPromise
						.then(data => {
							console.log('Fetched Data:', data);
							// Do something with the fetched data
						})
						.catch(error => {
							console.error('Error:', error);
						})
					}
					onLocationMouseOver={handleLocationMouseOver}
					onLocationMouseOut={handleLocationMouseOut}
					onLocationFocus={handleLocationFocus}
					onLocationBlur={handleLocationBlur}
					onChange={handleOnChange}
				/>
			</div>
		</article>
	);
};

export default CheckboxMap;