// 1. Merge using the spread operator (Immutable)

{
    const heroes = ['Batman', 'Superman'];
    const villains = ['Joker', 'Bane'];

    const all = [...heroes, ...villains];
    console.log(all); // ['Batman', 'Superman', 'Joker', 'Bane']
}


// 2. Merge using array.concat() method (Immutable)

{
    const heroes = ['Batman', 'Superman'];
    const villains = ['Joker', 'Bane'];

    const all1 = heroes.concat(villains);
    const all2 = [].concat(heroes, villains);

    console.log(all1); // ['Batman', 'Superman', 'Joker', 'Bane']
    console.log(all2); // ['Batman', 'Superman', 'Joker', 'Bane']
}


// 3. Merge using array.push() method (Mutable)

{
    const heroes = ['Batman', 'Superman'];
    const villains = ['Joker', 'Bane'];

    heroes.push(...villains);

    console.log(heroes); // ['Batman', 'Superman', 'Joker', 'Bane']
}


/**
 * 3 Ways to Merge Arrays in JavaScript
 * https://dmitripavlutin.com/javascript-merge-arrays/
 */
