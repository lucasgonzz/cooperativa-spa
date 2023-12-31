<template>
	<div
	class="cont-navs">
		<div
		class="cont-left">
			<div 
			v-if="items"
			class="horizontal-nav">

				<div
				class="item apretable"
				v-for="(item, i) in items"
				:key="i"
				@click="select(item)"
				:class="isActive(item)">
					{{ itemName(item) }}
					<b-badge
					variant="danger"
					v-if="item.alert">
						{{ item.alert }}
					</b-badge>
				</div>

			</div>
			<div
			class="cont-buttons"
			v-if="show_filter_modal">
				<filter-modal
				:model_name="model_name"></filter-modal>
				<b-btn-group
				class="m-r-15">
					<b-button
					variant="outline-primary"
					v-b-modal="'filter-modal'">
						<i class="icon-search"></i>
						Buscar
					</b-button>
					<b-button
					v-if="is_filtered"
					@click="restartSearch"
					variant="outline-success">
						<i class="icon-undo"></i>
						Restaurar
					</b-button>
				</b-btn-group>	
			</div>
			<div
			class="cont-buttons">

				<slot name="btn_create">
					<excel-drop-down
					v-if="show_excel_drop_down"
					:model_name="model_name"></excel-drop-down>

					<btn-create
					v-else-if="show_btn_create"
					:with_margin="false"
					:block="false"
					:model_name="model_name"></btn-create>
				</slot>

				<slot name="buttons"></slot>
			</div>
		</div>
		<display-nav
		v-if="show_display"
		:model_name="model_name"
		@setDisplay="setDisplay"></display-nav>

	</div>
</template>
<script>
import BtnCreate from '@/common-vue/components/BtnCreate'
import FilterModal from '@/common-vue/components/horizontal-nav/FilterModal'
import ExcelDropDown from '@/common-vue/components/horizontal-nav/ExcelDropDown'
import DisplayNav from '@/common-vue/components/horizontal-nav/DisplayNav'

import display from '@/common-vue/mixins/display'
export default {
	name: 'HorizontalNav',
	mixins: [display],
	components: {
		BtnCreate,
		FilterModal,
		ExcelDropDown,
		DisplayNav,
	},
	props: {
		items: Array,
		show_btn_create: {
			type: Boolean,
			default: false,
		},
		prop_name: {
			type: String,
			default: 'name',
		},
		model_name: {
			type: String,
			default: null,
		},
		set_view: {
			type: Boolean,
			default: false,
		},
		set_sub_view: {
			type: Boolean,
			default: false,
		},
		show_filter_modal: {
			type: Boolean,
			default: false,
		},
		show_display: {
			type: Boolean,
			default: true,
		},
		show_excel_drop_down: {
			type: Boolean,
			default: false,
		},
		check_permissions: {
			type: Boolean,
			default: false,
		},
	},
	created() {
		if (!this.set_view && !this.set_sub_view) {
			if (typeof this.items != 'undefined' && this.items.length && !this.selected_item) {
				this.select(this.items[0])
			}
		}
	},
	data() {
		return {
			selected_item: null,
		}
	},
	computed: {
		can_create() {
			if (this.check_permissions) {
				this.can(this.model_name+'.store')
			}
			return true 
		},
		selected() { 
			if (this.set_view) {
				return this.view
			}
			if (this.set_sub_view) {
				return this.sub_view
			}
			return this.selected_item
		},
		is_filtered() {
			return this.$store.state[this.model_name].is_filtered 
		},
	},
	methods: {
		restartSearch() {
			this.$store.commit(this.model_name+'/setIsFiltered', false)
			this.$store.commit(this.model_name+'/setFiltered', [])
		},
		setDisplay(display) {
			this.$emit('setDisplay', display)
		},
		itemName(item) {
			return this.capitalize(this.value(item))
		},
		select(item) {
			console.log(item)
			if (item.is_for_create) {
				this.setModel(null, item.is_for_create, this.modelPropertiesFromName(item.is_for_create))
				return
			}
			if (item.is_for_filter) {
				this.$bvModal.show('filter')
				return
			}
			if (item.is_for_modal) {
				this.$bvModal.show(item.is_for_modal)
				return
			}
			if (this.set_view) {
				if (this.view != this.routeString(this.value(item))) {
					this.$router.push({params: {view: this.routeString(this.value(item))}})
				} else if (item.action) {
					this.$store.dispatch(item.action)
				} else if (item.call_models) {
					this.$store.dispatch(item.name.replaceAll(' ', '_')+'/getModels')
				}
				if (item.commit) {
					item.commit.forEach(commit => {
						this.$store.commit(commit)
					})
				}
				if (item.view) {
					this.$store.commit(this.model_name+'/setView', item.view)
					this.$store.dispatch(this.model_name+'/getModels')
				}
			}  
			if (this.set_sub_view) {
				if (this.sub_view != this.routeString(this.value(item))) {
					this.$router.push({params: {method: this.method, sub_view: this.routeString(this.value(item))}})
				} else if (item.call_models) {
					this.$store.dispatch(item.name.replaceAll(' ', '_')+'/getModels')
				} else if (item.action) {
					this.$store.dispatch(item.action)
				} else if (item.commit) {
					this.$store.commit(item.commit)
				}
			} 
			this.selected_item = item.name
			this.$emit('setSelected', item)
		},
		value(item) {
			return item[this.prop_name]
		},
		isActive(item) {
			if (this.selected) {
				if (this.selected.toLowerCase() == this.routeString(this.value(item))) {
					return 'active'
				}
			}
		},
	}
}
</script>
<style scoped lang="sass">
@import '@/sass/_custom.scss'
.cont-navs
	display: flex
	flex-wrap: wrap
	align-items: center
	padding: 1em 0 0
	justify-content: space-between
	width: 100%
	// & > div 
	// 	width: 100%
	.cont-left
		display: flex
		flex-direction: row
		justify-content: flex-start
		flex-wrap: wrap
		max-width: 100%
		@media screen and (max-width: 576px)
			width: 100%
			.cont-buttons
				width: 100%
				.btn-group
					width: 100%
					.btn 
						width: 50%
				.btn 
					display: block
					width: 100%
					margin-bottom: 15px
.horizontal-nav
	width: 100%
	display: flex
	overflow-x: scroll
	overflow-y: hidden
	@media screen and (max-width: 576px)
		&::-webkit-scrollbar 
			-ms-overflow-style: none
			scrollbar-width: none
			display: none
	.buttons 
		display: flex

	.item
		border-bottom: 3px solid lighten($blue, 30)
		padding: 5px 8px
		cursor: pointer
		border-radius: 4px 4px 0 0
		transition: all .2s
		font-size: 1em
		white-space: nowrap 
		color: rgba(0, 0, 0, .6) !important
	.active 
		font-weight: bold
		// transform: scale(1.1)
		color: #000 !important
		border-bottom: 3px solid $blue
		// box-shadow: 0px 3px 7px rgb(0 0 0 / 15%) !important
		// webkit-box-shadow: 0px -2px 4px -1px rgba(0,0,0,.7)
		// box-shadow: 0px -2px 4px -1px rgba(0,0,0,.7)
</style>