<template>
	<b-button
	:class="with_margin ? 'm-b-15' : ''"
	@click="create"
	:block="block ? true : false" 
	variant="primary">
		<i class="icon-plus"></i>
		{{ create_spanish(model_name) }}
	</b-button>
</template>
<script>
import display from '@/common-vue/mixins/display'
export default {
	props: {
		model_name: String,
		text: String,
		with_margin: {
			type: Boolean,
			default: true,
		},
		block: {
			type: Boolean,
			default: true,
		},
	},
	mixins: [display],
	methods: {
		create() {
			this.setModel(null, this.model_name)
		}
	}
}
</script>