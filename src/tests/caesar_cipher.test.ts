import { caesarCipher } from "../caesar_cipher.js";

test('cipher no wrap', () => {
  expect(caesarCipher("abc", 3)).toMatch("def");
});

test('cipher wrap', () => {
  expect(caesarCipher("xyz", 4)).toMatch("bcd");
});

test('cipher wrap capital', () => {
  expect(caesarCipher("XYZA", 8)).toMatch("FGHI");
});

test('preserve capitalization', () => {
  expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

describe('preserve punctuation', () => {
  test('preserve punctuation 1', () => {
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
  });
  test('preserve punctuation 2', () => {
    expect(caesarCipher("What is that??", 6)).toMatch("Cngz oy zngz??");
  });
  test('preserve punctuation 3', () => {
    expect(caesarCipher("She said: \"Hello :)\"", 6)).toMatch("Ynk ygoj: \"Nkrru :)\"");
  });
});
  