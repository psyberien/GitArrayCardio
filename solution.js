// 1.
// function camelize(str){
//     return str
//             .split("-")
//             .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
//             .join("");
// }
// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))



// 2.
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// function filterRange(arr, a, b){
//     return arr.filter(value => value >= a && value <= b);
// }
// console.log(filtered);
// console.log(arr);

//2.2
// let arr2 = [5, 3, 8, 1];
// filterRangeInPlace(arr2, 1, 4);
// function filterRangeInPlace(arr2, a, b){
//     for(let i=0; i<arr2.length; i++){
//         if(arr2[i] < a || arr2[i] > b){
//             arr2.splice(i, 1);
//         }
//     }
// };
// console.log(arr2);


// 3.
// let john = { name: "John", surname: "Smith", id: 1, age: 25 };
// let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
// let mary = { name: "Mary", surname: "Key", id: 3, age: 29 };
// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: `${user.id}`}))
// usersMapped = [
//     { fullName: "John Smith", id: 1 },
//     { fullName: "Pete Hunt", id: 2 },
//     { fullName: "Mary Key", id: 3 }
// ]

// console.log(usersMapped)



// 4.
// function sortByAge(users){
//     return users.sort((a, b) => a.age - b.age);
// }
// console.log(sortByAge(users))


// 5.
// function getAverageAge(users){
//     return users.reduce((num, current) => num + current.age, 0)/users.length;
// }
// console.log(getAverageAge(users));



// 6.
// function unique(arr) {
//     const newArr = [];
//     for(let str of arr){
//         if(!newArr.includes(str))
//             newArr.push(str);
//     }
//     return newArr;
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(strings));



// 7.
// let usersById = groupById(users);
// function groupById(arr){
//     return arr.reduce((obj, current) =>{
//         obj[current.name] = current;
//         return obj;
//     }, {});
// }
// console.log(usersById);


// 8.
// const inventorByName = inventor.sort((a, b) => a.localeCompare(b));
// console.log(inventorByName);



// 9.
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// const transportation = data.reduce(function(obj, item){
//   if(!obj[item]){
//     obj[item] = 0;
//   }
//    obj[item]++;
//    return obj;
// }, {}); 

// console.log(transportation);



// 10.
// const somePeople = people.some(person => (2025 - person.year >= 19));
// console.log(somePeople);

// const everyPeople = people.every(person => (2025 - person.year >= 19));
// console.log(everyPeople);

// const findComment = comments.find(opinion => opinion.id === 823423);
// console.log(findComment);

// const removeComment = comments.splice(comments.findIndex(opinion => opinion.id === 823423), 1);
// console.log(removeComment);


//Bonus
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//    const catergory = document.querySelector('.mw-category');
//    const links = Array.from(catergory.querySelectorAll('a'));
//    const de = links
//                  .map(links => links.textContent)
//                  .filter(streetName => streetName.includes('de'))
//    console.log(de);