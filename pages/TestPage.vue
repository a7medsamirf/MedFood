<template>
  <div>
    <v-container>
      <v-row  class="justify-center" justify="center">
        <v-col
          v-for="n in 4"
          :key="n"
          class="d-flex child-flex"
          cols="12"
          lg="3"
          md="6"
          sm="12"
        >
          <v-card
            v-if="!data_loaded"
            class="food-card rounded-lg "
          >
            <v-layout align-center>
              <v-flex class="px-12 py-5 text-center">
                <v-img
                  class="mx-auto"
                  max-height="150"
                  :src="require('@/static/images/product/product-9.png')"
                ></v-img>

              </v-flex>
            </v-layout>

            <v-card-title>Top 10 Australian beaches</v-card-title>

            <v-card-subtitle class="pb-0">
              Number 10
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>

          </v-card>



          <v-skeleton-loader
            v-if="data_loaded"
            type=" card-avatar, article, actions"
          >
          </v-skeleton-loader>

        </v-col>
      </v-row>




    </v-container>

  </div>


</template>

<script>
export default {
  name: "TestPage",
  data(){
    return {
      data_loaded : true
    };
  },
  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 2000);
  },

}
</script>

<style>
.food-card
{
  position: relative;
}
.food-card .v-image__image--cover
{
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 5px solid #121212;
  text-align: center;
}

.food-card .v-image__image--cover {
  transition: transform .7s ease-in-out;
}
.food-card .v-image__image--cover:hover {
  transform: rotate(360deg);
}

.v-card .v-image
{
  transition: .3s ease-in-out;
}

.v-card:hover .v-image{
  -webkit-animation: rotate-smooth 14s cubic-bezier(0.26, 0.26, 1, 1) infinite;
  animation: rotate-smooth 14s cubic-bezier(0.26, 0.26, 1, 1) infinite;
}

</style>

