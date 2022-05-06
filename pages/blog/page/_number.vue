<template>
  <div class="blog-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading"> {{PageTitle}}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="breadcrumb-separator"> / {{PageTitle}}</span></nav>
      </div>
    </div>
 <div class="inner d-flex align-center justify-center py-20">
    <v-container>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <blog-card :item="article"/>
    <!-- Your html code here -->
    <pagination :prevPage="pageNo > 1" :nextPage="nextPage" :pageNo="pageNo" urlPrefix="/blog" />
  </div>
    </v-container>
 </div>

   </div>
</template>

<script>
import Pagination from '~/components/blog/Pagination.vue'
export default {
  components: { Pagination },
  async asyncData({ $content, params, error }) {
    const pageNo = parseInt(params.number)
    const tenArticles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'tags'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      .skip(4 * (pageNo - 1))
      .fetch()

    if (!tenArticles.length) {
      return error({ statusCode: 404, message: 'No articles found!' })
    }

    const nextPage = tenArticles.length === 5
    const articles = nextPage ? tenArticles.slice(0, -1) : tenArticles

    return {
      nextPage,
      articles,
      pageNo
    }
  },
}
</script>
