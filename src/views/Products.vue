<template>
    <div id="Products">
        <Ecommerce componentView="Navbar"/>

		<Ecommerce componentView="Carousel"/>
        
        <Ecommerce componentView="Footer"/>
    </div>
</template>

<script>
import Ecommerce from '@/templates/Ecommerce.vue'

export default {
    components: {
		Ecommerce,
	}
}
</script>

<style>

</style>