<template>
  <div class="contact-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading">{{PageTitle}}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="breadcrumb-separator dark"> / {{PageTitle}}</span></nav>
      </div>
    </div>

    <div class="inner align-center justify-center py-16">
      <div class="text-center" v-if="$store.state.cart.cart.length == 0">
        <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
        <p>No Items Just Yet</p>
      </div>
      <v-container>
        <v-row>
          <v-col cols="12" md="10">
            <v-simple-table  v-if="$store.state.cart.cart.length > 0">
              <template>
                <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody  v-for="(c, i) in $store.state.cart.cart" :key="c">
                <tr :key="`cartItem${i}`">
                  <td>
                    <v-img
                      class="rounded-lg"
                      :title="c.product.name"
                      height="50"
                      width="50"
                      :src="require(`~/static/images/shop/${c.product.image}`)" >
                    </v-img>

                    <h5 class="font-weight-bold">
                      {{ c.product.name }}
                    </h5>


                  </td>
                  <td>
                        <v-btn
                    @click="$store.commit('cart/IncreaseItemCount', i)"
                    icon
                    color="primary"
                  >
                    <v-icon size="20">mdi-plus-circle</v-icon>
                  </v-btn>
                    <span class="mx-2">{{ c.quantity }}</span>
                    <v-btn
                      color="primary"
                      @click="$store.commit('cart/DecreaseItemCount', i)"
                      icon
                    >
                      <v-icon size="20">mdi-minus-circle</v-icon>
                    </v-btn>
                    </td>
                  <td> {{ $formatMoney(c.product.price) }}</td>
                  <td>{{ $formatMoney(c.product.price * c.quantity) }}</td>
                  <td> <v-btn @click="$store.commit('cart/RemoveCartItem', i)" right icon><v-icon color="error" size="18">mdi-trash-can-outline</v-icon></v-btn></td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
          <v-col cols="12" md="2">
            <div class="mb-3" v-if="$store.state.cart.cart.length > 0">
              <v-btn
                nuxt
                to="/cart/confirm"
                min-width="150"
                min-height="45"
                color="primary"
              >Checkout  {{ $formatMoney ($store.state.cart.Total) }} </v-btn>
            </div>

          </v-col>
        </v-row>

      </v-container>




    </div>
  </div>
</template>
<script>
export default {
  name: "Cart",
  head() {
    return {
      title: this.PageTitle,
    }
  },
  data(){
    return {
      PageTitle: 'Cart',
    }
  },

};
</script>

<style lang="scss">
.v-data-table > .v-data-table__wrapper > table {
  border-spacing: 0 0.5rem;
}

.v-data-table {
  .v-data-table__wrapper {
    table {
      td,
      th {
        padding-left: 16px !important;
        min-width: 170px !important;
        border: 1px solid #e8e8e8 !important;
        border-bottom: none !important;
        font: 14px/40px !important;
        text-align: left !important;
      }

      td {
        color: #666 !important;
      }

      th {
        color: #231E41 !important;
        border: none !important;
        font-size: 16px !important;
        font-weight: $font-medium;
      }

 

      tbody tr td {
        border: none !important;
        height: 65px;
      }
    }
  }
}
.theme--light.v-application
{
     tbody {
        tr {
          margin: 20px 5px;
          background-color: #fbfbfb !important;
          cursor: pointer !important;
        }
      }
}
.theme--dark.v-application
{
       tbody {
        tr {
          margin: 20px 5px;
          background-color: #012a35 !important;
          cursor: pointer !important;
        }
      }
}

</style>
