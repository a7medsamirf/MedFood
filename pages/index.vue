<template>
  <div>
    <hero />
    <welcome />
      <history />
      <why-choose-us />
    <banner />
<!--     <blog-card :document="article" /> -->



  </div>
</template>
<script>

import Hero from "~/components/home/hero";
import History from '~/components/home/History.vue';
import Welcome from "~/components/home/Welcome";
import banner from "~/components/home/banner";
import WhyChooseUs from '~/components/home/Why-Choose-Us.vue';
/*import BlogCard from '~/components/blog/Blog-Card.vue';*/
export default {
  name: "Home",

  loading: true,
  components: {Welcome, Hero, History, WhyChooseUs, banner },
  data() {

    return {
      title: 'Home'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>
<style lang="">

</style>
