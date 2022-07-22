<template>
  <v-bottom-navigation
    class="hidden-lg-and-up"
     shift
     fixed
    :background-color="color"
  >

    <v-btn to="/">
      <span>Home</span>
      <v-icon>mdi-home-circle-outline</v-icon>
    </v-btn>

    <v-btn to="/blog">
      <span>Blog</span>

      <v-icon>mdi-music-note</v-icon>
    </v-btn>

    <v-btn to="/products">
      <span>Shop</span>

      <v-icon>mdi-store-outline</v-icon>
    </v-btn>

    <v-btn to="/contact">
      <span>Contact</span>

      <v-icon>mdi-phone-in-talk</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: "Tab-bar",
    computed: {
      color () {
        switch (this.value) {
          default: return 'default'
        }
      },
    },
  }

</script>

<style lang="scss">

.v-bottom-navigation {
  color: #fff !important;
  border-radius: 50px;
  transform: translate(25px, -20px) !important;
  width: 90% !important;
  padding: 10px !important;

  span.v-btn__content{
    color: #fff;
  }
}
.container .bottombar #t1:checked ~ #back::after {
  transform: translate(75px, 0);
}


.v-item-group.v-bottom-navigation--fixed
{
  display: inline-flex;
  align-items: center;
  padding: 10px 20px 15px;
  box-shadow: 0px 20px 40px rgb(18 34 64 / 10%);
}


</style>







