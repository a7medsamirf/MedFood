<template>
  <div id="footer">
    <v-footer
      class="pa-0 pt-16"
      color="footercolor"
    >
      <v-container>
        <v-row>
          <v-col cols="12" lg="3" md="6" sm="12">
            <v-img
              class="ma-3"
              max-height="50"
              max-width="200"
              :src="require('static/images/logo.png')" >
            </v-img>
            <p class="text-justify ma-3">
              Lorem ipsum dolor sit amet, consecrated advising elite. Sed incident, erat in malady aliquot, </p>

            <newsletter />

          </v-col>
          <v-col cols="12" lg="3" md="6" sm="12">
            <div class="widget-tittle ma-2"><h2 class="white--text">Quick Links</h2> <span></span></div>

            <v-list class="Quick-Links">
              <v-list-item-group>
                <v-list-item
                  class="white--text no-active"
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
                  router
                  active-class="no-active"
                >
                  <v-list-item-icon>
                    <v-icon   class="white--text" v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>

          </v-col>
          <v-col cols="12" lg="3" md="6" sm="12">
            <div class="widget-tittle ma-2"><h2 class="white--text">Quick Links</h2> <span></span></div>

            <v-list class="Quick-Links">
              <v-list-item-group>
                <v-list-item
                  class="white--text no-active"
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
                  router
                  active-class="no-active"
                >
                  <v-list-item-icon>
                    <v-icon   class="white--text" v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>

          </v-col>
          <v-col cols="12" lg="3" md="6" sm="12">
            <div class="widget-tittle ma-2"><h2 class="white--text">Contact Us</h2> <span></span></div>
            <v-list class="Quick-Links">
              <v-list-item-group>
                <v-list-item
                  class="white--text no-active"
                  v-for="(Contact, i) in Contacts"
                  :key="i"
                >
                  <v-list-item-icon>
                    <v-icon   class="white--text" v-text="Contact.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="Contact.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>

          </v-col>

          <v-col
            class="lighten-2 text-center white--text"
            cols="12"
          >
            <v-divider class="white--text"></v-divider>
            <u-animate-container>
              <u-animate name="fadeInDown" delay="1s" duration="1s" :iteration="1" :offset="0" animateClass="animated" :begin="false">
                <div class="py-4" >
                  {{ new Date().getFullYear() }} — <strong>MedFood</strong>
                </div>
              </u-animate>
            </u-animate-container>

          </v-col>
  <div class="running-cycle"><div></div></div>
        </v-row>
      </v-container>




    </v-footer>

  </div>

</template>


<script>


import Newsletter from "~/components/Footer/Newsletter";
export default {

  name: "The-Footer",
  components: {Newsletter},
  data: () => ({
    Services: [
      { text: 'Real-Time', icon: 'mdi-clock' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
    items: [
      { text: 'Faq', icon: 'mdi-clock', to: '/faq' },
      { text: 'Audience', icon: 'mdi-account' },
      { text: 'Conversions', icon: 'mdi-flag' },
    ],
    Contacts: [
      { text: '+020123456789', icon: 'mdi-phone' },
      { text: 'info@medfood.com', icon: 'mdi-email-multiple-outline' },
      { text: 'hello@medfood.com', icon: 'mdi-email-multiple-outline' },
      { text: 'Cairo, Egypt', icon: 'mdi-map-marker-radius-outline' },
    ],

  }),
}

</script>

<style lang="scss">
#footer
{
  .v-footer
  {
    border-radius: 45px 45px 0 0;
    border-bottom: 1px solid #8788988c;
  }
  .footer-subscribe .v-icon
  {
    width: 35px;
    height: 35px;
    line-height: 37px;
    font-size: 18px;
    border-radius: 50%;
    color: #fff;
    background-color: #ff8e28;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    animation: flashing 1.5s infinite linear;
    position: absolute;
    top: 5px;
    right: 6px;
    padding: 6px;
    text-align: center;
  }
.Quick-Links
{
  background: transparent;
}
.no-active::before {
    opacity: 0 !important;
  }
}

.running-cycle div {
    background-image: url(static/images/delivery-boy.png);
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 150px;
    width: 150px;
    height: 150px;
    position: absolute;
    left: 0;
    bottom: -5px;
    animation: running-anim 20s linear infinite;
    z-index: 1;
}
.running-cycle {
    overflow: hidden;
    width: 100%;
    height: 120px;
    position: absolute;
    left: 0;
    bottom: 0;
}
@-moz-keyframes running-anim {
    0% {
        left: -30%
    }
    100% {
        left: 100%
    }
}

@-webkit-keyframes running-anim {
    0% {
        left: -30%
    }
    100% {
        left: 100%
    }
}

@keyframes running-anim {
    0% {
        left: -30%
    }
    100% {
        left: 100%
    }
}

</style>
