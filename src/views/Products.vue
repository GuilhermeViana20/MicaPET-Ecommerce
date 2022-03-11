<template>
    <div id="Products">
        <Ecommerce componentView="Navbar"/>

		<ProductsShop/>
        
        <Ecommerce componentView="Footer"/>
    </div>
</template>

<script>
import Ecommerce from '@/templates/Ecommerce.vue'
import ProductsShop from '@/components/Products/Shop/ProductsShop'

export default {
    components: {
		Ecommerce,
        ProductsShop
	}
}
</script>

<style>

</style>