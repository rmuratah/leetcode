function canConstruct(ransomNote: string, magazine: string): boolean {

    let r = ransomNote.split('')
    let m = magazine.split('')

    for (let i = 0; i < m.length; i++) {
        if (r.includes(m[i])) {
            r.splice(r.indexOf(m[i]), 1)
        }
    }

    if (r.length !== 0)
        return false
    else
        return true

};