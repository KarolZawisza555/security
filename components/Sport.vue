<template>
  <div>
    <circular-loading color="primary" :percent="storeSport.doneSportPercent" />
    <div class="d-flex flex-wrap justify-center my-1 mx-2">
      <template v-for="task in storeSport.task" :key="task.name">
        <v-btn color="sport" class="ma-2" min-width="200px" @click="storeSport.doneSportTask(task.name)"
          :disabled="task.done">
          <span v-if="!task.done"> {{ task.name }} {{ task.currentAmount }}/{{ task.repetitions }} </span>
          <v-icon v-else class="ml-2">mdi-check</v-icon>
        </v-btn>
      </template>
    </div>
  </div>
</template>
<script setup>
// Composition API
import { useSportStore } from '~~/stores/sportStore';
const storeSport = useSportStore()
</script>