const myObj = {
    js : 'JavaScript',
    cpp : 'C plus plus',
    py : 'Python'
}

for (const key in myObj) {
    // console.log(`${key} is a shortcut for : ${myObj[key]}`);
}

const programmingLang = ["js","java","cpp","ruby"]
for (const key in programmingLang) {
    // console.log(programmingLang[key]);
}

const map = new Map()  
map.set('In',"India")
map.set('USA',"United State of America")
map.set('En',"England")

for (const [key] in map) { // Map is not iterable
    console.log(key);
}

