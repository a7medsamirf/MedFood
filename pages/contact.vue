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

    <div class="inner d-flex align-center justify-center py-16">
      <v-container>
        <v-row>
          <v-col cols="12" md="3"  v-for="(contact, i) in contacts" :key="i">
            <v-card
              class="mx-auto text-center rounded-xl"
            >
              <v-card-text>
                <v-list-item-avatar
                  tile
                  size="60"
                  color="primary"
                  class="rounded-circle"
                >
                  <v-icon large class="white--text">{{ contact.icon }}</v-icon>
                </v-list-item-avatar>

                <h6 class="text--primary">
                  {{ contact.title }}
                </h6>
                <p>{{ contact.text }}</p>
              </v-card-text>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>





      </v-container>
    </div>

  </div>
</template>

<script>
export default {
  name: "contact",
  data(){
    return {
      PageTitle: 'Contact Us',
      contacts: [
        { title: 'Location', text:'Egypt - Cairo', icon: 'mdi-map-marker-multiple-outline' },
        { title: 'Phones', text:'+20123456789', icon: 'mdi-phone'  },
        { title: 'Email', text:'MedFood@mail.com', icon: 'mdi-email-mark-as-unread' },
        { title: 'Working Hours', text:'9:00 AM to 5:00 PM', icon: 'mdi-clock-outline' },
      ],
    }
  },
  head() {
    return {
      title: this.PageTitle,
    }
  }
}
</script>

<style lang="scss">
.row .col-md-4 .v-card:nth-last-child(2)
{
  background: #000 !important;
}

</style>
