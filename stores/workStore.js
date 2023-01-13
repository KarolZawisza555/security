import { defineStore } from "pinia";
import {
  taskDone,
  allDoneTasks,
  percentValue,
  allMultiPoints,
} from "../helpers/piniaHelpers";

export const useWorkStore = defineStore("work", {
  persist: {
    storage: persistedState.localStorage,
  },
  state: () => ({
    oncePerDayList: ["Daily call", "Test"],
    oncePerDayDoneList: [],
    pointsOncePerDay: 25,
    dayLimitPoints: 500,
    task: [
      {
        name: "Vue",
        currentAmount: 0,
        repetitions: 20,
        done: false,
        points: 40,
      },
      {
        name: "JS",
        currentAmount: 0,
        repetitions: 20,
        done: false,
        points: 40,
      },
      {
        name: "Git",
        currentAmount: 0,
        repetitions: 20,
        done: false,
        points: 40,
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
