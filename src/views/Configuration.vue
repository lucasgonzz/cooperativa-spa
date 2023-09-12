<template>
	<div>
		<nav-component></nav-component>

		<general></general>	
		<password></password>	
	</div>
</template>
<script>
import NavComponent from '@/components/configuration/components/Nav'
import General from '@/components/configuration/components/general/Index'
import Password from '@/components/configuration/components/password/Index'
export default {
	components: {
		NavComponent,
		General,
		Password,
	}
}
</script>