<template>
    <button class="l-button" :class="{[`icon-${iconPosition}`]:true}">
      <l-icon v-if="icon" :name="icon" class="icon"></l-icon>
      <l-icon name="loading" class="loading"></l-icon>
      <div class="content">
        <slot></slot>
      </div>

    </button>
</template>

<script>
export default {
  //props: ['icon', 'iconPosition'],
  props:{
    icon:{},
    iconPosition:{
      type:String,
      default:'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    }
  },
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform:rotate(360deg);
  }
}
.l-button {
  height: var(--button-height);
  padding: 0 1em;
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
  > .icon{
    order:1;
    margin-right:.3em;
  }
  > .content{
    order: 2;
  }
  &.icon-right{
    > .icon{
      order:2;
      margin-right: 0;
      margin-left: .3em;
    }
    > .content{
      order:1;
    }
  }
  .loading{
    animation: spin 1s infinite;
  }
}

</style>