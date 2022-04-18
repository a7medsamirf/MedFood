<template>
  <div class="Welcome-wrap py-md-10 py-16">
    <div class="inner ">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="px-sm-5 px-0">
            <div class="img-box">
                  <v-img
                  class="Welcome-img"
                          width="600"
                          height="100%"
                          alt="Welcome"
                          :src="require(`~/static/images/home/3.webp`)"
                        ></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="px-sm-5 px-0">
            <div class="text">
              <h4 class="ma-3 primary--text">Welcome</h4>
              <h2 class="text-color-default ma-3 Welcome-text-title">We are doing more than
                you expect
              </h2>
              <p class="ma-5">Quickly predominate standards compliants architectures and
                prospective internal or "organic" sources. Synergistically mesh
                quality quality vectors for one-to-one leadership. </p>
              <p class="ma-5">Quickly predominate standards compliants architectures and
                prospective internal or "organic" sources. Synergistically mesh
                quality quality vectors for one-to-one leadership.</p>
              <v-btn color="primary"  x-large class="button figs-btn ma-5 pa-5">Explore Our Story  </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</div>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style scoped>

</style>
