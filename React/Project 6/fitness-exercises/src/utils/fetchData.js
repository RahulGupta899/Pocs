// From RAPIDAPI- ExerciseDB API

export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


export const YoutubeSearchOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


// ACTUAL FUNCTION that calls the API using fetch()
export const fetchData = async function(url,options){
    const res = await fetch(url,options);
    const data = await res.json();
    return data;
}