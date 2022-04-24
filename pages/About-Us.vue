<template>
  <div class="testimonial-wrap">
    <v-container>
      <h3 class="display-2 text-center mb-4">
        Testimonials
      </h3>
      <p class="body-1 text-center mb-4">
        Curabitur egestas consequat lorem, vel fermentum augue porta id.
      </p>
      <div class="carousel" v-if="loaded">
        <slick ref="slick" :options="slickOptions">
            <v-card v-for="(burger, index) in burger" :key="index"
              class="mx-auto my-12 item"
                   elevation-5
            >
              <v-img
                v-if="burger.image"
                :src="require(`~/static/images/shop/${burger.image}`)"
                :alt="burger.alt"
                height="250"
              ></v-img>


              <v-card-title> {{burger.title}}</v-card-title>
              <v-card-text>
                <div>{{ burger.description }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                >
                  Reserve
                </v-btn>
              </v-card-actions>
            </v-card>

        </slick>
      </div>


    </v-container>

<testi-card />

  </div>
</template>
<script>
import  burger from '~/api/burger'
import TestiCard from '~/components/TestiCard.vue'
export default {
  name: "About-Us",
  components: {
    Slick: () => import('vue-slick'),
    burger,
    TestiCard
  },
  data() {
   return {
      loaded: false,
      burger :burger.burger,
      slickOptions: {
        dots: true,
        arrows: true,
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  },

}
</script>

<style scoped>

</style>
