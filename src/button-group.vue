<template>
  <div class="l-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'lemonButtonGroup',
  mounted() {
    for (let node of this.$el.children){
      if(node.nodeName.toLowerCase() !== 'button'){
        console.warn('l-button-group的子元素应该全是l-button')
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
.l-button-group{
  display: inline-flex;
  vertical-align: middle;
  > .l-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index:1;
    }
  }
}
</style>