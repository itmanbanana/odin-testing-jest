type ArrayStats = {
  average: number;
  min: number;
  max: number;
  length: number;
}

const analyzeArray = (arr: number[]): ArrayStats => {
  const average = arr.reduce((sum, current) => sum + current, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    average: average,
    min: min,
    max: max,
    length: arr.length
  }
};

export { analyzeArray }