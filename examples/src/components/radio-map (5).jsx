import React, { useState, useEffect } from 'react';
import fetchData from '../taiwan.main';
import { RadioSVGMap } from '../../../src/';
import { getLocationName } from '../utils';

const RadioMap = () => {
    const [pointedLocation, setPointedLocation] = useState(null);
    const [focusedLocation, setFocusedLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapData, setMapData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

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
        setIsModalOpen(true); // Open the modal when a location is selected
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

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <article className="examples__block">
            <h2 className="examples__block__title">Radio Buttons</h2>
            <div className="examples__block__info">
                <div className="examples__block__info__item">Pointed: {pointedLocation}</div>
                <div className="examples__block__info__item">Selected: {selectedLocation}</div>
            </div>
            <div className="examples__block__map examples__block__map--australia">
                {mapData && (
                    <div>
                        <RadioSVGMap
                            map={mapData}
                            onLocationMouseOver={handleLocationMouseOver}
                            onLocationMouseOut={handleLocationMouseOut}
                            onLocationFocus={handleLocationFocus}
                            onLocationBlur={handleLocationBlur}
                            onChange={handleOnChange}
                        />
                        {isModalOpen && (
                            <div className="modal">
                                <div className="modal-content">
                                    <span className="close" onClick={closeModal}>&times;</span>
                                    <p>You selected: {selectedLocation}</p>
                                    <label htmlFor="nameInput">Enter your name:</label>
                                    
                                    <button onClick={() => {
                                        alert(`Hello! You selected: ${selectedLocation}`);
                                        closeModal();
                                    }}>Submit</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
};

export default RadioMap;
