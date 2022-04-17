<template>
  <v-fade-transition mode="out-in">

           <v-btn icon>
        <v-icon
         size="20"
          :key="$vuetify.theme.dark"
          :color="$vuetify.theme.dark ? 'primary' : 'dark'"
          @click="toggle_dark_mode"
        >
          {{ $vuetify.theme.dark ? icons.mdiWhiteBalanceSunny : icons.mdiWeatherNight  }}
        </v-icon>
      </v-btn>

  </v-fade-transition>
</template>

<script>
import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'

export default {
  name: "ThemeSwitcher",
  data () {
    return {
      icons: {
        mdiWeatherNight,
        mdiWhiteBalanceSunny,
      },

    }
  },
  methods: {
    toggle_dark_mode: function() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    }
  },
}
</script>


<style scoped>

</style>
