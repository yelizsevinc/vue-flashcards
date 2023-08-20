<template>
  <v-app class="bg-secondary">
    <default-bar />

    <main-view />
  </v-app>
</template>

<script setup>
import DefaultBar from "@/layouts/default/AppBar.vue";
import MainView from "@/layouts/default/Main.vue";
</script>
