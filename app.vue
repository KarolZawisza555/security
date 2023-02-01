<template>
  <div class="">
    <v-card class="mx-md-auto my-md-4" elevation="10" min-height="500" max-width="1260">
      <v-toolbar color="primary">
        <v-toolbar-title>Do your job</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="resetStores">
          RESET PINIA
        </v-btn>
        <template v-slot:extension>
          <v-tabs v-model="model" grow slider-color="primary" bg-color="#1565C0">
            <v-tab v-for="item in items" :key="item.order" :value="item.order">
              <v-icon v-if="item.icon" class="mr-2" x-large>
                {{ item.icon }}
              </v-icon>
              <p v-text="item.name" class="d-none d-sm-flex" />
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-window v-model="model">
        <v-window-item v-for="item in items" :key="item.order" :value="item.order">
          <v-card>
            <component :is="item.component" :title="item.name" :color="item.color" />
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
  </div>
</template>
<script>
import Diet from './components/Diet.vue'
import Sport from './components/Sport.vue'
import Stats from './components/Stats.vue'
import Habbits from './components/Habbits.vue'
import Work from './components/Work.vue'
import { getActivePinia } from 'pinia'


export default {
  name: "App",
  methods: {
    resetStores() {
      const pinia = getActivePinia()
      pinia._s.forEach((store) => store.$reset())
    }
  },
  computed: {
    items() {
      return [
        { component: Stats, order: 1, name: "Stats", icon: "mdi-chart-areaspline", color: "primary" },
        { component: Sport, order: 2, name: "Sport", icon: "mdi-run-fast", color: "sport" },
        { component: Diet, order: 3, name: "Diet", icon: "mdi-food-variant", color: "diet" },
        { component: Habbits, order: 4, name: "Habbits", icon: "mdi-home", color: "habbits" },
        { component: Work, order: 5, name: "Work", icon: "mdi-cash", color: "work" },
      ]
    }
  },
  data: () => {
    return {
      model: '1',
      totalPoint: 0,

    }
  },
}
</script>