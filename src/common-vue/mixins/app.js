export default {
	methods: {
        redirectIfWww() {
            if (location.href.indexOf("www.") > -1) {
                console.log('tiene www')
                location.replace(process.env.VUE_APP_APP_URL);
            }
        },
        async callMethods(models) {
            this.$store.commit('auth/setLoading', true)

            for (var i = 0; i < models.length; i++) {
                this.updateMessage('Descargando '+this.plural(models[i]))
                await this.$store.dispatch(models[i]+'/getModels')
            }
            
            this.$store.commit('auth/setLoading', false)
            this.updateMessage('')
        },
        updateMessage(message) {
            if (!this.there_is_update) {
                this.$store.commit('auth/setMessage', message)
            }
        }
	}
}