<template>
  <div class="shop-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading"> {{PageTitle}}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="breadcrumb-separator"> / {{PageTitle}}</span>
        </nav>
      </div>
    </div>

    <div class="inner d-flex align-center justify-center py-16">
    <v-container>
      <v-row dense>

        <v-col cols="12" md="4">
          <div class="sidebar-wrap mx-3">
            <div class="sidebar-widget mb-5">
              <v-text-field
                v-model="search"
                clearable
                   autocomplete="on"
                placeholder="Search Products"
                    solo-inverted
                flat
                color="primary"
                      ><v-icon
                      slot="append"
                      color="primary"
                       >
                        mdi-magnify
                      </v-icon>
              </v-text-field>

            </div>
            <div class="sidebar-widget mb-5">
              <v-list v-if="$vuetify.breakpoint.mdAndUp" color="transparent" subheader>
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
                  <NuxtLink :to="`/products/tag/${tag.slug}`" class="white--text">
                    <v-icon left text-color="white">
                      mdi-label
                    </v-icon>
                    {{ tag.name }}
                  </NuxtLink>
                </v-chip>


              </v-list>

            </div>

            <div class="sidebar-widget mb-5">
            <social />
            </div>


          </div>

        </v-col>


        <v-col cols="12" md="8">
          <v-row>
            <template v-for="(product, i) in filteredProducts">
              <v-fade-transition :key="`product${product.id}-${i}`">
                <v-col cols="12" md="6">
                  <v-card
                    outlined
                    elevation-0
                    nuxt
                    class="el"
                  >

                    <nuxt-link :to="`/products/${product.id}`">
                    <v-img  :src="require(`~/static/images/shop/${product.image}`)"  height="300">
                      <template slot="placeholder">
                        <v-row
                          class="fill-height"
                          justify="center"
                          align="center"
                        >
                          <v-progress-circular
                            width="2"
                            size="100"
                            color="primary"
                            indeterminate
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                    </nuxt-link>
                    <v-card-title class="text-md-body-1 font-weight-bold">{{product.name}}</v-card-title>
                    <v-card-subtitle class="primary--text pb-3">
                      ${{ product.price }}
                    </v-card-subtitle>
                    <v-card-text>
                      <v-chip
                        x-small
                        label
                        outlined
                        class="mr-1"
                        v-for="(t, i) in product.tags"
                        :key="`prod${product.id}-${i}`"
                      >
                        {{ t }}
                      </v-chip>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
                      <v-btn
                        @click="$store.commit('cart/AddToCart', product)"
                        class="ma-2 text-capitalize rounded-0 order-btn"
                        color="primary"
                        large
                      >
                        <v-icon left>mdi-shopping-outline</v-icon>Add To Cart</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-fade-transition>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </div>
</template>

<script>
import Social from "~/components/widget/social";
export default {
    name: "products",
  components: {Social},
  head() {
    return {
      title: this.PageTitle,
    }
  },
  async asyncData({ $content, params }) {
    const products = await $content('products')
      /*.only(['title', 'description', 'img', 'tags', 'slug', 'author'])*/ // لعرض بعض البيانات الخاصه بالمقالة
      /* .where({ tags: { $containsAny: ['burger'] } }) */ // استدعاء وعرض مجموعة من المقالات باستخدام التصنيف
      .sortBy('createdAt', 'desc')
      .limit(10)
      /*.limit(5)*/ // استدعاء اخر 5 مقالات
      .fetch()

    const nextPage = products.length === 10
    const articles = nextPage ? products.slice(0, -1) : products
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .fetch()
    return {
      products,
      tags,
      PageTitle: 'Our Blog',
      page: 1,
      nextPage,
    }
  },
  data() {
    return {
      PageTitle: 'Shop',
      products: null,
      categories: null,
      search: null,
    };
  },
  computed: {
    filteredProducts() {
      if (!this.products || !this.search) return this.products;
      return this.products.filter((product) => {
        const s = this.search.toLowerCase();
        const n = product.name.toLowerCase();
        const price = product.price.toString();
        const sprice = product.salePrice?.toString() || "";
        const r = product.ratings.toString();
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        );
      });
    },
  },
};
</script>

<style></style>



