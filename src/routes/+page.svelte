<script>
	export let data;

	import Discord from "$lib/components/Discord.svelte";
	import GitHub from "$lib/components/GitHub.svelte";
	import Lastfm from "$lib/components/Lastdotfm.svelte";
</script>

<div class="container h-full flex flex-col pt-24 xl:pt-72 text-white text-0 ">
	<div class="flex max-w-lg">
		<img class="mr-2 h-20 md:h-24 rounded-full" src="https://cdn.discordapp.com/avatars/{data.discord.id}/{data.discord.avatar}.png" alt="" />
		<p class="my-auto tracking-widest text-2xl md:text-5xl text-white/75">
			{data.discord.username}
		</p>
		<div class="w-9 md:w-12 h-9 md:h-12 my-auto px-2 pt-3 md:pt-3.5 text-sm md:text-3xl text-white/75">
			<Discord />
		</div>
	</div>

	<div class="md:w-[32rem] flex place-content-between text-xl">
		<p class="py-1 text-white/50">Full stack JavaScript developer.</p>
		<div class="text-2xl flex space-x-4">
			<a class="flex" href="https://www.last.fm/user/RAAAAAAAAAAAH">
				<div class="h-7 w-7 my-auto text-white/50">
					<Lastfm />
				</div>
			</a>
			<a class="flex" href="https://github.com/cirroskais">
				<div class="h-7 w-7 my-auto text-white/50">
					<GitHub />
				</div>
			</a>
		</div>
	</div>

	<div class="md:w-[32rem] h-1 bg-white/25 rounded-full my-1" />

	<div class="max-w-lg my-2">
		<div class="flex space-x-4">
			<img class="w-24 h-24" src={data?.lastfm?.recenttracks?.track[0]?.image.find((_) => _.size == "extralarge")?.["#text"]} alt="" />
			<div class="w-full py-3.5">
				<p class="text-2xl text-white/75 whitespace-nowrap overflow-clip">{data?.lastfm?.recenttracks?.track[0]?.name}</p>
				<p class="text-xl text-white/50">{data?.lastfm?.recenttracks?.track[0]?.artist?.["#text"]}</p>
			</div>
		</div>
	</div>
</div>
