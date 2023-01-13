// GETTERS
const taskDone = (state) => {
  return state.task
    .map((task) => task.repetitions)
    .reduce((partialSum, a) => partialSum + a, 0);
};
const allDoneTasks = (state) => {
  return state.task
    .map((task) => task.currentAmount)
    .reduce((partialSum, a) => partialSum + a, 0);
};
const multitaskPoints = (state) => {
  return state.task
    .map((item) => item.currentAmount * item.points)
    .reduce((partialSum, a) => partialSum + a, 0);
};
const percentValue = (a, b) => {
  return Math.round(100 * (a / b));
};
const allMultiPoints = (state) => {
  return state.task
    .map((item) => item.currentAmount * item.points)
    .reduce((partialSum, a) => partialSum + a, 0);
};
export {
  taskDone,
  allDoneTasks,
  multitaskPoints,
  percentValue,
  allMultiPoints,
};
