<template>
  <div class="main_container">
    <h1>Header</h1>
    <Nav></Nav>

    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/layouts/nav.vue';
export default {
  components: {
    Nav
  },
  props: {},
  data() {
    return {};
  },
  async beforeMount() {},
  async mounted() {},
  methods: {}
};
</script>

<style></style>
