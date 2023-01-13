<template>
    <div>
        <title-box :title="props.title"></title-box>
        <circular-loading color="work" :percent="workData.donePercent" />
        <multi-task color="work" :piniaStore="workData" />
        <once-per-day :piniaStore="workData" color="work" />
    </div>
</template>
<script setup >
// composition API
import { useWorkStore } from '~~/stores/workStore';
const workData = useWorkStore()
const props = defineProps(['title']);
</script>