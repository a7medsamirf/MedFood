<template>
  <div class="Service-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading">Contact Us</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="breadcrumb-separator"> / Contact Us</span></nav>
      </div>
    </div>

    <div class="inner d-flex align-center justify-center py-16">
      <v-container>


        <div>
          <CoolLightBox :items="images" :index="index" @close="index = null">
          </CoolLightBox>

          <div class="images-wrapper">
            <div
              class="image"
              v-for="(image, imageIndex) in images"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: `url(${image})` }"
            ></div>
          </div>
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
  name: "Service",
  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://static.toiimg.com/photo/72975551.cms",
      ],
      index: null,
    }
  },
}
</script>

<style scoped>

</style>
