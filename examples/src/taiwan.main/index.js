/* eslint-disable no-console */
import 'regenerator-runtime/runtime';
import { useState } from 'react';

const exportData = async () => {
	try {
		const response = await fetch('https://localhost:7038/api/user');
		const data = await response.json();


		const taiwanMapData = {
			'label': 'Map of Taiwan',
			'viewBox': '0 0 1000 1295',
			'locations': [
				{
					'name': 'Taka',
					'id': '0000',
					'path': 'M621.564 406.281C621.564 402.29 624.8 399.056 628.793 399.056H676.986C680.978 399.056 684.214 402.29 684.214 406.281V449.632C684.214 453.623 680.978 456.857 676.986 456.857H628.793C624.8 456.857 621.564 453.623 621.564 449.632V406.281Z'
				},
				{
					'name': 'Toru',
					'id': '0001',
					'path': 'M 621.564 473.716 C 621.564 469.725 624.8 466.491 628.793 466.491 H 676.986 C 680.978 466.491 684.214 469.725 684.214 473.716 V 517.066 C 684.214 521.057 680.978 524.292 676.986 524.292 H 628.793 C 624.8 524.292 621.564 521.057 621.564 517.066 V 473.716 Z'
				},
				{
					'name': data[2].name,
					'id': String(data[2].id),
					'path': 'M698.672 406.281C698.672 402.29 701.908 399.056 705.901 399.056H754.094C758.087 399.056 761.323 402.29 761.323 406.281V449.632C761.323 453.623 758.087 456.857 754.094 456.857H705.901C701.908 456.857 698.672 453.623 698.672 449.632V406.281Z'
				},
				{
					'name': data[3].name,
					'id': String(data[3].id),
					'path': 'M 698.672 473.716 C 698.672 469.725 701.908 466.491 705.901 466.491 H 754.094 C 758.087 466.491 761.323 469.725 761.323 473.716 V 517.066 C 761.323 521.057 758.087 524.292 754.094 524.292 H 705.901 C 701.908 524.292 698.672 521.057 698.672 517.066 V 473.716 Z'
				}
			]
		};

		// Log the object here
		console.log(taiwanMapData);

		// Return the object
		return taiwanMapData;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

exportData.propTypes = {};

const fetchData = async () => {
	try {
		const objectData = await exportData();
		console.log(objectData);
		// Do something with objectData
	} catch (error) {
		console.error('Error:', error);
	}
};

const objectData = exportData();


console.log('This is exportData: ' + exportData);
console.log('This is objectData: ' + objectData);

export default exportData;