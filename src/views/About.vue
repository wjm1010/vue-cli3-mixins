<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: "about",
  // 全局混入
  data() {
    return {
      myOption: "aaaaa"
    };
  },
  created() {},
  mixin: {
    created() {
      var myOption = this.$options.myOption;
      if (myOption) {
        console.log(myOption);
      }
    }
  },
  methods: {}
};
</script>
