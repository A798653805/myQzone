export default {
  data() {
    return {
      activeIndex2: this.$route.path
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.go(0);
    }
  },
}