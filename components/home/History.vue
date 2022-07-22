<template>
  <div class="History-wrap py-md-10 py-16" >
    <div class="inner ">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" class="px-sm-5 px-0">
            <div class="text title-main">
              <h4 class="ma-3 primary--text">History of MedFood</h4>
              <h2 class="primary--text ma-3 Welcome-text-title animate__animated animate__bounce animate__delay-2s">We Cook Tradition &
                    Family Recipes
              </h2>
              <p class="ma-5">Quickly predominate standards compliants architectures and
                prospective internal or "organic" sources. Synergistically mesh
                quality quality vectors for one-to-one leadership. </p>
              <p class="ma-5">Quickly predominate standards compliants architectures and
                prospective internal or "organic" sources. Synergistically mesh
                quality quality vectors for one-to-one leadership.</p>
              <v-btn color="primary"  x-large class="button figs-btn ma-5 pa-5 ">Explore Our Story  </v-btn>
            </div>
          </v-col>
         <v-col cols="12" md="6" class="px-sm-5 px-0">
            <div class="img-box">
                  <v-img
                  class="History-img"
                          width="600"
                          height="100%"
                          alt="History"
                          :src="require(`~/static/images/home/4.webp`)"
                        ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</div>
</template>

<script>
export default {
  name: "History",

}
</script>


<style lang="scss">

</style>
