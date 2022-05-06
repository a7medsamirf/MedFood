<template>
  <div class="footer-subscribe ma-3">
    <v-text-field
      label="Enter your email"
      solo-inverted
      flat
      rounded
      dark
      requiredz
      v-model="email"
    >
      <v-icon
        @click="submit"
        slot="append"

      >
        mdi-send-outline
      </v-icon>
    </v-text-field>
  </div>
</template>
<script>
export default {
  name: "Newsletter",
  data() {
    return {
      email: null,
    };
  },
  methods: {
    async submit() {
      await this.$swal({
        title: "Thank You For Subscribing.",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: true,
        timer: 3000,
        timerProgressBar: true,
        text: "You will be notified when we have a deal or items on sale.",
        showConfirmButton: false,
      });
    },
  },
}
</script>

<style scoped>

</style>
