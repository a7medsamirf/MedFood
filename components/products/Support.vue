<template>
<div class="pt-20">
    <v-row>
    <v-col lg="4" v-for="(support, index) in supports" :key="index">
  <v-card
    class="mx-auto py-3"
    outlined
    elevation-0
  >
    <v-list-item three-line>
          <v-list-item-avatar
        tile
        size="70"
        color="primary"
        class="rounded-circle"
      >
      <v-icon x-large class="white--text">{{ support.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h6 mb-1">{{ support.title }}</v-list-item-title>
        <v-list-item-subtitle>{{support.description}}</v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>
  </v-card>
    </v-col>

    </v-row>

</div>
</template>

<script>
export default {
    name: "Support",
  data () {
    return {
     supports: [
      {icon: 'mdi-moped', title: 'Free Delivery', description: 'Phasellus blandit massa enim elit of passage varius nunc.', },
      {icon: 'mdi-currency-usd', title: '30 Day Returns Guarantee' , description: 'Phasellus blandit massa enim elit of passage varius nunc.',},
      {icon: 'mdi-face-agent', title: '27/4 Online Support' , description: 'Phasellus blandit massa enim elit of passage varius nunc.',},
    ]
  }
  }
}
</script>



<style>

</style>
