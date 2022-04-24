<template>
  <div>
    <!---------- Start Navigation Drawer ---------->
    <v-list nav dense >
      <div v-for="(link, i) in links" :key="i">

        <v-list-item
          v-if="!link.subLinks"
          :to="link.to"
          avatar
          class="v-list-item"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="link.title" />
        </v-list-item>

        <v-list-group
          v-else
          :key="link.title"
          :prepend-icon="link.icon"
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="sublink in link.subLinks"
            :to="sublink.to"
            :key="sublink.title"
          >
            <v-list-item-icon>
              <v-icon>{{ sublink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ sublink.title }}</v-list-item-title>

          </v-list-item>

        </v-list-group>

        <!--        <v-subheader
                 v-if="link.subheader"
                 :key="link.subheader"
               >
                 {{ link.subheader }}
               </v-subheader> -->

      </div>

    </v-list>
    <!---------- End Navigation Drawer ---------->
  </div>
</template>
<script>

export default {
  name: "Sidebar",
  data () {
    return {
      links: [
        {icon: 'mdi-home-circle-outline', title: 'Home', to: '/'},
        {icon: 'mdi-chart-bubble', title: 'About Us', to: '/About-Us'},
        {icon: 'mdi-chart-bubble', title: 'TestPage', to: '/TestPage'},
        {icon: 'mdi-note-multiple-outline', title: 'Blog', to: '/blog'},
        {icon: 'mdi-note-multiple-outline', title: 'Shop', to: '/products'},
        {icon: 'mdi-chart-bubble', title: 'faq', to: '/faq'},
        {icon: 'mdi-phone-in-talk', title: 'Contact Us', to: '/contact'},
        {icon: 'mdi-folder', title: 'Service',
          subLinks: [
            {title: 'gallery', to: '/gallery', icon: 'mdi-note-multiple-outline'},
            {title: 'Service', to: '/Service', icon: 'mdi-chart-bubble'},
          ]
        },
      ],

    }

  },
  
}
</script>

<style>

</style>
