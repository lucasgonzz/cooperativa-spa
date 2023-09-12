<template>
<div>
    <confirm
    text="la imagen"
    :actions="actions"
    :id="'delete-'+model_name+'-image'"
    toast="Imagen eliminada"></confirm>

	<div>
		<div
		v-if="model.image_url">
			<div
			class="j-center">
				<vue-load-image>
					<img
					slot="image"
					class="slide-img b-r-1 shadow m-b-10" 
					:src="image(model)">

			        <b-spinner
					slot="preloader"
			        variant="success"></b-spinner>

					<div slot="error">
						Imagen no encontrada
					</div>
				</vue-load-image>
			</div>

			<b-button
			size="sm"
			block 
			class="m-b-10"
			@click="setDelete"
			variant="outline-danger">
				Eliminar imagen
			</b-button>
			<b-button
			size="sm"
			block 
			variant="outline-primary"
			@click="uploadImage">
				Cambiar imagen
			</b-button>
		</div>
		<b-button
		v-else
		size="sm"
		block 
		variant="outline-primary"
		@click="uploadImage">
			Agregar imagen
		</b-button>

	</div>
</div>
</template>
<script>
import Confirm from '@/common-vue/components/Confirm'
import VueLoadImage from 'vue-load-image'
import { Carousel, Slide } from 'vue-carousel'
export default {
	props: ['model', 'model_name'],
	components: {
		Confirm,
		VueLoadImage,
	    Carousel,
	    Slide
	},
	computed: {
		actions() {
			if (this.model_name == 'user') {
				return ['auth/deleteImage']
			} 
			return [this.model_name+'/deleteImage']
		},
	},
	methods: {
		uploadImage() {
			this.$emit('uploadImage')
		},
		setDelete() {
			this.$bvModal.show('delete-'+this.model_name+'-image')
		}
	}
}
</script>
<style scoped lang="sass">
.images
	img 
		max-width: 100%
</style>