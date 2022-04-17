<template>
  <v-tabs class="pt-20">
        <v-tab> Ingredients</v-tab>
        <v-tab> Product details</v-tab>
        <v-tab> Reviews (2) </v-tab>

  <v-tab-item class="mt-10 pa-2 ">
    <p>
      Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
    </p>
    Model wears:
    UK 10/ EU 38/ US 6
    Occasion:
    Lifestyle, Sport
    Country:
    Italy
    Outer:
    Leather 100%, Polyamide 100%
    Lining:
    Polyester 100%
    CounSoletry:
    Rubber 100%
  </v-tab-item>
  <v-tab-item class="mt-10 pa-2">
    <p>Facilis ratione veritatis asperiores doloremque molestiae delectus iure officia earum dolores sit fugiat, repellendus, neque laboriosam optio culpa quibusdam, magnam totam quos. Mollitia dolorem, culpa, dignissimos quas et voluptates architecto in sit totam, quae animi ratione adipisci nulla ab quasi perferendis quo pariatur dolor magnam inventore. Sequi nisi ex excepturi non harum, asperiores laboriosam ipsum voluptate doloribus incidunt nam eveniet similique unde esse voluptatem minus necessitatibus eaque temporibus quaerat accusantium amet deserunt. Iste, facilis? Illo tenetur, libero, non dicta asperiores quisquam voluptas natus aperiam, at perspiciatis repellat voluptate. Autem non reprehenderit, perferendis.</p>
    <p>Consectetur adipisicing elit. Delectus quibusdam repellendus nesciunt cumque fugit numquam adipisci voluptatum quam, sapiente doloribus ut eaque natus laudantium alias illum quos maiores, quia perferendis.</p>
  </v-tab-item>
  <v-tab-item class="mt-10 pa-2">
        <div class="carousel" v-if="loaded">
          <slick ref="slick" :options="slickOptions">
  <v-card class="mx-auto pa-5"  v-for="(review, index) in review" :key="index">
    <v-list-item three-line>
       <v-list-item-avatar
        tile
        size="80"
        color="grey"
        class="rounded-circle"
      >
         <v-img
           v-if="review.image"
           :src="require(`~/static/images/avatars/${review.image}`)"
           :alt="review.alt"
           height="250"
           contain
         ></v-img>

       </v-list-item-avatar>
      <v-list-item-content>
        <div class="text-overline">
          <v-rating
            readonly
            half-increments
            color="yellow darken-3"
            background-color="grey lighten-1"
            :value="review.ratings"
            dense
            size="20"
          ></v-rating>

        </div>
        <v-list-item-title class="text-h6 mb-1">
            {{ review.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{review.comment}}</v-list-item-subtitle>
      </v-list-item-content>


    </v-list-item>

  </v-card>

      </slick>
      </div>
        </v-tab-item>
      </v-tabs>

</template>

<script>

import common from "~/api/common";
export default {
  components: {
    Slick: () => import('vue-slick'),
  },
    name: "Description",
  data () {
    return {
      review :common.review,
      loaded: false,
      slickOptions: {
        dots: true,
        arrows: true,
        slidesToShow: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
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

<style lang="scss">
.sb-gallery-item:hover > img {
  transform: scale(1.05);
}
.sb-gallery-item > img {
  transform: scale(1.001);
  transition: 0.3s ease-in-out;
}
</style>
