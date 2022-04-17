<template>
  <v-app dark>
    <v-content  class="error-area">
      <v-container fluid fill-height>
        <v-layout align-center justify-center text-center>
          <v-flex xs12 sm8 md4>
            <div class="error-item">
              <div class="error--text">
                <h1 class="error_bg" v-if="error.statusCode === 404">
                  {{ pageNotFound }}
                </h1>
                <h1 v-else>
                  {{ otherError }}
                </h1>
                <p>Sorry! The Page Not Found</p>
                <span>Oops! The page you are looking for does not exit. it might been moved or deleted.</span>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>



  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style lang="scss">
.error-area
{
  background: url(~/static/images/hero-pattern-1.webp) no-repeat;
  background-size: cover ;
  a {
    display: inline-block;
    color: #fff;
    background-color: #ffbe00;
    border-radius: 10px;
    padding: 16px 40px;
    margin-top: 70px;
    font-size: 18px;
  }
  p {
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 35px;
  }
  h1.error_bg
  {
    background: url(~/static/images/shop/6.webp) no-repeat center center;
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    font-weight: 700;
    font-size: 200px;
    position: relative;
    letter-spacing: 1px;
    margin-bottom: 20px;
    font-family: 'Rubik', sans-serif;
  }
}

</style>
