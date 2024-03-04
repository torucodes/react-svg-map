// Import useState and useEffect
import React, { useState, useEffect } from 'react';
import fetchData from '../taiwan.main';
import { RadioSVGMap } from '../../../src/';
import { getLocationName } from '../utils';

const RadioMap = () => {
    const [pointedLocation, setPointedLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapData, setMapData] = useState(null);

    const handleLocationMouseOver = (event) => {
        const pointedLocation = getLocationName(event);
        setPointedLocation(pointedLocation);
    };

    const handleLocationMouseOut = () => {
        setPointedLocation(null);
    };

    const handleOnChange = (selectedNode) => {
        const selectedLocation = selectedNode.attributes.name.value;
        setSelectedLocation(selectedLocation);
        openPopup(selectedLocation); // Open the popup window with the selected location
    };

    const openPopup = (location) => {
        const width = 400; // Width of the pop-up window
        const height = 300; // Height of the pop-up window
        const left = (window.innerWidth - width) / 2; // Calculate the left position
        const top = (window.innerHeight - height) / 2; // Calculate the top position

        const popupWindow = window.open('', '_blank', `width=${width},height=${height},left=${left},top=${top}`);
        popupWindow.document.write(`<p>You selected: ${location}</p>`);
    };

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const data = await fetchData();
                setMapData(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDataAsync();
    }, []);

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
                        onChange={handleOnChange}
                    />
                )}
            </div>
        </article>
    );
};

export default RadioMap;
