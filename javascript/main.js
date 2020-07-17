const deserializeDecimal = (decimal) =>
	Decimal.fromMantissaExponent(decimal.mantissa, decimal.exponent)

const serializeDecimal = (decimal) => ({
	mantissa: decimal.mantissa,
	exponent: decimal.exponent,
})

new Vue({
	el: '#ui',
	template: '<game-ui v-bind:player="player" />',
	data: {
		player: {
			cash: new Decimal(10),
			energy: new Decimal(5),
		},
	},

	created() {
		window.player = this.player
		window.addEventListener('beforeunload', () => window.save())

		const save = JSON.parse(localStorage.getItem('save') || '{}')
		if (!save) return
		
		this.player.cash = deserializeDecimal(save.player.cash)
		this.player.energy = deserializeDecimal(save.player.energy)
	},
})

window.save = () =>
	localStorage.setItem(
		'save',
		JSON.stringify({
			player: {
				cash: serializeDecimal(player.cash),
				energy: serializeDecimal(player.energy),
			},
		})
	)
