<template>
  <div class="search-box">
      <v-dialog
        v-model="dialog"
        width="1000"
        overlay-opacity="0.9"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon  size="20">mdi-magnify</v-icon>
          </v-btn>
        </template>


          <v-card
          outlined
          elevation-0
          >
            <v-text-field
              class="px-16 py-16"
              label="Type keywords here..."
              solo-inverted
              flat
              rounded

            >
              <v-icon
                slot="append"
              >
                mdi-magnify
              </v-icon>
            </v-text-field>

          </v-card>


      </v-dialog>

  </div>







</template>
<script>
export default {
  name: "NavSearch",
  data () {
    return {
      dialog: false,
    }
  },

}
</script>

<style lang="scss">


.v-overlay:hover {
  cursor: url(../../static/cross.png), auto;
}
</style>
