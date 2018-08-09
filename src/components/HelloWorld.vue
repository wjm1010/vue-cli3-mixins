<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    default: false,
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function(value) {
        return value >= 0;
      }
    }
  }
};
</script>

<style scoped lang="sass">
h3 
  margin: 40px 0 0

</style>
