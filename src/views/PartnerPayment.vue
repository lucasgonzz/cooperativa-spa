<template>
	<view-component
	model_name="partner_payment"
	show_filter_modal
	show_previus_days
	@clicked="clicked">
		<template #body>
			<total></total>	
		</template>
	</view-component>
</template>
<script>
import ViewComponent from '@/common-vue/components/view/Index'
export default {
	components: {
		ViewComponent,
		Total: () => import('@/components/partner-payment/Total'),
	},
	created() {
		this.$store.commit('partner_payment/setSelectedModel', null)
		if (this.$store.state.partner_payment.models.length) {
			this.$store.dispatch('partner_payment/getModels') 
		}
	},
	methods: {
		clicked(model) {
			console.log(model)
		}
	}
}
</script>