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
                  link
                  v-for="(c, i) in categories"
                  :key="`category${i}`"
                >

                  <v-icon left text-color="white">
                    mdi-label
                  </v-icon>
                  {{ c.name }}

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

            <template v-for="(p, i) in filteredProducts">
              <v-fade-transition :key="`product${p.id}-${i}`">
                <v-col cols="12" md="6">
                  <v-card
                    outlined
                    elevation-0
                    nuxt
                    class="el"
                  >

                    <nuxt-link :to="`/products/${p.id}`">
                    <v-img  :src="require(`~/static/images/shop/${p.image}`)"  height="300">
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
                    <v-card-title class="text-md-body-1 font-weight-bold">{{p.name}}</v-card-title>
                    <v-card-subtitle class="primary--text pb-3">
                      ${{ p.price }}
                    </v-card-subtitle>
                    <v-card-text>
                      <v-chip
                        x-small
                        label
                        outlined
                        class="mr-1"
                        v-for="(t, i) in p.tags"
                        :key="`prod${p.id}-${i}`"
                      >
                        {{ t }}
                      </v-chip>
                    </v-card-text>
                    <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
                      <v-btn
                      :loading="loading"
                       :disabled="loading"
                        @click="$store.commit('cart/AddToCart', p); loader = 'loading' "
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
  async created() {
    this.products = await this.$content("products").fetch();
    this.categories = await this.$content("category").fetch();
  },
  data() {
    return {
      
      PageTitle: 'Shop',
      products: null,
      categories: null,
      search: null,
      loader: null,
      loading: false,
    };
  },
  watch: {
  loader () {
    const l = this.loader
    this[l] = !this[l]

    setTimeout(() => (this[l] = false), 3000)

    this.loader = null
  },
},
  computed: {
    filteredProducts() {
      if (!this.products || !this.search) return this.products;
      return this.products.filter((p) => {
        const s = this.search.toLowerCase();
        const n = p.name.toLowerCase();
        const price = p.price.toString();
        const sprice = p.salePrice?.toString() || "";
        const r = p.ratings.toString();
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



