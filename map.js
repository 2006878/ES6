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
        name : 'gulp',
        type : 'fish',
        age : 3,
        weight : 11
    }
]
/*
PetNames = pets.map((pet) =>{
    return pet.name
})//executado em 0.571 segundos

const PetAges = pets.map((pet) =>{
    return pet.age
})

console.log(PetNames)
console.log(PetAges)
console.log(pets)*/

const forEachPetNames = []
pets.forEach((pet)=>{
    forEachPetNames.push(pet.name)
})
console.log(forEachPetNames)//Executado em 1,285 segundos