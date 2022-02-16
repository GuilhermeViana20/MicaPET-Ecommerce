<template>
    <div id="About">
        <Ecommerce componentView="Navbar"/>

        <section>
			<div class="container-fluid py-5">
				<div class="d-flex mb-3 rounded py-3">
					<div class="col">
                        <h3>Sobre</h3>
                        <p class="pe-5">
                            <br>É um prazer tê-los aqui! Somos a Mundo Pet, lugar onde você e o seu pet viverão momentos inesquecíveis!
                            <br>Fomos chamados para servir com excelência aos animais de estimação e encantar pessoas. Ser surpreendido positivamente sempre será a nossa melhor experiência. Por isso, nosso maior retorno é a quantidade de UAUs de nossos clientes e amigos.
                            <br>Sabemos que ter um bichinho de estimação é sinônimo de companheirismo, alegria e muito amor. Não importando qual o tipo de animal você tenha em casa, mas o laço que se cria ao depositarmos nele todo o nosso amor e cuidado.
                        </p>
					</div>
                    <div class="col">
                        <div class="bg-image hover-overlay rounded ripple">
                            <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/055.webp" class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(57, 192, 237, 0.2);"></div>
                            </a>
                        </div>
					</div>
                </div>

                <div class="row text-center">
                    <div class="col-md">
                        <div class="card bg-blue text-light">
                            <div class="card-body">
                                <i style="font-size: 35px" class="fas fa-car"></i>
                                <h5 class="card-title">Clínica Veterinária</h5>
                                <p class="card-text">Toda Mundo Pet possui uma clínica veterinária.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-blue text-light">
                            <div class="card-body">
                                <i style="font-size: 35px" class="fas fa-car"></i>
                                <h5 class="card-title">Clínica Veterinária</h5>
                                <p class="card-text">Toda Mundo Pet possui uma clínica veterinária.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-blue text-light">
                            <div class="card-body">
                                <i style="font-size: 35px" class="fas fa-car"></i>
                                <h5 class="card-title">Clínica Veterinária</h5>
                                <p class="card-text">Toda Mundo Pet possui uma clínica veterinária.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

		<Ecommerce componentView="Footer"/>
    </div>
</template>

<script>
import Ecommerce from '@/templates/Ecommerce.vue'

export default {
    components: {
        Ecommerce
    }
}
</script>

<style>

</style>