import { SPOTIFY_ID, SPOTIFY_SECRET } from "$env/static/private";

const ACCOUNTS_URL = "https://accounts.spotify.com/api/token";
const GETTRACK_URL = "https://api.spotify.com/v1/tracks";

async function implicitFlow() {
	const request = await fetch(ACCOUNTS_URL, {
		method: "POST",
		body: new URLSearchParams({
			grant_type: "client_credentials"
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: "Basic " + new Buffer(SPOTIFY_ID + ":" + SPOTIFY_SECRET).toString("base64")
		}
	});

	return await request.json();
}

async function fetchTrack(id) {
	const authorization = await implicitFlow();

	const request = await fetch(`${GETTRACK_URL}/${id}`, {
		headers: { Authorization: "Bearer " + authorization.access_token }
	});

	return await request.json();
}

export default async function () {
	return await fetchTrack("5djzvjJY39rwAQaHgpPR02");
}
