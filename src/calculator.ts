const calculator = (() => {
  const add = (a: number, b: number): number => a + b;
  const subtract = (a: number, b: number): number => a - b;
  const multiply = (a: number, b: number): number => a * b;
  const divide = (num: number, den: number): number | string => {
    if (den === 0) return "Division by 0";
    return num / den;
  }

  return {
    add, subtract, multiply, divide
  }
})();

export { calculator }