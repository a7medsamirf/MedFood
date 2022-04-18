<template>
  <v-app>

    <the-header />
    <v-main>
        <Nuxt  />
    </v-main>
  <tab-bar />
    <the-footer />
    <on-scroll />
  </v-app>
</template>

<script>
import TheFooter from "~/components/TheFooter";
import TheHeader from "~/components//Header/TheHeader";
import TabBar from "~/components/Tab-bar";
import OnScroll from "~/components/onScroll";
export default {
  components: { OnScroll, TheHeader, TabBar, TheFooter},
  transition: 'slide-bottom'
}
</script>

<style>




.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(0);
  }
}

</style>
