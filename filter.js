const pets = [
    {
        name: 'rex',
        type : 'dog',
        age : 10
    },
    {
        name : 'miau',
        type : 'cat',
        age : 2
    },
    {
        name : 'gulp',
        type : 'fish',
        age : 3
    }
]

const eMenorQueCinco = (numero) =>{
    return numero <5
}

//const newPets = pets.filter((pet) =>
    //eMenorQueCinco(pet.age))//executado em 6,219 segundos

const newPets = pets.filter(({age}) =>
    eMenorQueCinco(age))//executado em 0,874 segundos


//const newPets = pets.filter((pet) =>{
  //  return pet.age < 5
//})//executado em 0.999 segundos

console.log(pets)
console.log(newPets)