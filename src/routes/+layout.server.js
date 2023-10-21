import discord from "../lib/discord.server";
import spotify from "../lib/spotify.server";
import lastfm from "../lib/lastfm.server";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		discord: await discord(),
		//spotify: await spotify(),
		lastfm: await lastfm()
	};
}
