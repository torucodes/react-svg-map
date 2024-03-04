/* eslint-disable no-console */
import 'regenerator-runtime/runtime';

const exportData = async () => {
	try {
		

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