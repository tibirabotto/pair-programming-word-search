const wordSearch = (letters, word) => { 

    if(letters.length === 0) {
        return false
    }

    const horizontalLetters = letters.map(ls => ls.join(''))
    const verticalLetters = letters[0].map((_, i) => letters.map((row) => row[i]).join(''));

    for (l of horizontalLetters) {
        if (l.includes(word)) return true
    }

    for (l of verticalLetters) {
        if (l.includes(word)) return true
    }

    return false
}

module.exports = wordSearch