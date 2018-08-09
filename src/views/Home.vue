<template>
  <div class="home">
    <hello-world
      :msg="message"
      :age="age">
    </hello-world>
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
  // 复用代码的主要方式是使用 mixins
  // 全局混入
  mixins: [mixinTest1, mixinTest2, mixinTest3, mixinTest4],
  data() {
    return {
      age: 11,
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
