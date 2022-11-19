let animalTypes = ["dog", "cat", "mouse", "ant", "fish"]

type Animal = {id:number, name:string, age:number, type:string}

//Functions
let newName = ""
const animalName = () => {
    for(let i = 0; i < Math.round(Math.random()*(5-3)+3); i++){
        newName += String.fromCharCode(Math.round(Math.random()*("z".charCodeAt(0)-"a".charCodeAt(0))+"a".charCodeAt(0)))
    }
    return newName
}

let indexOfAnimal = 0
let newType = ""
const typeOfAnimal = () => {
    indexOfAnimal = Math.round(Math.random()*(animalTypes.length-1))
    newType = animalTypes[indexOfAnimal]

    return newType
}

let newAge = 0
const animalAge = (newType:string) => {
    if(newType == "dog"){
        newAge = Math.round(Math.random()*(16-8)+8)
    }
    else if(newType == "cat"){
        newAge = Math.round(Math.random()*(18-12)+12)
    }
    else if(newType == "mouse"){
        newAge = Math.round(Math.random()*(3-1)+1)
    }
    else if(newType == "ant"){
        newAge = Math.round(Math.random()*(2-1)+1)
    }
    else if(newType == "fish"){
        newAge = Math.round(Math.random()*(5-2)+2)
    }
    return newAge
}

//Step 1 - creating an array
let ArrayOfAnimals:Animal[] = []
const arrOfAnimals = (numberOfAnimals:number) => {
    if(Number.isNaN(numberOfAnimals) || numberOfAnimals <= 0){
        throw new Error("The number of animals can't be NaN or zero")
    }else{
        for(let i = 0; i < numberOfAnimals; i++){
            let animal = {
                id: i,
                name: animalName(),
                age: animalAge(newType),
                type: typeOfAnimal(),
            }
            newName = ""
            ArrayOfAnimals[i] = animal
        }
    }
    console.log(ArrayOfAnimals)
}

try{
    arrOfAnimals(NaN)
}catch(error){
    console.log(error.message)
}

//Step 2 - creating an array by type of animal
const arrOfType:Animal[] = []
let counter = 0

const getTypeOfAnimal = (ArrayOfAnimals:Animal[], type: string) => {
    if(ArrayOfAnimals == null || ArrayOfAnimals.length == 0){
        throw new Error("Array can't be null or empty")
    }else if(type == null || type == ""){
        throw new Error("The type can't be null or empty")
    }else{
        for(let i = 0; i < ArrayOfAnimals.length; i++){
            const animal = ArrayOfAnimals[i]
            if(animal.type == type){
                arrOfType[counter] = animal
                counter++
            }
        }
    }
    console.log(arrOfType)
    return arrOfType
}

// try{
//     getTypeOfAnimal(ArrayOfAnimals, "mouse")
// }catch(error){
//     console.log(error.message)
// }

//Step 3 - Update an animal's details
let animal:Animal = {id:3, name:animalName(), age:animalAge(newType), type:typeOfAnimal()}

const updateAnimal = (ArrayOfAnimals:Animal[], animal:Animal) => {
    if(ArrayOfAnimals == null || ArrayOfAnimals.length == 0){
        throw new Error("Array can't be null or empty")
    }else if(animal == null || animal.id < 0){
        throw new Error("Animal can't be null or id can't be below zero ")
    }else{
        for(let i = 0; i <ArrayOfAnimals.length; i++){
            if(ArrayOfAnimals[i].id == animal.id){
                ArrayOfAnimals[i].name = animal.name
                ArrayOfAnimals[i].age = animal.age
                ArrayOfAnimals[i].type = animal.type
    
                break
            }
        }
    }
    return ArrayOfAnimals
}

// try{
//     ArrayOfAnimals = updateAnimal(ArrayOfAnimals, animal)
//     console.log(ArrayOfAnimals)
// }catch(error){
//     console.log(error.message)
// }

//Step 4 - Delete an animal
const deleteAnimal = (ArrayOfAnimals:Animal[], id:number) => {
    if(ArrayOfAnimals == null || ArrayOfAnimals.length == 0){
        throw new Error("Array can't be null or empty")
    }else if(Number.isNaN(id)){
        throw new Error("The id can't be NaN")
    }else{
        let newArrOfAnimals:Animal[] = []
        let isAnimal = true
        let index = 0
        for(let i = 0; i < ArrayOfAnimals.length; i++){
            if(ArrayOfAnimals[i].id != id || !isAnimal){
                newArrOfAnimals[index++] = ArrayOfAnimals[i]
            }else{
                isAnimal = false
            }
        }
        return newArrOfAnimals
    }
}

// try{
//     let res = deleteAnimal(ArrayOfAnimals, 1)
//     console.log(res)
// }catch(error){
//     console.log(error.message)
// }

//Step 5 - Delete all animals of the same type
const deleteAllTheAnimalsWithTheSameType = (ArrayOfAnimals:Animal[], type:String) => {
    if(ArrayOfAnimals == null || ArrayOfAnimals.length == 0){
        throw new Error("Array can't be null or empty")
    }else if(type == null || type == ""){
        throw new Error("The type can't be null or empty")
    }else{
        let newArrOfAnimalsV2:Animal[] = []
        let index = 0
        for(let i = 0; i < ArrayOfAnimals.length; i++){
            if(ArrayOfAnimals[i].type !== type){
                newArrOfAnimalsV2[index++] = ArrayOfAnimals[i]
            }
        }
        return newArrOfAnimalsV2
    }
}

// try{
//     let res = deleteAllTheAnimalsWithTheSameType(ArrayOfAnimals, "ant")
//     console.log(res)
// }catch(error){
//     console.log(error.message)
// }