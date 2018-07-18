<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    default: true
  }
};
</script>

<style scoped lang="sass">
h3 
  margin: 40px 0 0

</style>
