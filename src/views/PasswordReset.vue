<template>
	<b-row
	class="all-center">
		<b-col 
		cols="12"
		sm="8"
		md="8"
		lg="6"
		xl="4">
			<form-password-reset></form-password-reset>
		</b-col>
	</b-row>
</template>
<script>
import FormPasswordReset from '@/components/password-reset/components/form/Index'
export default {
	name: 'PasswordReset',
	components: {
		FormPasswordReset,
	},
}
</script>