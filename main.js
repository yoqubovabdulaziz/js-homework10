// 1.

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// const getNames = (baho) => {
//   students.map((student) => {
//     student.percent >= 85
//       ? (student.grade = 5)
//       : student.percent >= 70
//       ? (student.grade = 4)
//       : (student.grade = 3);
//   });
//   return students.filter((student) => student.grade == baho);
// };

// console.log(getNames(5));

// const getNamesWithGrade = (baho) => {
//   students.map((student) => {
//     student.percent >= 85
//       ? (student.grade = 5)
//       : student.percent >= 70
//       ? (student.grade = 4)
//       : (student.grade = 3);
//   });
//   return students
//     .filter((student) => student.grade == baho)
//     .map((stu) => stu.name);
// };

// console.log(getNamesWithGrade(5));

// 2.

// const animals = [
//   "dog",
//   "chicken",
//   "cat",
//   "dog",
//   "chicken",
//   "chicken",
//   "rabbit",
// ];

// console.log(
//   animals.reduce((acc, el) => {
//     if (acc[el] == undefined) {
//       acc[el] = 1;
//     } else {
//       acc[el]++;
//     }
//     return acc;
//   }, {})
// );

// 3.

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.map((el) => el**2));

// 4.

// const arr = [1, -4, 12, 0, -3, 29, -150];
// let res = arr
//   .filter((el) => el > 0)
//   .reduce((acc, item) => {
//     return acc += item;
//   }, 0);
// console.log(res);

// 5.

// const str = "George Raymond Richard Martin";
// let res = str.split(" ").map((el) => el[0]).join("")
// console.log(res);

// 6.

// const arr = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// let res = arr.sort((a, b) => a.age-b.age)[arr.length-1].age - arr.sort((a, b) => a.age-b.age)[0].age
// console.log(res);

// 8.

// let N = 10;
// let arr = [];

// for (let i = 0; i < N; i++) {
//   arr.push(Math.round(Math.random() * 10));
// }

// console.log(arr);

// let res = arr.reduce((acc, el) => {
//   if (!acc.includes(el)) {
//     acc.push(el)
//   }
//   return acc
// }, [])

// 9.

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sortId;
// let sortName;
// let sortPrice;
// let sortRating;
// let sortDiscount;

// sortId = products.sort((a, b) => a.id - b.id);
// // sortName = products.sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
// // sortPrice = products.sort((a, b) => a.price - b.price);
// // sortRating = products.sort((a, b) => a.rating - b.rating);
// // sortDiscount = products.sort((a, b) => a.discount - b.discount);

// console.log(sortId);
// // console.log(sortName);
// // console.log(sortPrice);
// // console.log(sortRating);
// // console.log(sortDiscount);

// 10.

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sortRating;

// sortRating = products.sort((a, b) => b.rating - a.rating);

// console.log(sortRating[0]);

// 11.

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let sortRating;

// sortPrice = products.sort((a, b) => a.price - b.price);

// console.log(sortPrice[0]);

// 12.

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let amount = products.reduce((acc, el) => {return acc += el.price},0);

// console.log(amount);

// 13.

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let res = products.map((el) => el.name);

// console.log(res);

// 14.

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let res = products.find((el) => el.id == 5).name;

// console.log(res);

// 15.

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// let res = products.filter((el) => el.id !== 4);

// console.log(res);

// 16.

// let str = "MenAbdulazizProgrammerman";

// let res = str.split("").every((el) => {
//   return el != +el;
// });

// console.log(res);

// 17.

// let arr = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

// const getTruthyFalsy = (arr) => {
//   let res = { truthy: [], falsy: [] };
//   res.truthy = arr.filter((el) => el);
//   res.falsy = arr.filter((el) => !el);
//   return res;
// };

// console.log(getTruthyFalsy(arr));

// 18.

// let str = "Men Abdulaziz Programmerman";

// let res = str.split(" ").map(el => el.length)

// console.log(res);

// 19.

// let str = "Men Abdulaziz Programmerman";

// let res = str.split("").some((el) => el == " ");

// console.log(res);

// 20.

// let obj = {a: 2, b: 5, c: 7};

// let res = Object.entries(obj).map((el) => el.join(""));

// console.log(res);

// 21.

// const digitSum = (...nums) => {
//   let res = 0;
//   nums.forEach((el) => {
//     res += el;
//   });
//   return res;
// };

// console.log(digitSum(5, 2));

// 22.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let res = pupils.reduce((acc, el, index, arr) => {
//   acc = acc + el.protcent/arr.length;
//   return acc;
// }, 0);

// console.log(res);

// 23.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// pupils.map((pupil) => {
//   pupil.protcent >= 90
//     ? (pupil.grade = 5)
//     : pupil.protcent >= 80
//     ? (pupil.grade = 4)
//     : pupil.protcent >= 70
//     ? (pupil.grade = 3)
//     : (pupil.grade = 2);
// });

// console.log(pupils);

// 24.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// pupils.map((pupil) => {
//   pupil.protcent >= 70 ? (pupil.isPassed = true) : (pupil.isPassed = false);
// });

// console.log(pupils);

// 25.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// let res = pupils.reduce(
//   (acc, el) => {
//     if (el.protcent >= 70) {
//       acc.passed++;
//     } else {
//       acc.notPassed++;
//     }
//     return acc
//   },
//   { passed: 0, notPassed: 0 }
// );

// console.log(res);
