function canCompleteCircuit(gas: number[], cost: number[]): number {
  let total = 0;
  let curr = 0;
  let tank = 0;

  for (let i = 0; i < gas.length; i++) {
    tank += gas[i] - cost[i];
    total += gas[i] - cost[i];

    if (tank < 0) {
      tank = 0;
      curr = i + 1;
    }
  }

  if (total < 0) return -1;

  return curr;
}
