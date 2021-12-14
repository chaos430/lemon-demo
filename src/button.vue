<template>
  <button class="l-button">按钮</button>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.l-button{
  height: var(--button-height);
  padding: 0 1em;
  font-size: var(--font-size);
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover{
    border-color:var(--border-color-hover);
  }
  &:active{
    background-color: var(--button-active-bg);
  }
  &:focus{
    outline: none;
  }
}

</style>