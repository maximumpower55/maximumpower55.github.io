Vue.component('game-ui', {
	props: ['player'],
	template: `
		<div>
			<stats v-bind:player="player" />
			<sidemenu />
		</div>
	`,
})
