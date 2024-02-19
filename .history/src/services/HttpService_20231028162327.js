
const API = 'at_XsmCylIv4UdWhI0ogVOAIX3q34tDz';

export const getCurrentIp =async() =>{
	const response = await fetch('https://api.ipify.org');
return await response.text();
};

export const getIp = async ip =>{
	const response = await fetch(
		`https://geo.ipify.org/api/v2/country,city?apiKey=${API}&ipAddress=${ip}`
	);
	return await response.json();
}


