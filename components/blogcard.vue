<template>
  <div>
    <v-row>
      <v-col cols="12" md="4" v-for="article of articles" :key="article">
        <v-skeleton-loader
          v-if="data_loaded"
          type=" card-avatar, article, actions"
        >
        </v-skeleton-loader>
        <v-card      
         :loading="loading"
          v-if="!data_loaded"
          outlined
          elevation-0
        >

          <NuxtLink  :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="blog-link">
            <div class="blog-img">

              <v-img
                height="250"
                alt=""
                :src="require(`~/static/images/blog/${article.img}`)"
              ></v-img>
              <div class="sb-badge">Popular</div>
            </div>

            <v-card-title class="blog-title">{{ article.title }}</v-card-title>
          </NuxtLink>
          <v-card-text>
            <p class="blog-description">{{ article.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn :to="{ name: 'blog-slug', params: { slug: article.slug } }"  x-large color="white" class="button figs-btn pa-5 white--text">Read More </v-btn>


          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>

</template>


<script>
export default {
  name: "Blog-Card",
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .limit(5)
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()

    return {
      articles,
      data_loaded : true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 3000);
  },
}
</script>



<style lang="scss">

</style>
