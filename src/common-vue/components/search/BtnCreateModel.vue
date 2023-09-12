<template>
	<div>
    	<model
    	:model_name="model_name"></model>
		<b-button
		@click="setModel(null, model_name)"
		size="sm"
		class="m-t-15"
		variant="outline-primary"> 
			<i class="icon-plus"></i>
			{{ singular(model_name) }}
		</b-button>
	</div>
</template>
<script>
import display from '@/common-vue/mixins/display'
export default {
	mixins: [display],
	components: {
		Model: () => import('@/common-vue/components/model/Index')
	},
	props: {
		model_name: String,
	},
}
</script>