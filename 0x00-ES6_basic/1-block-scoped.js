export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // eslint disablenextline nounusedvars, no shadow
    const task = true;
    // eslintDisable-next line No unused vars
    const task2 = false;
  }

  return [task, task2];
}
