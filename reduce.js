const pets = [
    {
        name: 'rex',
        type : 'dog',
        age : 10,
        weight : 30
    },
    {
        name : 'miau',
        type : 'cat',
        age : 2,
        weight : 5
    },
    {
        name: 'titiu',
        type : 'dog',
        age : 8,
        weight : 15
    },
    {
        name : 'gulp',
        type : 'fish',
        age : 3,
        weight : 11
    }
]

/*const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0)//executado em 0.355 segundos

console.log(totalWeight)*/

const totalWeight = pets.reduce((total, pet) => {
    if (pet.type !== 'dog') return total
    return total + pet.weight
}, 0)//executado em 0.355 segundos

console.log(totalWeight)

