<template>
    <div id="Carousel">
		<div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
			<div class="carousel-indicators">
			<button
				type="button"
				data-mdb-target="#carouselExampleCrossfade"
				data-mdb-slide-to="0"
				class="active"
				aria-current="true"
				aria-label="Slide 1"
			></button>
			<button
				type="button"
				data-mdb-target="#carouselExampleCrossfade"
				data-mdb-slide-to="1"
				aria-label="Slide 2"
			></button>
			<button
				type="button"
				data-mdb-target="#carouselExampleCrossfade"
				data-mdb-slide-to="2"
				aria-label="Slide 3"
			></button>
			</div>
			<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="https://mundopet.vtexassets.com/assets/vtex.file-manager-graphql/images/6dd967c6-6762-4397-a75c-7c38af764e0a___098ad9ce7842f8a6ef1d5ebacfd3d37f.jpg" class="d-block w-100" alt="Wild Landscape"/>
			</div>
			<div class="carousel-item">
				<img src="https://mundopet.vtexassets.com/assets/vtex.file-manager-graphql/images/a14dd4b2-78b1-420a-936e-17f8f5a295c2___d7acdfe74f5918b0f8e1650f129fe136.jpg" class="d-block w-100" alt="Camera"/>
			</div>
			<div class="carousel-item">
				<img src="https://mundopet.vtexassets.com/assets/vtex.file-manager-graphql/images/d0fcd0a3-c771-4d56-b7a5-4234e16f030f___06d21667a74dcd01d17aaee5d6735e50.png" class="d-block w-100" alt="Exotic Fruits"/>
			</div>
			</div>
			<button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
			</button>
		</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>