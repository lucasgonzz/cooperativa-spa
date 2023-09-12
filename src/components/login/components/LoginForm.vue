<template>
	<div
	class="loading-form">
		<img 
		src="@/assets/logo.png">
		<p class="title">
			Iniciar sesion
		</p>
		<b-form-group>
			<b-form-input
			@keyup.enter="login"
			v-model="form.doc_number"
			placeholder="Numero de Documento"></b-form-input>
		</b-form-group>
		<b-form-group>
			<b-form-input
			@keyup.enter="login"
			v-model="form.password"
			type="password"
			placeholder="Contraseña"></b-form-input>
		</b-form-group>
		<b-form-group>
			<b-form-checkbox
			v-model="form.remember"
			:value="1"
			:unchecked-value="0">
				Recordarme
			</b-form-checkbox>
		</b-form-group>
		<btn-loader
		class="m-b-15"
		@clicked="login"
		text="Ingresar"
		:loader="loading"></btn-loader>
		<b-button
		size="sm"
		block
		variant="outline-primary"
		:to="{name: 'passwordReset', params: {view: 'email'}}">
			Olvide mi contraseña
		</b-button>
	</div>
</template>
<script>
import BtnLoader from '@/common-vue/components/BtnLoader'
export default {
	components: {
		BtnLoader,
	},
	data() {
		return {
			form: {
				doc_number: '',
				password: '',
				remember: 0,
			},
			loading: false,
		}
	},
	methods: {
		login() {
			if (this.check() && !this.loading) {
				this.loading = true 
				this.$axios.post('login', this.form)
				.then(res => {
					this.loading = false
					if (res.data.login) {
						// this.$store.dispatch('auth/me')
						this.$store.commit('auth/setAuthenticated', true)
						this.$store.commit('auth/setUser', res.data.user)
						// this.$router.push({name: this.route_index})
					} else {
						this.$toast.error('Sus credenciales son incorrectas')
					}
				})
				.catch(err => {
					console.log(err)
					this.loading = false 
					this.$toast.error('Error al ingresar')
				})
			}
		},
		check() {
			if (this.form.doc_number == '') {
				this.$toast.error('Ingrese el '+this.doc_number)
				return false
			}
			if (this.form.password == '') {
				this.$toast.error('Ingrese la contraseña')
				return false
			}
			return true 
		}
	}
}
</script>
<style lang="sass">
.loading-form
	img 
		width: 130px
		margin-bottom: 1em
</style>