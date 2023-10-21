import { DISCORD_ID, DISCORD_TOKEN } from "$env/static/private";

export default async function () {
	const response = await fetch(`https://discord.com/api/users/${DISCORD_ID}`, {
		method: "GET",
		headers: { Authorization: `Bot ${DISCORD_TOKEN}` }
	});

	return response.json();
}
