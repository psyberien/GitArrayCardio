console.log("Hisashiburi dana");

// 1st Task
// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like 
// “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
function camelize(str){
    return str
        .split("-")
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
}
// 2nd Tak
// Filter range
// Write a function filterRange(arr, a, b) that gets an array arr, looks 
// for elements with values higher or equal to a and lower or equal to b 
// and return a result as an array.
// The function should not modify the array. It should return the new array.
// For instance:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);
function filterRange(arr, a, b){
    return arr.filter(num => num >= a && num <= b);
}

// 2.2nd Task
// Filter range "in place"
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr
// and removes from it all values except those that are between a and b. 
// The test is: a ≤ arr[i] ≤ b.
// The function should only modify the array. It should not return anything.

// For instance:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]
filterRangeInPlace(arr, 1, 4);
console.log(arr);
function filterRangeInPlace(arr, a, b){
    for(let i=0; i<arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

// 3rd Task
// Map to objects
// You have an array of user objects, each one has name, surname and id.
// Write the code to create another array from it, of objects with id and 
// fullName, where fullName is generated from name and surname.

// For instance:
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersMapped = /* ... your code ... */
// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 29 };
let users = [ john, pete, mary ];
let usersMapped = users.map(obj => ({fullName: `${obj.name} ${obj.surname}`, age: `${obj.age}`}));
console.log(usersMapped);
// 4th Task
// Sort users by age
// Write the function sortByAge(users) that gets an array of objects with 
// the age property and sorts them by age.

// For instance:
// sortByAge(arr);
// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete
console.log(sortByAge(users));
function sortByAge(arr){
    return arr.sort((a, b) => a.age - b.age);
}

// 5th Task
// Get average age
// Write the function getAverageAge(users) that gets an array of objects 
// with property age and returns the average age.
// The formula for the average is (age1 + age2 + ... + ageN) / N.
// For instance:
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
console.log(getAverageAge(users));
function getAverageAge(arr){
    return arr.reduce((num, current) => num + current.age, 0)/arr.length;
}
// 6th Task
// Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique 
// items of arr.

// For instance:
// alert( unique(strings) ); // Hare, Krishna, :-O
let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(strings));
function unique(arr){
    const newArr = [];
    for(let str of arr){
        if(!newArr.includes(str))
            newArr.push(str);
    }
    return newArr;
}

// 7th Task
// Create keyed object from array
// Let’s say we received an array of users in the form 
// {id:..., name:..., age:... }.
// Create a function groupById(arr) that creates an object from it, with 
// name as the key, and array items as values.

// For example:
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];
// let usersById = groupById(users);
// /*
// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }
// */
let usersById = groupById(users);
console.log(usersById);
function groupById(arr){
    return arr.reduce((obj, current) => {
        obj[current.name] = current;
        return obj;
    }, {});
}

// 8th Task
 const inventor = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
// Sort the people alphabetically by last name
const inventorByName = inventor.sort((a, b) => a.localeCompare(b));
console.log(inventorByName);

// 9th Task
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportation = data.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log(transportation);

// 10th Task
   const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const somePeople = people.some(item => 2025 - item.year >= 19);
console.log(somePeople);

// Array.prototype.every() // is everyone 19 or older?
const everyPerson = people.every(item => 2025 - item.year >= 19);
console.log(everyPerson);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find(item => item.id === 823423);
console.table(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteComment = comments.splice(comments.findIndex(item => item.id === 823423), 1);
console.table(deleteComment);
console.table(comments);   

//Bonus Task
// create a list of Boulevards in Paris that contain 'de' anywhere in the 
// name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//    const catergory = document.querySelector('.mw-category');
//    const links = Array.from(catergory.querySelectorAll('a'));
//    const de = links
//                  .map(links => links.textContent)
//                  .filter(streetName => streetName.includes('de'))
//    console.log(de);