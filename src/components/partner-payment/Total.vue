<template>
	<div
	class="cont-total">
		<p
		class="total">
			Total {{ total }}
		</p>
		<b-button
		@click="print"
		variant="danger">
			<i class="icon-print"></i>
			Imprimir
		</b-button>
	</div>
</template>
<script>
export default {
	computed: {
		model_name() {
			return 'partner_payment'
		},
		models() {
			return this.$store.state[this.model_name].models 
		},
		total() {
			let total = 0
			this.models.forEach(model => {
				total += Number(model.amount) 
			})
			return this.price(total) 
		},
	},
	methods: {
		print() {
			let link = process.env.VUE_APP_API_URL+'/'+this.routeString(this.model_name)+'/pdf/'+this.$store.state[this.model_name].from_date+'/'+this.$store.state[this.model_name].until_date
			window.open(link)
		}
	}
}
</script>
<style lang="sass">
.cont-total
	display: flex
	flex-direction: row 
	align-items: center 
	justify-content: space-between
	.total 
		text-align: left 
		font-size: 30px 
		font-weight: bold
		margin-top: 30px
</style>