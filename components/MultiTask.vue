<template>
    <div>
        <div class="d-flex flex-wrap justify-center my-1 mx-2">
            <template v-for="task in piniaStore.task" :key="task.name">
                <v-btn :color="color" class="ma-2" min-width="200px" @click="piniaStore.doneTask(task.name)"
                    :disabled="task.done">
                    <span v-if="!task.done"> {{ task.name }} {{ task.currentAmount }}/{{ task.repetitions }} </span>
                    <v-icon v-else class="ml-2">mdi-check</v-icon>
                </v-btn>
            </template>
        </div>
    </div>
</template>
<script setup >
// composition API
const props = defineProps({
    color: {
        type: String,
        default: "primary"
    },
    piniaStore: {
        type: Object,
        requied: true
    }
});
</script>