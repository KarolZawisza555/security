import { defineStore } from "pinia";
import {
  taskDone,
  allDoneTasks,
  percentValue,
  multitaskPoints,
} from "../helpers/piniaHelpers";

export const useDietStore = defineStore("diet", {
  persist: {
    storage: persistedState.localStorage,
  },
  state: () => ({
    oncePerDayList: [
      "C",
      "B12",
      "D",
      "Apple",
      "Omega 3",
    ],
    oncePerDayDoneList: [],
    pointsOncePerDay: 25,

    task: [
      {
        name: "Water",
        currentAmount: 0,
        repetitions: 12,
        done: false,
        points: 20,
      },
      {
        name: "Wegetables",
        currentAmount: 0,
        repetitions: 3,
        done: false,
        points: 50,
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
    ammountsOfPointsMultiTasks(state) {
      return multitaskPoints(state);
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
