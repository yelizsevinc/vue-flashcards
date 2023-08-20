<template>
  <v-container class="fill-height">
    <v-responsive class="text-center fill-height">
      <h1 class="text-h2 font-weight-bold pa-4">English</h1>
      <v-container fluid class="d-flex flex-wrap justify-space-between">
        <flash-card
          v-for="data in englishData"
          :key="data.question"
          :data="data"
        ></flash-card>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script setup>
import FlashCard from "@/components/FlashCard.vue";
import { englishData } from "@/data/english-data.js";
</script>
