<template>
  <v-app-bar flat color="primary">
    <v-img src="@/assets/logo-text.png" @click="goHome" />
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>
