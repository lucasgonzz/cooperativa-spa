<template>
<b-modal
title="Subir imagen"
id="upload-image"
hide-footer>
	<b-form-file
	v-model="image"
	:state="Boolean(image)"
	placeholder="Escoja un archivo o arrastrelo hasta aqui..."
	drop-placeholder="Arrastre hasta aqui..."></b-form-file>
	<b-button
	block 
	class="m-t-15"
	variant="primary"
	:disabled="!image">
		Siguiente
	</b-button>
</b-modal>
</template>
<script>
export default {
	props: {
		model_name: String,
	},
	data() {
		return {
			image: null,
		}
	}
}
</script>