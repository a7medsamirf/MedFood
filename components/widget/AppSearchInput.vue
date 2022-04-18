<template>
  <div class="sidebar-widget mb-5">


     <v-text-field
        v-model="searchQuery"
        autocomplete="on"
        :loading="loading"
        placeholder="Search Articles"
        solo-inverted
        flat
        clearable
        color="primary"

      >
       <v-icon
         slot="append"
         color="primary"
       >
         mdi-magnify
       </v-icon>
     </v-text-field>





   <v-list dense v-if="articles.length">
        <v-list-item-group    v-model="selectedItem"
        color="primary">
          <v-list-item v-for="article of articles" :key="article.slug">
            <v-list-item-content  >
                      <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black"
        >
              <v-list-item-title>{{ article.title }}</v-list-item-title>
                </NuxtLink>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>




  </div>
</template>
<script>
export default {
  data() {
    return {
      searchQuery: '',
      articles: [],
      loading: false,
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = []
        return
      }
      this.articles = await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    }
  },
    methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },
  },
}
</script>
