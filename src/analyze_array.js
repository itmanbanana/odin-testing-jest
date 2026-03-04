const analyzeArray = (arr) => {
    const average = arr.reduce((sum, current) => sum + current, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average: average,
        min: min,
        max: max,
        length: arr.length
    };
};
export { analyzeArray };
//# sourceMappingURL=analyze_array.js.map