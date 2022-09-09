<template>
    <div
      :class="['align-' + align, { dark: dark }]"
      class="title-main mb-10"
    >
      <v-list-item-title  :class="color+'-color'" class="use-text-title3 head text-color-default ">
   
        <span>{{ head }}</span>
  
      </v-list-item-title>
  
      <v-list-item-subtitle  class="use-text-subtitle desc ">{{ desc  }}</v-list-item-subtitle>
  
    </div>
  </template>
  <script>
  export default {
    name: "Title",
    props: {
      align: {
        type: String,
        default: 'left'
      },
      head: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        default: 'primary'
      },
      dark: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  <style lang="scss">
    @mixin align {
      &.align-left {
        @include text-align(left);
        .head {
          &:before {
            @include left(-4px)
          }
        }
      }
      &.align-right {
        @include text-align(right);
        .head {
          &:before {
            @include right(-4px)
          }
        }
      }
    
      &.align-center {
        text-align: center;
        .head {
          &:before {
            width: 50%;
            @include left(25%);
          }
        }
      }
    }
    .title-main {
      @include align;
      .head {
        text-transform: capitalize;
        margin-bottom: $spacing1;
        position: relative;
        display: inline-block;
        span {
          position: relative;
        }
        &.primary-color {
          &:before {
            @include use-theme(background-color, $palette-primary-light, $palette-primary-dark);
          }
        }
        &.secondary-color {
          &:before {
            @include use-theme(background-color, $palette-secondary-light, $palette-secondary-dark);
          }
        }
      }
      &.dark {
    
        .desc {
          position: relative;
        }
      }
    }
    .svg-img
    {
      position: absolute;
      right: 0;
      width: 100%;
      top: 10px;
    }
    .fill-warning {
      fill: #07AEAF !important;
    }
    </style>
    