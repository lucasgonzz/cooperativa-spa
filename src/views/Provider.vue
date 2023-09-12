<template>
	<div>

		<has-many
		model_name="provider_payment"></has-many>

		<view-component
		model_name="provider"
		show_filter_modal
		:show_previus_days="false">
			<template v-slot:default="props">
				<b-button
				@click.stop="setProviderPayment(props.model)"
				:class="marginBtn('provider')"
				variant="primary">
					Compras
				</b-button>
			</template>
		</view-component>

	</div>
</template>
<script>
import HasMany from '@/common-vue/components/has-many/Index'
import ViewComponent from '@/common-vue/components/view/Index'
export default {
	components: {
		HasMany,
		ViewComponent,
	},
	methods: {
		setProviderPayment(model) {
			this.$store.commit('provider_payment/setSelectedModel', model)
			this.$store.dispatch('provider_payment/getModels')
			this.$bvModal.show('Compras')
		}
	},
}
</script>