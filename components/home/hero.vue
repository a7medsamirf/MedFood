<template>
    <div class="banner-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="text">
                <h1 class="ma-5 text-color-default">We do not cook, we create your emotions!
                </h1>
                <p class="use-text-subtitle2 ma-5">Quickly predominate standard compliant architecture
                  and may have prospective internal or organic sources. </p>
                <v-btn  x-large  color="primary" class="button figs-btn ma-5 pa-5">Get Started
                  <v-icon right>
                  mdi-send-outline
                </v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="img-box hidden-sm-and-down">
                <img class="pizza-img" src="~/static/images/home/1.webp" alt="" />
                <img class="pizza-img2" src="~/static/images/home/2.webp" alt="">
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>

</template>

<script>
export default {
  name: "hero",

}
</script>
<style  lang="scss">

.banner-wrap {
  background-image: url('static/images/hero-pattern.webp');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  align-items: center;
  position: relative;
  display: block;
  height: 100vh;
  background-color: #faf7f2;
.inner {
  height: 100%;
.img-box {
  position: relative;
  text-align: center;
img.pizza-img {
  position: relative;
  background: #dadcd8;
  border-radius: 50%;
  z-index: 1;
  max-width: 100%;
  max-height: 400px;
  animation-name: angry-animation;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
}
img.pizza-img2 {
  position: absolute;
  left: -45px;
  max-height: 635px !important;
  bottom: -105px;
  animation-name: angry-animation;
  animation-duration: 20s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
}
}
}
}

@keyframes angry-animation {
  100%{
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.use-text-title {
  position: relative;

}
</style>
