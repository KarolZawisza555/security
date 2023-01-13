<template>
    <div>
        <title-box :title="props.title"></title-box>
        <circular-loading color="diet" :percent="dietStore.donePercent" />
        <multi-task color="diet" :piniaStore="dietStore" />
        <once-per-day :piniaStore="dietStore" color="diet" />
    </div>
</template>
<script setup >
// composition API
import { useDietStore } from '~~/stores/dietStore';
const dietStore = useDietStore()
const props = defineProps(['title']);
</script>