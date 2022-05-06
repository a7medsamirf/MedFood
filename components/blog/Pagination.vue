<template>
  <section id="prev-next" class="flex justify-center mt-4 space-x-2">
    <nuxt-link v-if="prevPage" :to="prevLink" class="">Prev page</nuxt-link>
    <nuxt-link v-if="nextPage" :to="`${urlPrefix}/page/${pageNo + 1}`" class="">Next page</nuxt-link>
  </section>
</template>

<script>
export default {
  props: ['prevPage', 'nextPage', 'pageNo', 'urlPrefix'],
  computed: {
    prevLink() {
      return this.pageNo === 2 ? this.urlPrefix : `${this.urlPrefix}/page/${this.pageNo - 1}`
    }
  }
}
</script>

<style>

</style>
