<template>
<carousel
class="m-b-10"
v-if="model.images.length"
navigationEnabled
navigationNextLabel="<i class='icon-right'></i>"
navigationPrevLabel="<i class='icon-left'></i>"
:paginationActiveColor="variant_color"
paginationColor="#A9A9A9"
:paginationPadding="5"
loop
:perPage="1"
:adjustableHeight="true">
	<slide
	v-for="(image, index) in model.images"
	:data-index="index"
	:key="image.id">
		<vue-load-image>
			<img
			slot="image"
			class="slide-img" 
			:src="imageUrl(image.url)">
			
	        <b-spinner
			slot="preloader"
	        variant="success"></b-spinner>

			<div slot="error">
				Imagen no encontrada
			</div>
		</vue-load-image>
		<b-button
		@click="setDelete(image)"
		variant="danger">
			Eliminar imagen
		</b-button>
	</slide>
</carousel>
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
}
</script>
<style scoped lang="sass">
.VueCarousel-slide
	position: relative
	display: flex
	align-items: center
	&:hover > button 
		display: block
	button 
		position: absolute
		top: 50%
		transform: translateY(-50%)
		left: 50%
		transform: translateX(-50%)
		display: none 

.slide-img
	max-width: 100%
	@media screen and (max-width: 992px)
		max-height: 70vh
	@media screen and (min-width: 992px)
		max-height: calc(100vh - 150px)
</style>