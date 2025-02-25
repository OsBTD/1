const sameAmount = (str, re_1, re_2) => {

    const gre_1 = new RegExp(re_1, 'g');
    const gre_2 = new RegExp(re_2, 'g');
    const matches_1 = [...str.matchAll(gre_1)].length
    const matches_2 = [...str.matchAll(gre_2)].length
    return matches_1 === matches_2
}

console.log(sameAmount('hello how are you', /l/, /e/))