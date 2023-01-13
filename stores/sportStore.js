import { defineStore } from "pinia";

export const useSportStore = defineStore("sport", {
  persist: {
    storage: persistedState.localStorage,
  },
  state: () => ({
    dayLimitPoints: 500,
    task: [
      {
        name: "Plank",
        currentAmount: 0,
        repetitions: 10,
        done: false,
        points: 200,
      },
    ],
  }),
  getters: {
    getSportTask(state) {
      return state.task.filter((x) => !x.done);
    },
    amountOfAllSportTasks(state) {
      return state.task
        .map((task) => task.repetitions)
        .reduce((partialSum, a) => partialSum + a, 0);
    },
    amountOfAllSportDoneTasks(state) {
      return state.task
        .map((task) => task.currentAmount)
        .reduce((partialSum, a) => partialSum + a, 0);
    },
    doneSportPercent() {
      return Math.round(
        100 * (this.amountOfAllSportDoneTasks / this.amountOfAllSportTasks)
      );
    },
    maxPoints(state) {
      return state.task
        .map((item) => item.repetitions * item.points)
        .reduce((partialSum, a) => partialSum + a, 0);
    },
    sumOfPoints(state) {
      return state.task
        .map((item) => item.currentAmount * item.points)
        .reduce((partialSum, a) => partialSum + a, 0);
    },
  },
  actions: {
    doneSportTask(nameTask) {
      this.task = this.task.map((x) => {
        const lastRepetitions = x.currentAmount + 1 === x.repetitions;
        const currentTask = x.name !== nameTask;
        if (currentTask) return x;
        return lastRepetitions
          ? { ...x, currentAmount: x.repetitions, done: true }
          : { ...x, currentAmount: x.currentAmount + 1 };
      });
    },
  },
});
