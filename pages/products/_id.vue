<template>
  <div class="shop-wrap">
    <div class="breadcrumb">
      <div class="col-full" v-if="product">
        <h1 class="breadcrumb-heading"> {{ product.name }}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/products">/ shop</nuxt-link>
          <span class="breadcrumb-separator"> / {{ product.name }} </span>
        </nav>

      </div>
    </div>

    <div class="inner d-flex align-center justify-center py-20">
      <v-container >
        <v-row v-if="product"  justify="center">
          <v-col cols="12" lg="6" md="12">
            <div class="product-img">
        <v-img width="100%" height="500"  class="el rounded-lg"  :src="require(`~/static/images/shop/${product.image}`)"></v-img>
            <div class="sb-badge">
              <v-chip
                class="ma-2 white--text rounded-0"
                color="default "
                label
                v-for="(tag, i) in product.tags"
                :key="`prod${product.id}-${i}`"
              >

                <v-icon left text-color="white">
                  mdi-label
                </v-icon>
                {{ tag }}
              </v-chip>
            </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="align-self-center" >

              <v-spacer></v-spacer>
            <v-card-title class="py-2 pa-0 font-weight-bold text-color-default">
              <h3>{{ product.name }}</h3>

              <v-spacer></v-spacer>
            </v-card-title>
                <v-rating
                  readonly
                  half-increments
                  class="mb-2"
                  color="yellow darken-2"
                  background-color="grey lighten-1"
                  :value="product.ratings"
                  dense
                  size="20"
                ></v-rating>

              <h4 class="text-md-h6  primary--text"><span class="old-price">{{ $formatMoney(product.price) }}</span> {{ $formatMoney(product.salePrice) }}</h4>

            <p class="mt-5 mb-7">
              {{ product.description }}
            </p>
            <v-card-actions class="d-flex justify-space-between dense py-2 pa-0">
              <v-btn
                @click="$store.commit('cart/AddToCart', product)"
                class="ma-2 text-capitalize rounded-0 order-btn"
                color="primary"
                large
              >
                <v-icon left>mdi-shopping-outline</v-icon>Add To Cart</v-btn>
            </v-card-actions>

            <v-card-actions>
              <v-list-item>
                  <v-list-item-title>Share:</v-list-item-title>
                  <v-spacer></v-spacer>
                <v-icon class="mr-1 social-link"> mdi-facebook </v-icon>
                <v-icon class="mr-1 social-link">mdi-twitter</v-icon>
                <v-icon class="mr-1 social-link">mdi-instagram</v-icon>
                <v-icon class="mr-1 social-link">mdi-linkedin</v-icon>
                <v-icon class="mr-1 social-link">mdi-pinterest</v-icon>
              </v-list-item>
            </v-card-actions>
          </v-col>
        </v-row>
    <description />

    <support />

      </v-container>

    </div>

  </div>
</template>

<v-btn
  @click="$store.commit('cart/AddToCart', product)"
  class="ma-2 text-capitalize rounded-0 order-btn"
  color="primary"
  large
>
<v-icon left>mdi-shopping-outline</v-icon>Add To Cart</v-btn>

<script>
import Description from '~/components/products/Description.vue';
import Support from '~/components/products/Support.vue';
export default {
  components: { Description, Support },
  async created() {
    let d = await this.$content("products")
      .where({ id: parseInt(this.$route.params.id) })
      .limit(1)
      .fetch();
    this.product = d[0];
  },
  data() {
    return {
      product: null,

    };
  },
};
</script>

<style lang="scss">
.theme--dark
{
  .v-icon.social-link
  {
    box-shadow: none !important;
    border-radius: 50% !important;
    background: #012a35;
    padding: 8px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .v-icon.social-link:hover
  {
    background-color: #ff8e28;
    color: #fff;
  }
}
.theme--light
{
  .v-icon.social-link
  {
    box-shadow: 0 2px 6px 2px rgb(56 125 255 / 10%) !important;
    border-radius: 50% !important;
    background: #fff;
    padding: 8px;
    font-size: 20px;
    color: #ff8e28;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .v-icon.social-link:hover
  {
    background-color: #ff8e28;
    color: #fff;
  }
}
.theme--dark.v-tabs-items,
.theme--dark.v-tabs > .v-tabs-bar
{
  background-color: #001e26;
}
.v-tab.v-tab--active {
  background: #ff8e28 !important;
  color: #fff !important;
}
.v-image:hover .v-image__image  {
  transform: scale(1.02);
}
.v-image .v-image__image{
  transform: scale(1.001);
  transition: all 0.5s;
}
.product-img
{
  position: relative;
  overflow: hidden;
}

.old-price
{
      color: #babbbc!important;
    text-decoration: line-through;
    margin-right: 6px;
}
</style>
