<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <input v-focus>
    <!-- <div v-demo:foo.a.b="message"></div> -->
    <hr>
    {{ num | capitalize | filterB }}
    <!-- <div v-bind:id="rawId | formatId"></div> -->


    <p v-once>FullName: {{fullName}}</p>
    <p>FirstName: <input type="text" v-model="firstName"></p>
    
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      show: true,
      message: "hello",
      num: "hello",
      firstName: "Dawei",
      lastName: "Lou",
      fullName: ""
    };
  },
  watch: {
    firstName: {
      handler(newName) {
        this.fullName = newName + " " + this.lastName;
      },
      immediate: true
    }
  },
  created() {},
  methods: {},
  directives: {
    focus: {
      // 指令的定义
      inserted(el) {
        el.focus();
      }
    },
    demo: {
      bind(el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
          "name: " +
          s(binding.name) +
          "<br>" +
          "value: " +
          s(binding.value) +
          "<br>" +
          "expression: " +
          s(binding.expression) +
          "<br>" +
          "argument: " +
          s(binding.arg) +
          "<br>" +
          "modifiers: " +
          s(binding.modifiers) +
          "<br>" +
          "vnode keys: " +
          Object.keys(vnode).join(", ");
      }
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
    filterB(value) {
      if (!value) return "";
      return `value：${value}`;
    },
    filterA(value) {
      console.log(value);
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
