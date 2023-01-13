import { defineStore } from "pinia";
import {
  taskDone,
  allDoneTasks,
  percentValue,
  multitaskPoints,
  allMultiPoints,
} from "../helpers/piniaHelpers";

export const useHabbitsStore = defineStore("Habbits", {
  persist: {
    storage: persistedState.localStorage,
  },
  state: () => ({
    oncePerDayList: ["No Tea", "No cofee", "No sugar", "Walking"],
    oncePerDayDoneList: [],
    pointsOncePerDay: 25,
    dayLimitPoints: 500,

    task: [
      {
        name: "Relax",
        currentAmount: 0,
        repetitions: 3,
        done: false,
        points: 20,
      },
    ],
  }),
  getters: {
    getTask(state) {
      return state.task.filter((x) => !x.done);
    },
    amountOfTaskDone(state) {
      return taskDone(state);
    },
    amountOfAllDoneTasks(state) {
      return allDoneTasks(state);
    },
    donePercent() {
      return percentValue(this.amountOfAllDoneTasks, this.amountOfTaskDone);
    },
    ammountsOfPointsOncePerDay(state) {
      return state.oncePerDayDoneList.length * this.pointsOncePerDay;
    },
    maxPoints(state) {
      return (
        (state.oncePerDayDoneList.length + state.oncePerDayList.length) *
          this.pointsOncePerDay +
        state.task
          .map((item) => item.repetitions * item.points)
          .reduce((partialSum, a) => partialSum + a, 0)
      );
    },
    ammountsOfPointsMultiTasks(state) {
      return allMultiPoints(state);
    },
    sumOfPoints() {
      return this.ammountsOfPointsOncePerDay + this.ammountsOfPointsMultiTasks;
    },
  },
  actions: {
    doneTask(nameTask) {
      this.task = this.task.map((x) => {
        const lastRepetitions = x.currentAmount + 1 === x.repetitions;
        if (x.name !== nameTask) return x;
        if (lastRepetitions)
          return { ...x, currentAmount: x.repetitions, done: true };
        else return { ...x, currentAmount: x.currentAmount + 1 };
      });
    },
    doneOncePerDayTask(nameTask) {
      this.oncePerDayList = this.oncePerDayList.filter(
        (item) => item !== nameTask
      );
      this.oncePerDayDoneList.push(nameTask);
    },
  },
});
