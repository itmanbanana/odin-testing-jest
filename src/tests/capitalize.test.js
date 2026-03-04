import { capitalize } from "../capitalize.js";
test('capitalize first letter of lowercase string', () => {
    expect(capitalize("abcd")).toMatch("Abcd");
});
test('keeps first letter capitalized', () => {
    expect(capitalize("ABCD")).toMatch("ABCD");
});
//# sourceMappingURL=capitalize.test.js.map