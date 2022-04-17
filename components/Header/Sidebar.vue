<template>
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

</template>
<script>

export default {
  name: "Sidebar",
  data () {
    return {
      clipped: false,
      drawer: false,

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
      ServicesdropDownItems: [
        { title: "Service", to: "/service" },
        { title: "Service Details", to: "/service-details" },
      ],

    }

  },
  props : {
    drawer : Boolean,
    clipped: Boolean,
  },

}
</script>

<style>

</style>
