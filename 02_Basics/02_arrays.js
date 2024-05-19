const marvel_heroes = ["Thor","Hulk","Wanda"]
const dc_heroes = ["Superman","Batman","flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3]);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

// const allNewHeroes = [...marvel_heroes,...dc_heroes] //Now it's no more an array it's an individual now
// console.log(allNewHeroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity) //It opens inside array as a part of one array and inside flat we have to give how much it is inside like 2 times in this case
// console.log(real_another_array);


console.log(Array.isArray("Ankit"))
console.log(Array.from("Ankit"))  //it converts anything into array
console.log(Array.from({name: "Ankit"})) // it returns an empty array

let score1 = 100;
let score2 = 300;
let score3 = 300;

console.log(Array.of(score1,score2,score3))