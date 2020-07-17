Vue.component('stats', {
	props: ['player'],
	template: `
		<div id="stats">
			<h2 id="stats__cash">{{ player.cash }}</h2>
			<h2 id="stats__energy">{{ player.energy }}</h2>
		</div>
	`,
})
