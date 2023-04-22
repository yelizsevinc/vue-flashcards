<template>
  <v-card
    class="pa-2 mb-6 overflow-auto"
    :color="color"
    :dark="isQuestionDisplayed"
    @click="flip()"
    height="300"
    width="20vw"
  >
    <div v-if="isQuestionDisplayed">
      <v-card-text class="text-h5 font-weight-bold pt-12 mt-12">
        <v-icon large left>mdi-comment-question</v-icon><span class="pl-2">{{data.question}}</span>
      </v-card-text>

      <v-card-actions>
        <v-row>
          <v-chip
            v-for="hint in data.hints"
            :key="hint"
            color="secondary"
            class="ma-2 ml-4"
          >
            {{ hint }}
          </v-chip>
        </v-row>
      </v-card-actions>
    </div>

    <div v-else>
      <v-card-title>
        <v-icon large left>mdi-comment-question</v-icon>
        <span class="text-h6 font-weight-bold pl-2">{{data.question}}</span>
      </v-card-title>

      <v-card-text
        class="text-h6 font-weight-bold pt-8 mt-8"
      >{{ data.answer }}</v-card-text>

      <v-card-text
        class="pt-2 font-italic"
      >{{ data.explanation }}</v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "FlashCard",
  data: () => ({
    isQuestionDisplayed: true,
  }),
  computed: {
    color() {
      return this.isQuestionDisplayed ? "primary" : "accent";
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    flip() {
      this.isQuestionDisplayed = !this.isQuestionDisplayed;
    },
  },
};
</script>
