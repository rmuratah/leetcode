function isPalindrome(s: string): boolean {
    function onlyAlphanumeric(s: string) {
        return s.replace(/[^\p{L}\p{N}]+/gu, "").toLowerCase().split('')
    }
    return onlyAlphanumeric(s).reverse().every((char, index) => char == onlyAlphanumeric(s)[index])
};