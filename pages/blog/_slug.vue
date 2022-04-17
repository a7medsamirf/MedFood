<template>
  <article class="slug-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading"> {{ article.title }}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/blog">/ Blog</nuxt-link>
          <span class="breadcrumb-separator"> / {{ article.title }} </span>
        </nav>
      </div>
    </div>
    <div class="inner d-flex align-center justify-center py-16">
    <v-container>
      <v-row>
        <v-col cols="12" md="8">
          <div class="post-content pa-3">
          <v-img
            height="400"
            alt=""
            :src="require(`~/static/images/blog/${article.img}`)"
          ></v-img>
          <p class="mr-3">
            {{ formatDate(article.updatedAt) }}
          </p>
     <!-- content from markdown -->
      <nuxt-content :document="article" />
      <!-- content author component -->
      <author :author="article.author"/>

      <!-- prevNext component -->
      <PrevNext :prev="prev" :next="next" class="mt-8"/>


      <blog-comment />
          </div>
        </v-col>
        <v-col cols="12" md="4">
          <div class="sidebar-wrap pa-3">
            <div class="sidebar-widget mb-5">
              <app-search-input />
            </div>
            <div class="sidebar-widget mb-5">
              <div class="widget-tittle ma-2">
                <h2>Categories</h2>
                <span></span>
              </div>
              <v-chip
                class="ma-2 white--text"
                color="primary"
                label
                v-for="tag of tags"
                :key="tag.slug"
              >
                <NuxtLink :to="`/blog/tag/${tag.slug}`" class="white--text">
                  <v-icon left text-color="white">
                    mdi-label
                  </v-icon>
                  {{ tag.name }}
                </NuxtLink>
              </v-chip>

            </div>

            <div class="sidebar-widget mb-5">
              <div class="widget-tittle ma-2">
                <h2>Follow Us</h2>
                <span></span>
              </div>
              <div>

                <v-btn class="ma-2" color="primary" dark><v-icon dark left> mdi-facebook</v-icon>Facebook</v-btn>
                <v-btn class="ma-2" color="red" dark><v-icon dark left>mdi-twitter</v-icon>twitter</v-btn>
                <v-btn class="ma-2" dark><v-icon dark left>mdi-linkedin</v-icon>linkedin</v-btn>
                <v-btn class="ma-2" dark><v-icon dark left>mdi-instagram</v-icon>instagram</v-btn>
              </div>

            </div>


          </div>

        </v-col>
      </v-row>

    </v-container>
    </div>
  </article>
</template>

<script>
import BlogComment from "~/components/blog/blog-comment";
import PrevNext from "~/components/blog/PrevNext";
import Author from "~/components/blog/Author";
import AppSearchInput from '~/components/widget/AppSearchInput.vue';
export default {
  components: {Author, PrevNext, BlogComment, AppSearchInput},
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const tagsList = await $content('tags')
      .only(['name', 'slug'])
      .where({ name: { $containsAny: article.tags } })
      .fetch()
    const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
   return {
      article,
      tags,
      prev,
      next
    }
  },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.article.title,
      link: [
        {
          href: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        },
      ],
    };
  },
}
</script>

<style lang="scss">
.theme--light.v-application .slug-wrap
{
  background: #faf7f2;
  .post-content {
    background-color: #fff;
  }

}


</style>
