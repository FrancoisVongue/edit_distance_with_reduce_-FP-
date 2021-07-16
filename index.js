function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let table = [...Array(s1.length + 1).keys()]
        .map((rv, ri) => [...Array(s2.length + 1)]
            .map((v, i) => i + ri));

    for(let row = 1; row < table.length; row++) {
        for(let col = 1; col < table[0].length; col++) {
            const top = table[row - 1][col];
            const topleft = table[row - 1][col - 1];
            const left = table[row][col - 1];
            const s1Char = s1[row - 1];
            const s2Char = s2[col - 1];
            if(s1Char === s2Char) {
                table[row][col] = topleft;
            } else {
                table[row][col] = Math.min(top, topleft, left) + 1;
            }
        }
    }

    return table[s1.length][s2.length];
};

function relativeEditDistance(search, word) {
    let distance = editDistance(word, search);

    let distanceReduction = word.length - distance; // how much moved towards a word
    let searchApplication = 100 * distanceReduction / search.length; // how much you moved, relative to the word length
    return searchApplication;
}
