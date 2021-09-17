export function gameRule(step) {
  const variantsOfSteps = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < variantsOfSteps.length; i++) {
    const [a, b, c] = variantsOfSteps[i];
    if (step[a] && step[a] === step[b] && step[a] === step[c]) {
      return variantsOfSteps[i];
    }
  }
  return null;
}
