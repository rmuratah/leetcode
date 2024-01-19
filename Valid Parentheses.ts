function isValid(s: string): boolean {
    let stack: string[] = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        }
        if (s[i] === ')')
            if (stack[stack.length - 1] === ('('))
                stack.pop()
            else
                return false
        if (s[i] === ']')
            if (stack[stack.length - 1] === ('['))
                stack.pop()
            else
                return false
        if (s[i] === '}')
            if (stack[stack.length - 1] === ('{'))
                stack.pop()
            else
                return false
    }

    if (stack.length === 0)
        return true
    else {
        return false
    }
};