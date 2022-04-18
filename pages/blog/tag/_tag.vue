<template>
  <div class="tag-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading">Articles tagged {{ tag.name }}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/blog">/ Blog</nuxt-link>
          <span class="breadcrumb-separator"> / {{ tag.name }}</span></nav>
      </div>
    </div>

    <div class="inner d-flex align-center justify-center py-16">
      <v-container>
        <NuxtLink to="/blog">Back to All Articles</NuxtLink>
        <h3 class="mb-4 font-bold text-4xl">   Here are a list of articles by {{ articles[0].author.name }}:</h3>

        <v-row>
          <v-col cols="12" md="8">
            <v-row>

              <v-col  v-for="article in articles"
                      :key="article.slug"
                      sm="12"
                      md="6"
              >
                <v-skeleton-loader
                  v-if="data_loaded"
                  type=" card-avatar, article, actions"
                >
                </v-skeleton-loader>
                <v-card
                  v-if="!data_loaded"
                >

                  <NuxtLink
                    :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                  >
                    <div class="blog-img">
                      <v-img
                        v-if="article.img"
                        :src="require(`~/static/images/blog/${article.img}`)"
                        :alt="article.alt"
                        height="250"
                      ></v-img>
                      <div class="sb-badge">
                        <v-chip
                          class="ma-2 white--text "
                          color="primary"
                          label
                          v-for="tag in article.tags" :key="tag"
                        >
                          <v-icon left text-color="white">
                            mdi-label
                          </v-icon>
                          {{ tag }}

                        </v-chip>
                      </div>



                    </div>

                  </NuxtLink>
                  <div class="post-content pa-5">
                    <v-card-text class="py-1 pa-0">
                      <span class="blog-Date"> <v-icon small  color="primary">mdi-clock-outline</v-icon>  {{ formatDate(article.updatedAt) }}</span>
                      <span class="blog-user"> <v-icon small  color="primary">mdi-account</v-icon> {{ article.author.name }}</span>
                    </v-card-text>
                        <NuxtLink  :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                      <v-card-title class="py-2 pa-0 font-weight-bold">{{ article.title }}</v-card-title>
                    </NuxtLink>
                    <v-card-text class="py-1 pa-0">{{ article.description }}</v-card-text>

                    <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
                      <v-btn :to="{ name: 'blog-slug', params: { slug: article.slug } }"  large color="primary"
                             class="button figs-btn pa-5 white--text">
                        Read More
                        <v-icon right small>mdi-arrow-right-thick</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </div>
                </v-card>

              </v-col>
            </v-row>

          <v-col cols="12" md="4">

          </v-col>
          </v-col>
        </v-row>


      </v-container>
    </div>



  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles')
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tag,
      data_loaded : true
    }
  },
  mounted(){
    setTimeout(()=>{
      this.data_loaded= false;
    } , 2000);
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
}
</script>

<style lang="scss">
.theme--light.v-application {
  .tag-wrap{
    background: #faf7f2;
    color: rgba(0, 0, 0, 0.87);
  }
  .v-card {
    overflow: hidden;

  }
}
.v-card {
  .blog-description {
    margin-top: 0;
    margin-bottom: 0;
    color: #636465;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.blog-link {
  text-decoration: none;
  color: #41641e;
}

.blog-img
{
  overflow: hidden;
  cursor: pointer;
}
.v-card .blog-img .v-image
{
  transition: .3s ease-in-out;
}

.v-card:hover .blog-img .v-image{
transform: rotate(15deg) scale(1.4);
}


.figs-btn.v-btn
{
  transition: all 0.5s ease-in-out;
  :hover i.v-icon
  {
    transition: all 0.5s ease-in-out;
    transform: translateX(5px);
  }
}

</style>
