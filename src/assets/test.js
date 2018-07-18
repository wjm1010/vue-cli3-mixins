module.exports = {
  mixinTest1: {
    created() {
      console.log("mixinTest1");
    }
  },
  mixinTest2: {
    data() {
      return {
        message: "hello",
        foo: "abc"
      };
    },
    created() {
      console.log("mixinTest2");
      console.log(this.$data);
    }
  },
  mixinTest3: {
    created() {
      console.log("mixinTest3");
      console.log("混入对象的钩子被调用");
    }
  },
  mixinTest4: {
    created() {
      console.log("mixinTest4");
    },
    methods: {
      fn() {
        console.log("fn");
      },
      conflicting() {
        console.log("from mixin");
      }
    }
  }
};
