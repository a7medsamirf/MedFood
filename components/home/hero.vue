<template>
    <div class="hero-wrap">
      <div class="inner d-flex align-center justify-center">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="text">
                <h1 class="ma-5 text-color-default hero-title">Delivering Happiness.
                </h1>
                <p class="use-text-subtitle2 ma-5 hero-subtitle">QJust order and wait for a while we’ll be there at your door. Delivering the best foods for you. We are deliverying the best foods.</p>
                <v-btn  x-large  color="primary" class="button figs-btn ma-5 pa-5">Explore Menu
                  <v-icon right>
                  mdi-send-outline
                </v-icon>
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="img-box hidden-sm-and-down">
                <img class="pizza-img" src="~/static/images/7.png" alt="" />
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

