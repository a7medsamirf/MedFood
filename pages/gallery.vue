<template>
  <div class="gallery-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading"> {{PageTitle}}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="breadcrumb-separator"> / {{PageTitle}}</span>
        </nav>
      </div>
    </div>

    <div class="inner d-flex align-center justify-center py-16">
      <v-container>

            <CoolLightBox
              :items="images"
              :index="index"
              :fullScreen="true"
              @close="index = null">
            </CoolLightBox>

            <div class="images-wrapper">
              <v-row>
                <v-col md="4" cols="12"
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                :effect="'fade'"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')' }">
                </v-col>
              </v-row>

            </div>

      </v-container>
    </div>

  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  components: {
    CoolLightBox,
  },
  name: "gallery",
  data() {
    return {
      PageTitle: 'Gallery',
      images: [
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://static.toiimg.com/photo/72975551.cms",
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",

      ],
      index: null,
    }
  },
  head() {
    return {
      title: this.PageTitle,
    }
  }
}
</script>

<style lang="scss">
.gallery-wrap
{
.image {
  height: 300px;
  cursor: pointer;
}
}

</style>
