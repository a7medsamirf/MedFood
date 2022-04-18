<template>
  <div>
    <!---------- Start Navigation Drawer ---------->
   <!--    <sidebar app  :clipped="clipped" :drawer="drawer"  /> -->
    <!---------- End Navigation Drawer ---------->

  <!---------- Start Navigation Drawer ---------->
  <v-navigation-drawer class="hidden-md-and-up" v-model="drawer" :clipped="clipped" fixed>
    <v-list-item class="pa-3">
      <div class="logo">
        <NuxtLink to="/">
          <v-img max-height="50" max-width="160" :src="require('static/images/logo.png')" ></v-img>
        </NuxtLink>
      </div>
      <v-spacer></v-spacer>
      <v-btn class="close-icon" icon @click="drawer = !drawer"> <v-icon>mdi-close</v-icon></v-btn>
    </v-list-item>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <!---------- End Navigation Drawer ---------->

   <!---------- Start App Bar ---------->
    <v-app-bar app height="85px" fixed>
      <v-container class="pa-0 fill-height">
        <v-app-bar-nav-icon class="hidden-md-and-up"  @click.stop="drawer = !drawer" />
        <NuxtLink to="/">
          <v-img max-height="50" max-width="200" :src="require('static/images/logo.png')" ></v-img>
        </NuxtLink>
        <v-spacer />
        <v-toolbar-items class="hidden-md-and-down DesktopNav">
          <v-btn  text v-for="(item, i) in items" :key="i" :to="item.to" router>{{ item.title }}</v-btn>
          <v-menu open-on-hover bottom min-width="240" offset-y transition="scroll-y-reverse-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn :ripple="false" text v-bind="attrs" v-on="on">
                Service
              </v-btn>
            </template>

            <v-list>
              <v-list-item link v-for="(item, index) in dropDownItems" :key="index" :to="item.to">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
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
        <v-navigation-drawer width="350" v-model="rightDrawer" :right="right" fixed :clipped="clipped" temporary>
       <v-list-item class="pa-3">

         <v-badge bottom color="error" overlap offset-x="25" offset-y="30" v-if="$store.state.cart.cart.length > 0" :content="`${$store.state.cart.cart.length}`" >
          <v-icon class="mr-3">mdi-shopping-outline</v-icon>
         </v-badge>
        <h4>Items</h4>
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
export default {
  components: { ThemeSwitcher, NavSearch},
  data () {
    return {
      clipped: false,
      drawer: false,
      right: true,
      rightDrawer: false,
      fixed: false,
      items: [
        {icon: 'mdi-home-circle-outline', title: 'Home', to: '/'},
        {icon: 'mdi-chart-bubble', title: 'About Us', to: '/About-Us'},
        {icon: 'mdi-chart-bubble', title: 'TestPage', to: '/TestPage'},
        {icon: 'mdi-note-multiple-outline', title: 'Blog', to: '/blog'},
        {icon: 'mdi-note-multiple-outline', title: 'Shop', to: '/products'},
/*        {icon: 'mdi-note-multiple-outline', title: 'gallery', to: '/gallery'},
        {icon: 'mdi-chart-bubble', title: 'Service', to: '/Service'},*/
        {icon: 'mdi-chart-bubble', title: 'faq', to: '/faq'},
        {icon: 'mdi-phone-in-talk', title: 'Contact Us', to: '/contact'},
      ],
      dropDownItems: [
        { title: "Service", to: "/service" },
        { title: 'gallery', to: '/gallery'},
      ],

    }

  },

}
</script>

<style lang="scss">
.v-navigation-drawer
{
  .v-list .v-list-item--active {
    opacity: 1;
    box-shadow: 0 6px 18px -8px rgb(94 86 105 / 56%) !important;
    color: #fff;
    background: var(--mainbackground);
  }

  .v-list .v-list-item--active i.v-icon.notranslate.mdi.mdi-record-circle-outline {
    color: #fff;
  }
}
.v-toolbar_content,
.v-toolbar_extension {
  padding: 0;
}

header.v-sheet.theme--light.v-toolbar.v-app-bar.v-app-bar--fixed {
  background-color: transparent;
  box-shadow: none !important;
}

header.v-sheet.theme--light.v-toolbar.v-app-bar.v-app-bar--fixed.v-app-bar--is-scrolled
{
  box-shadow: 0 3px 3px -1px rgb(10 22 70 / 10%), 0 0 1px 0 rgb(10 22 70 / 6%) !important;
  background-color: rgb(255 255 255 / 65%);
  backdrop-filter: blur(8px);
}

.sub-list-group{
  background-color: #f4f5fa;
}


i.v-icon.notranslate.mdi.mdi-record-circle-outline {
  font-size: 15px;
  color:  var(--maincolor);
}

.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #f5f5f5;
}

.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background-color: #272727;
}

.v-sheet.v-app-bar.v-toolbar {
  border-radius: 0;
}
.v-toolbar__content,
.v-toolbar__extension {
  padding: 0px 16px !important;
}
.v-toolbar .DesktopNav .v-btn--active:hover::before,
.v-toolbar .DesktopNav .v-btn--active::before {
  opacity: 1 !important;
}
.v-toolbar .DesktopNav .v-btn:before {
  background-color: transparent;
  border-radius: 3px;
  bottom: unset;
  color: inherit;
  content: "";
  left: 0px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
  border-bottom: 3px solid;
}
header .v-btn:not(.v-btn--round).v-size--default {
  height: 36px;
  min-width: 64px !important;
  padding: 0;
  margin: 0px 10px;
}

.v-navigation-drawer {
  transition: all 0.8s cubic-bezier(0.77, 0.2, 0.05, 1);
}
.close-icon:hover .v-icon
{
  transition: 0.70s;
  transform: rotate(180deg);
}

.v-menu__content {
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%) !important;
}
.v-app-bar .v-list {
  background: #001e26 !important;
  color: #FFFFFF;
}
</style>
