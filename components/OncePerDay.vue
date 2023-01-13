<template>
    <v-row>
        <v-col>
            <v-card title="TO DO" class="my-4 mx-sm-2 mx-md-5" min-height="110" elevation-24>
                <template v-for="item in piniaStore.oncePerDayList" :key="item.index">
                    <v-btn :color="color" class="ma-2" @click="piniaStore.doneOncePerDayTask(item)">
                        {{ item }}
                    </v-btn>
                </template>
            </v-card>
        </v-col>
        <v-col>
            <v-card title="DONE" class="my-4 mx-sm-2 mx-md-5" min-height="110" elevation-24>
                <template v-for="itemDone in piniaStore.oncePerDayDoneList" :key="itemDone.index">
                    <v-chip class="ma-2" color="success" size="large">
                        {{ itemDone }}
                    </v-chip>
                </template>
            </v-card>
        </v-col>
    </v-row>
</template>
<script setup >
// composition API
const props = defineProps({
    piniaStore: {
        type: Object,
        requied: true
    },
    color: {
        type: String,
        default: "primary"
    },
});
</script>