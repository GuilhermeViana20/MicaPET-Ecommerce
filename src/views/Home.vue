<template>
	<div id="Home">
		<Ecommerce componentView="Navbar"/>

		<Ecommerce componentView="Carousel"/>

		<ProductsHome />

		<Ecommerce componentView="Footer"/>
	</div>
</template>

<script>
import Ecommerce from '@/templates/Ecommerce.vue'
import ProductsHome from '@/components/Products/Home/ProductsHome'

export default {
	components: {
		Ecommerce,
		ProductsHome
	}
}
</script>

<style>

	#Home .badge-favorite {
		width: 35px;
		height: 35px;
		padding-top: 12px;
		border-radius: 1.27rem;
	}

</style>