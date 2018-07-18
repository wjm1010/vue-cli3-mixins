<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mixinTest1, mixinTest2, mixinTest3, mixinTest4 } from "@/assets/test";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  // 全局混入
  mixins: [mixinTest1, mixinTest2, mixinTest3, mixinTest4],
  data() {
    return {
      message: "goodbye",
      bar: "def",
      myOption: "hello!"
    };
  },
  created() {
    console.log("组件钩子被调用");
    this.fn();
    this.bars();
    this.conflicting();
  },
  methods: {
    bars() {
      console.log("bar");
    },
    conflicting() {
      console.log("from self");
    }
  }
};
</script>
