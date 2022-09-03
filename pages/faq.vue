<template>
  <div class="faq-wrap">
    <div class="breadcrumb">
      <div class="col-full">
        <h1 class="breadcrumb-heading"> {{PageTitle}}</h1>
        <nav class="woocommerce-breadcrumb">
          <nuxt-link to="/">Home</nuxt-link>
          <span class="breadcrumb-separator"> / {{PageTitle}}</span>
        </nav>
      </div>
    </div>
    <div class="inner d-flex align-center justify-center py-16">
      <v-container>
        <v-row class="spacing6">
          <v-col md="6" cols="12">
            <h4
              class="use-text-primary use-text-title2 mb-3"
            >
              Frequently Answers and Questions

            </h4>
            <p
              class="text use-text-subtitle2"
            >
              Have a question? Check out our frequently asked questions to find your answer.
            </p>
              <div class="hidden-sm-and-down">

                <img
                  :src="imgAPI.faq[0]"
                  height="400"
                  width="400"
                  alt="questions"
                />
              </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="accordion">
              <v-expansion-panels
              >
                <v-expansion-panel
                  v-for="(item, index) in faqData"
                  :key="index"
                  class="paper my-1"

                >
                  <v-expansion-panel-header class="content">
                  <span class="heading ">
                    {{ item.question }}
                  </span>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="detail">
                  <span>
                    {{ item.answer }}
                  </span>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-col>
        </v-row>

      </v-container>

    </div>
  </div>
</template>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  name: "faq",
  data(){
    return {
      PageTitle: 'Faq',
      imgAPI: imgAPI,
      faqData : [
        {
          question: 'Pellentesque ac bibendum tortor?',
          answer:
            'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.'
        },
        {
          question: 'In mi nulla, fringilla vestibulum?',
          answer:
            'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
        },
        {
          question: 'Pellentesque ac bibendum tortor?',
          answer:
            'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.'
        },
        {
          question: 'Quisque lacinia purus ut libero?',
          answer:
            'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
        },
        {
          question: 'Quisque ut metus sit amet augue?',
          answer:
            'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
        },
        {
          question: 'Quisque lacinia purus ut libero?',
          answer:
            'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
        },
        {
          question: 'Pellentesque ac bibendum tortor?',
          answer:
            'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
        }
      ]
    };
  },
  head() {
    return {
      title: this.PageTitle,
    }
  }
}
</script>

<style lang="scss">
.theme--dark.v-expansion-panels .v-expansion-panel{
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #012a35 !important;
  border: none;
}
.theme--light.v-application .v-expansion-panel{
  overflow: hidden;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%) !important;
  color: #000;
  border: none;
}

</style>
