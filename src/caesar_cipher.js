const caesarCipher = (plaintext, n) => {
    n %= 26;
    const ciphertext = plaintext
        .split('')
        .map(char => {
        if (char.match(/[a-z]/g)) {
            return String.fromCharCode(97 + (((char.charCodeAt(0) - 97) + n) % 26));
        }
        if (char.match(/[A-Z]/g)) {
            return String.fromCharCode(65 + (((char.charCodeAt(0) - 65) + n) % 26));
        }
        return char;
    })
        .reduce((current, prev) => current + prev);
    return ciphertext;
};
export { caesarCipher };
//# sourceMappingURL=caesar_cipher.js.map