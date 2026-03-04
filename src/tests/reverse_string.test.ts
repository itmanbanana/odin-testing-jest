import { reverseString } from "../reverse_string.js";

test("reverse string of length 1", () => {
  expect(reverseString("a")).toMatch("a");
});

test("reverse string of arbitrary length 1", () => {
  expect(reverseString("abcde")).toMatch("edcba");
});

test("reverse string of arbitrary length 2", () => {
  expect(reverseString("aksdjoja iofgsdiovcsmoi dfvhjwioqe jieaojdm")).toMatch("mdjoaeij eqoiwjhvfd iomscvoidsgfoi ajojdska");
});