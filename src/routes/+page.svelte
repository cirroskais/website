<script>
	export let data;
</script>

<div class="container h-full flex flex-col pt-24 xl:pt-72 text-white text-0 ">
	<div class="flex max-w-lg">
		<img class="mr-2 h-20 md:h-24 rounded-full" src="https://cdn.discordapp.com/avatars/{data.discord.id}/{data.discord.avatar}.png" alt="" />
		<p class="my-auto tracking-widest text-2xl md:text-5xl text-white text-opacity-75">
			{data.discord.username}
		</p>
		<i class="my-auto pt-1.5 md:pt-3 px-2 fa-brands fa-discord text-xl md:text-3xl text-white text-opacity-75 " />
	</div>
	<div class="md:w-[32rem] flex place-content-between text-xl text-white text-opacity-60">
		<p class="py-1 font-light">Full stack JavaScript developer.</p>
		<div class="text-2xl">
			<a href="https://twitter.com/cirroskais"><i class="fa-brands fa-twitter mx-1" /></a>
			<a href="https://github.com/cirroskais"><i class="fa-brands fa-github mx-1" /></a>
		</div>
	</div>
	<div class="md:w-[32rem] pt-1 bg-white bg-opacity-25 rounded-full my-1" />
</div>
