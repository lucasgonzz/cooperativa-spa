<template>
	<div>
		<color-info
		:model_name="model_name"></color-info>

		<table-component
		:show_created_at="show_created_at"
		:show_btn_edit="show_btn_edit"
		:properties="properties"
		:loading="loading_prop"
		:models="models_to_show"
		:model_name="model_name"
		:set_model_on_click="set_model_on_click"
		:on_click_set_property="on_click_set_property"
		@clicked="clicked"
		v-if="_display == 'table'">
			<template v-slot:btn-edit="slotProps">
				<slot name="buttons" :model="slotProps.model"></slot>
			</template>  
			<template v-slot:default="slotProps">
				<slot :model="slotProps.model"></slot>
			</template>
		</table-component>

		<cards-component
		:show_created_at="show_created_at"
		:properties="properties"
		:loading="loading_prop"
		:models="models_to_show"
		:model_name="model_name"
		:set_model_on_click="set_model_on_click"
		:on_click_set_property="on_click_set_property"
		@clicked="clicked"
		v-if="_display == 'cards'">
			<template v-slot:default="slotProps">
				<slot :model="slotProps.model"></slot>
			</template>
		</cards-component>

		<btn-add-to-show
		@add="add"
		:models="_models"
		:models_to_show="models_to_show"></btn-add-to-show>

	</div>
</template>
<script>
import TableComponent from '@/common-vue/components/display/TableComponent'
import CardsComponent from '@/common-vue/components/display/cards/Index'
import BtnAddToShow from '@/common-vue/components/BtnAddToShow'
export default {
	props: {
		loading: {
			type: Boolean,
			default: null
		},
		models: {
			type: Array,
			default() {
				return []
			},
		},
		model_name: String,
		properties: {
			type: Array,
		},
		set_model_on_click: {
			type: Boolean,
			default: true,
		},
		on_click_set_property: {
			type: String,
			default: null,
		},
		show_models_if_empty: {
			type: Boolean,
			default: false,
		},
		show_btn_edit: {
			type: Boolean,
			default: true,
		},
		display: {
			type: String,
			default: null
		},
		show_created_at: {
			type: Boolean,
			default: true,
		},
		check_permissions: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			index_to_show: 1,
			cant_models_to_show: 20,
		}
	},
	computed: {
		_display() {
			if (this.display) {
				return this.display
			}
			return this.$store.state[this.model_name].display
		},
		loading_prop() {
			if (this.loading) {
				return this.loading
			}
			return this.$store.state[this.model_name].loading
		},
		_models() {
			if (this.models.length || this.show_models_if_empty) {
				console.log('return models que vinieron por props')
				return this.models
			} else {
				let is_filtered = this.$store.state[this.model_name].is_filtered 
				if (typeof is_filtered != 'undefined' && is_filtered) {
					let filtered = this.$store.state[this.model_name].filtered 
					console.log('return filtered_models')
					return filtered
				}  
				console.log('return store_models')
				return this.$store.state[this.model_name].models 
			}
		},
		models_to_show() {
			return this._models.slice(0, (this.cant_models_to_show * this.index_to_show))
		}
	},
	methods: {
		clicked(model) {
			this.$emit('clicked', model)
		},
		add() {
			this.index_to_show++
		}
	},
	components: {
		ColorInfo: () => import('@/common-vue/components/display/ColorInfo'),
		TableComponent,
		CardsComponent,
		BtnAddToShow,
	}
}
</script>