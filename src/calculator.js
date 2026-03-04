const calculator = (() => {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (num, den) => {
        if (den === 0)
            return "Division by 0";
        return num / den;
    };
    return {
        add, subtract, multiply, divide
    };
})();
export { calculator };
//# sourceMappingURL=calculator.js.map