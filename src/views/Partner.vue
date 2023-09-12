<template>
	<div>
		
		<has-many
		show_btn_pdf
		print_history
		model_name="partner_payment"></has-many>

		<view-component
		model_name="partner"
		show_filter_modal
		:show_previus_days="false">
			<template v-slot:default="props">
				<b-button
				@click.stop="setPartnerPayment(props.model)"
				:class="marginBtn('partner')"
				variant="primary">
					Pagos
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
	computed: {
	},
	methods: {
		setPartnerPayment(model) {
			this.$store.commit('partner_payment/setSelectedModel', model)
			this.$store.dispatch('partner_payment/getModels')
			this.$bvModal.show('Pagos')
		},
	},
}
</script>