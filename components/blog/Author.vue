<template>
  <div class="author-wrap">
      <v-row>
        <v-col
               sm="12"
               cols="12"
        >
          <v-alert
            color="primary"
            dark
            icon="mdi-vuetify"
            border="left"
            prominent
          >
            Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Curabitur at lacus ac velit ornare lobortis.
          </v-alert>

            <v-card
              class="author-box"
                outlined
                elevation-0
            >
              <NuxtLink
                :to="`/blog/author/${author.name}`"
              >
              <v-list-item three-line>
                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                  class="rounded-circle"
                >
                  <v-img
                    :src="require(`~/static/images/avatars/${author.img}`)"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="text-h5 mb-1" color="primary">
                    {{ author.name }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{ author.bio }}</v-list-item-subtitle>
                </v-list-item-content>


              </v-list-item>

              </NuxtLink>
            </v-card>

        </v-col>


      </v-row>


  </div>
</template>

<script>
export default {
  name: "Author",
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">

  .theme--light .author-box {
    background-color: #faf7f2 !important;
    padding: 20px;
    border-left: 5px solid #eb8215;
    border-radius: 10px;
  }


.theme--dark .author-wrap .author-box {
  background-color: #012a35 !important;
  padding: 20px;
  border-left: 5px solid #eb8215ab;
  border-radius: 10px;
}
</style>
