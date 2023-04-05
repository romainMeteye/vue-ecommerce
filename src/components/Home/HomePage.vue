<template>
  <section class="carousel">
    <div class="carousel slide" v-bind:data-ride="ride" ref="carousel">
      <ol class="carousel-indicators">
        <li v-for="(slide, index) in slides" v-bind:key="index" v-bind:class="{active: index === currentSlide}" v-on:click="goToSlide(index)"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" v-bind:key="index" v-bind:class="{active: index === currentSlide}" class="carousel-item">
          <img class="img-fluid" v-bind:src="slide.image" v-bind:alt="slide.alt">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      ride: 'carousel',
      slides: [
        { image: '../../assets/images (3).jpeg', alt: 'First slide' },
        { image: '../../assets/images (4).jpeg', alt: 'Second slide' },
        { image: '../../assets/images (5).jpeg', alt: 'Third slide' }
      ],
      currentSlide: 0
    }
  },
  mounted() {
    // Activer le carrousel
    $(this.$refs.carousel).carousel();
    
    // Ajouter un écouteur pour mettre à jour la diapositive actuelle lorsque l'utilisateur navigue entre les diapositives
    $(this.$refs.carousel).on('slid.bs.carousel', (event) => {
      this.currentSlide = $(event.relatedTarget).index();
    });
  },
  methods: {
    goToSlide(index) {
      // Aller à une diapositive spécifique
      $(this.$refs.carousel).carousel(index);
      this.currentSlide = index;
    }
  }
}
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-indicators li {
  display: block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.6s ease;
}

.carousel-indicators li.active {
  background-color: #000;
}
</style>
