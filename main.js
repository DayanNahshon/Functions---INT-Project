var animalTypes = ["dog", "cat", "mouse", "ant", "fish"];
//Functions
var newName = "";
var animalName = function () {
    for (var i = 0; i < Math.round(Math.random() * (5 - 3) + 3); i++) {
        newName += String.fromCharCode(Math.round(Math.random() * ("z".charCodeAt(0) - "a".charCodeAt(0)) + "a".charCodeAt(0)));
    }
    return newName;
};
var indexOfAnimal = 0;
var newType = "";
var typeOfAnimal = function () {
    indexOfAnimal = Math.round(Math.random() * (animalTypes.length - 1));
    newType = animalTypes[indexOfAnimal];
    return newType;
};
var newAge = 0;
var animalAge = function (newType) {
    if (newType == "dog") {
        newAge = Math.round(Math.random() * (16 - 8) + 8);
    }
    else if (newType == "cat") {
        newAge = Math.round(Math.random() * (18 - 12) + 12);
    }
    else if (newType == "mouse") {
        newAge = Math.round(Math.random() * (3 - 1) + 1);
    }
    else if (newType == "ant") {
        newAge = Math.round(Math.random() * (2 - 1) + 1);
    }
    else if (newType == "fish") {
        newAge = Math.round(Math.random() * (5 - 2) + 2);
    }
    return newAge;
};
//Step 1 - creating an array
var ArrayOfAnimals = [];
var arrOfAnimals = function (numberOfAnimals) {
    if (Number.isNaN(numberOfAnimals) || numberOfAnimals <= 0) {
        throw new Error("The number of animals can't be NaN or zero");
    }
    else {
        for (var i = 0; i < numberOfAnimals; i++) {
            var animal_1 = {
                id: i,
                name: animalName(),
                age: animalAge(newType),
                type: typeOfAnimal()
            };
            newName = "";
            ArrayOfAnimals[i] = animal_1;
        }
    }
    console.log(ArrayOfAnimals);
};
try {
    arrOfAnimals(NaN);
}
catch (error) {
    console.log(error.message);
}
//Step 2 - creating an array by type of animal
var arrOfType = [];
var counter = 0;
var getTypeOfAnimal = function (ArrayOfAnimals, type) {
    if (ArrayOfAnimals == null || ArrayOfAnimals.length == 0) {
        throw new Error("Array can't be null or empty");
    }
    else if (type == null || type == "") {
        throw new Error("The type can't be null or empty");
    }
    else {
        for (var i = 0; i < ArrayOfAnimals.length; i++) {
            var animal_2 = ArrayOfAnimals[i];
            if (animal_2.type == type) {
                arrOfType[counter] = animal_2;
                counter++;
            }
        }
    }
    console.log(arrOfType);
    return arrOfType;
};
// try{
//     getTypeOfAnimal(ArrayOfAnimals, "mouse")
// }catch(error){
//     console.log(error.message)
// }
//Step 3 - Update an animal's details
var animal = { id: 3, name: animalName(), age: animalAge(newType), type: typeOfAnimal() };
var updateAnimal = function (ArrayOfAnimals, animal) {
    if (ArrayOfAnimals == null || ArrayOfAnimals.length == 0) {
        throw new Error("Array can't be null or empty");
    }
    else if (animal == null || animal.id < 0) {
        throw new Error("Animal can't be null or id can't be below zero ");
    }
    else {
        for (var i = 0; i < ArrayOfAnimals.length; i++) {
            if (ArrayOfAnimals[i].id == animal.id) {
                ArrayOfAnimals[i].name = animal.name;
                ArrayOfAnimals[i].age = animal.age;
                ArrayOfAnimals[i].type = animal.type;
                break;
            }
        }
    }
    return ArrayOfAnimals;
};
// try{
//     ArrayOfAnimals = updateAnimal(ArrayOfAnimals, animal)
//     console.log(ArrayOfAnimals)
// }catch(error){
//     console.log(error.message)
// }
//Step 4 - Delete an animal
var deleteAnimal = function (ArrayOfAnimals, id) {
    if (ArrayOfAnimals == null || ArrayOfAnimals.length == 0) {
        throw new Error("Array can't be null or empty");
    }
    else if (Number.isNaN(id)) {
        throw new Error("The id can't be NaN");
    }
    else {
        var newArrOfAnimals = [];
        var isAnimal = true;
        var index = 0;
        for (var i = 0; i < ArrayOfAnimals.length; i++) {
            if (ArrayOfAnimals[i].id != id || !isAnimal) {
                newArrOfAnimals[index++] = ArrayOfAnimals[i];
            }
            else {
                isAnimal = false;
            }
        }
        return newArrOfAnimals;
    }
};
// try{
//     let res = deleteAnimal(ArrayOfAnimals, 1)
//     console.log(res)
// }catch(error){
//     console.log(error.message)
// }
//Step 5 - Delete all animals of the same type
var deleteAllTheAnimalsWithTheSameType = function (ArrayOfAnimals, type) {
    if (ArrayOfAnimals == null || ArrayOfAnimals.length == 0) {
        throw new Error("Array can't be null or empty");
    }
    else if (type == null || type == "") {
        throw new Error("The type can't be null or empty");
    }
    else {
        var newArrOfAnimalsV2 = [];
        var index = 0;
        for (var i = 0; i < ArrayOfAnimals.length; i++) {
            if (ArrayOfAnimals[i].type !== type) {
                newArrOfAnimalsV2[index++] = ArrayOfAnimals[i];
            }
        }
        return newArrOfAnimalsV2;
    }
};
// try{
//     let res = deleteAllTheAnimalsWithTheSameType(ArrayOfAnimals, "ant")
//     console.log(res)
// }catch(error){
//     console.log(error.message)
// }
