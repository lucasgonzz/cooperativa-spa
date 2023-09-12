<template>
	<view-component
	model_name="service"
	show_filter_modal
	:show_previus_days="false"></view-component>
</template>
<script>
import ViewComponent from '@/common-vue/components/view/Index'
export default {
	components: {
		ViewComponent,
	},
}
</script>