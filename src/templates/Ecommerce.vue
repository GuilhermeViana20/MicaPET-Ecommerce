<template>
    <div id="Ecommerce">
        <Navbar v-if="componentView === 'Navbar'"/>

        <Carousel v-if="componentView === 'Carousel'"/>

        <Banner v-if="componentView === 'Banner'"/>

        <Footer v-if="componentView === 'Footer'"/>
    </div>
</template>

<script>
import Navbar from '@/components/Header/Navbar.vue'
import Carousel from '@/components/Carousel/Carousel.vue'
import Banner from '@/components/Banner/Banner.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
    props: ['componentView'],
    components: {
        Navbar,
        Carousel,
        Banner,
        Footer,
    }
}
</script>

<style>

</style>