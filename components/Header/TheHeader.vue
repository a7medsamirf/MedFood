<template>
  <div>

    <!---------- Start Navigation Drawer ---------->
  <v-navigation-drawer class="hidden-md-and-up" v-model="drawer"  fixed>
    <v-list-item class="pa-3">
      <div class="logo">
        <NuxtLink to="/">
          <v-img max-height="50" max-width="160" :src="require('static/images/logo.png')" ></v-img>
        </NuxtLink>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
    </v-list-item>
  <sidebar />
  </v-navigation-drawer>
  <!---------- End Navigation Drawer ---------->

   <!---------- Start App Bar ---------->
    <v-app-bar app height="85px" fixed >
      <v-container class="pa-0 fill-height">
        <v-app-bar-nav-icon class="hidden-md-and-up"  @click.stop="drawer = !drawer" />
        <NuxtLink to="/">
          <v-img max-height="50" max-width="200" :src="require('static/images/logo.png')" ></v-img>
        </NuxtLink>
        <v-spacer />
           <v-toolbar-items
         class="hidden-md-and-down DesktopNav"
        v-for="(item, i) in items" :key="i">
           <v-btn text v-if="!item.subitems" :to="item.to" router>
           {{ item.title }}
           </v-btn>

          <v-menu
          transition="slide-y-transition"
          content-class="page-menu"
          min-width="200"
          v-else
          :key="item.title"
          :value="false"
          active-class="primary--text"
          >
<!--       open-on-hover bottom offset-y transition="scroll-y-reverse-transition" -->

            <template v-slot:activator="{ on, attrs }">
              <v-btn :ripple="false" text v-bind="attrs" v-on="on">
               {{ item.title }}
                  <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
              v-for="subitem in item.subitems"
              :to="subitem.to"
              :key="subitem.title"
              active-class="primary--text"
              >
                <v-list-item-title>{{ subitem.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>


        </v-toolbar-items>


      <v-badge bottom color="error" overlap offset-x="20" offset-y="45" v-if="$store.state.cart.cart.length > 0" :content="`${$store.state.cart.cart.length}`" >
       <v-btn @click.stop="rightDrawer = !rightDrawer"  icon><v-icon size="20">mdi-cart-outline</v-icon></v-btn>
      </v-badge>
      <v-btn @click.stop="rightDrawer = !rightDrawer" v-else  icon><v-icon size="20">mdi-cart-outline</v-icon></v-btn>


<nav-search />
<theme-switcher />
      </v-container>
    </v-app-bar>
   <!---------- End App Bar ---------->


         <!---------- Start Cart Drawer ---------->
        <v-navigation-drawer width="350" v-model="rightDrawer" :right="right" fixed  temporary>
       <v-list-item class="pa-3">

         <v-badge bottom color="error" overlap offset-x="25" offset-y="30" v-if="$store.state.cart.cart.length > 0" :content="`${$store.state.cart.cart.length}`" >
          <v-icon class="mr-3">mdi-shopping-outline</v-icon>
         </v-badge>
        <h5>Items</h5>
          <v-spacer></v-spacer>
       <v-btn class="close-icon" icon @click="rightDrawer = !rightDrawer"><v-icon>mdi-close</v-icon></v-btn>
      </v-list-item>
          <v-divider class="white--text"></v-divider>
          <div class="text-center inner align-center justify-center py-16" v-if="$store.state.cart.cart.length == 0">
            <v-img class="d-block mx-auto" src="/emptycart.svg" width="500"></v-img>
            <p>No Items Yet</p>
          </div>
          <div class="py-3">
          <template v-for="(c, i) in $store.state.cart.cart">
              <v-col :key="`cartItem${i}`" class="py-1">
                <v-card
                  outlined
                  elevation-0
                  flat
                >
                  <v-list-item>
                    <v-list-item-avatar
                      tile
                      size="80"
                      color="grey"
                      class="rounded-lg"
                    >
                      <v-img class="rounded-lg" :title="c.product.name" :alt="c.product.name" height="80" :src="require(`~/static/images/shop/${c.product.image}`)" ></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title class="text-p mb-1">{{ c.product.name }}</v-list-item-title>
                      <v-list-item-subtitle>{{ $formatMoney(c.product.price * c.quantity) }}</v-list-item-subtitle>
                      <v-list-item-subtitle>
                        <v-btn @click="$store.commit('cart/IncreaseItemCount', i)" icon color="primary">
                          <v-icon size="20">mdi-plus-circle</v-icon>
                        </v-btn>
                        <span class="mx-2">{{ c.quantity }}</span>
                        <v-btn color="primary"  @click="$store.commit('cart/DecreaseItemCount', i)" icon>
                          <v-icon size="20">mdi-minus-circle</v-icon>
                        </v-btn></v-list-item-subtitle>
                      <v-row
                        align="center"
                        justify="end"
                      >
                        <v-btn
                          @click="$store.commit('cart/RemoveCartItem', i)"
                          absolute
                          bottom
                          right
                          icon
                        >
                          <v-icon color="error" size="18">mdi-trash-can-outline</v-icon>
                        </v-btn>
                      </v-row>
                    </v-list-item-content>



                  </v-list-item>
                </v-card>

              </v-col>
          </template>
           </div>
          <template v-slot:append>
            <div class="pa-2 text-center">
              <div class="mb-3" v-if="$store.state.cart.cart.length > 0">
                <v-btn nuxt to="/cart/confirm" class="rounded-0" large  color="primary">Checkout</v-btn>
                <v-btn nuxt to="/cart" class="rounded-0"  large outlined color="primary">View Cart</v-btn>
              </div>
            </div>
          </template>

    </v-navigation-drawer>
     <!---------- End Cart Drawer ---------->

  </div>

</template>

<script>
import ThemeSwitcher from "~/components/Header/ThemeSwitcher";
import NavSearch from "~/components/Header/NavSearch";
import Sidebar from "~/components/Header/Sidebar";
export default {
  components: {Sidebar, ThemeSwitcher, NavSearch},
  data () {
    return {
      drawer: false,
      right: true,
      rightDrawer: false,
      fixed: false,
            items: [
        {title: 'Home', to: '/'},
        {title: 'About Us', to: '/About-Us'},
        { title: 'Pages',
          subitems: [
            {title: 'gallery', to: '/gallery'},
            {title: 'faq', to: '/faq'},
            {title: 'TestPage', to: '/TestPage'},
          ]
        },

        {title: 'Blog', to: '/blog'},
        {title: 'Shop', to: '/products'},
        {title: 'Contact Us', to: '/contact'},
      ],
    }

  },

}
</script>

<style scoped lang="scss">
@import './Header.scss';
</style>
