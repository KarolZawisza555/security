<template>
    <div>
        <title-box :title="props.title"></title-box>
        <circular-loading color="habbits" :percent="habbitsData.donePercent" />
        <multi-task color="habbits" :piniaStore="habbitsData" />
        <once-per-day :piniaStore="habbitsData" color="habbits" />
    </div>
</template>
<script setup >
// composition API
import { useHabbitsStore } from '~~/stores/habbitsStore';
const habbitsData = useHabbitsStore()
const props = defineProps(['title']);
</script>