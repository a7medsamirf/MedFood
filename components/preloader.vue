<template>
  <div class="loader-wrap">
    <div class="page-loader" v-if="!isloaded">
      <div class="slack">
        <div class="green"></div>
        <div class="blue"></div>
        <div class="orange"></div>
        <div class="pink"></div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "preloader",
  data: () => {
    return {
      isloaded: false
    }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloaded = true;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #EB6500;
  z-index: 999;
  background-position: center center;
  background-repeat: no-repeat;
/*
  background-image:url(../static/preloader.svg);
*/
}

$default-color-white: #ffffff;
$default-color-green: #3EB991;
$default-color-blue: #6ECADC;
$default-color-pink: #E01563;
$default-color-orange: #E9A820;

/* Dot */
$dot-width: 17px;
$dot-opacity: .75;

/* Mixins */
@mixin slack-dot-bg($background-color){
  &::before {
    background-color: rgba($background-color, $dot-opacity);
  }
}

.loader {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
}

/* Slack */
.slack {
  width: ($dot-width * 5);
  height: ($dot-width * 5);
  align-self: center;
  position: relative;
}
.green, .blue,
.pink, .orange {
  position: absolute;
  width: $dot-width;
  height: $dot-width;
  border-radius: $dot-width;
  display: block;
  &::before {
    right: 0;
    /* Animation */
    animation-name: slack-width;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-direction: normal;
    animation-duration: 2s;
    width: $dot-width;
    position: absolute;
    height: $dot-width;
    content: '';
    display: block;
    border-radius: $dot-width;
  }
}
.green {
  top: 0;
  left: 0;
  transform: rotate(70deg);
  @include slack-dot-bg($default-color-green);
}
.blue {
  top: 0;
  right: 0;
  transform: rotate(160deg);
  @include slack-dot-bg($default-color-blue);
}
.orange {
  bottom: 0;
  right: 0;
  transform: rotate(-110deg);
  @include slack-dot-bg($default-color-orange);
}
.pink {
  bottom: 0;
  left: 0;
  transform: rotate(-20deg);
  @include slack-dot-bg($default-color-pink);
}

@keyframes slack-width {
  0% { width: $dot-width; right: 0; }
  30% { width: ($dot-width * 6); right: -($dot-width * 5); }
  60% { width: $dot-width; right: -($dot-width * 5); }
}

</style>
