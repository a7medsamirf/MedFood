<template>
    <div class="iCountUp">
      <ICountUp
        :delay="delay"
        :endVal="endVal"
        :options="options"
        @ready="onReady"
      />
    </div>
  </template>
   
  <script >
    import ICountUp from 'vue-countup-v2';
    export default {
      name: 'demo',
      components: {
        ICountUp
      },
      data() {
        return {
          delay: 1000,
          endVal: 2000,
          options: {
            useEasing: true,
            useGrouping: true,
            separator: 'k',
            decimal: '.',
            prefix: '',
            suffix: ''
          }
        };
      },

    };
  </script>
   
  <style scoped>
    .iCountUp {
      font-size: 12em;
      margin: 0;
      color: #4d63bc;
    }
  </style>