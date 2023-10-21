import { LASTFM_KEY, LASTFM_SECRET, LASTFM_USER } from "$env/static/private";

const BASE_URL = "https://ws.audioscrobbler.com/2.0";
const METHOD = "user.getRecentTracks&limit=1";

export default async function () {
	const response = await fetch(`${BASE_URL}/?method=${METHOD}&user=${LASTFM_USER}&api_key=${LASTFM_KEY}&format=json`, {
		method: "GET",
		headers: { "User-Agent": "cirroskais/1.0" }
	});

	return response.json();
}
