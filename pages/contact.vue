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

    <div class="inner d-flex align-center justify-center py-20">
      <v-container>
        <v-row>
          <v-col cols="12" lg="3" md="6"  v-for="(contact, i) in contacts" :key="i">
              <u-animate-container>
              <u-animate mode="out-in" name="fadeInRightBig" delay="1s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
               <v-hover>
      <v-card
            outlined
            elevation-0
              class="mx-auto text-center rounded-xl  contact-box "
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
            </v-card>
            </v-hover>
              </u-animate>
            </u-animate-container>

        
      
          </v-col>

          <v-col cols="12" md="12" class="pt-20 mb-16">
              <div class="text-center">
              <h5 class="ma-3 primary--text ">Get In Touch</h5>
              <h3 class="text-color-default ma-3 Welcome-text-title">Send Us Message</h3>
               <v-img
                  :src="require(`~/static/images/section_delimiter.png`)"
                  height="25"
                  contain
                ></v-img>
            </div>
          </v-col>

          <v-col class="py-0" cols="12" lg="6" md="6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55178.81412767334!2d31.267391365292262!3d30.060598109774542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e1!3m2!1sar!2seg!4v1650283896511!5m2!1sar!2seg"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <v-row>
              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  class="mb-0 rounded-lg"
                  v-model="name"
                  :rules="nameRules"
                  label="Your Name *"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" class="py-0">
                <v-text-field
                  class="mb-0 rounded-lg"
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12" class="py-0">
                <v-text-field
                class="mb-0 rounded-lg"
                  v-model="name"
                  :rules="nameRules"
                  label="Subject"
                  required
                  outlined
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="12" class="py-0">
                <v-textarea
                class="mb-0 rounded-lg"
                  name="input-7-1"
                  label="Write your message here..."
                  outlined
                  required
                ></v-textarea>
              </v-col>

              <v-col cols="12" md="12" class="py-0">
                <v-btn
                  x-large color="primary"
                  class="button figs-btn"
                >
                  Send Message
                </v-btn>
              </v-col>
            </v-row>
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
.v-card:nth-last-child(2)
{
  background: #000 !important;
}
.contact-box
{
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover
{
    background: #ff8e28;
    color: #fff !important;
    transition: all 0.5s ease-in-out;
  
}
  &:hover .v-avatar
  {
    background: #ffff !important;
    transition: all 0.5s ease-in-out;
  }
   &:hover .v-icon
   {
     color: #ff8e28 !important;
   }

}

.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
    color: #6f6f874a;
}
</style>
