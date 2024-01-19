function isAnagram(s: string, t: string): boolean {

    const s1 = s.split('')

    t.split('').forEach(word => {
        if (s.length != t.length)
            return false
        if (s1.includes(word))
            s1.splice(s1.indexOf(word), 1)
    })

    if (s1.length === 0)
        return true
    else
        return false
};