const name="Abdul Ahad";
const age= 19;
const uni="NED University";

const info = `This is ${name} age ${age} currently studying in ${uni}`;

const obj = {
	name: "Ahad",
	age: 19,
	degree: "Engineering",
	batch: 2017
}

const name = obj.name;
const age = obj.age;

const {degree, batch} = obj;

const a = 'hello';
const b = true;
const c = 19;

const obj2 = {
	a:a,
	b:b,
	c:c
}

const first = ()=> {
	const greet = 'Hello';
	const second = ()=> {
		alert(greet);
	}
	return second;
}


// Currying

const multiply = (a,b) => {return a*b };
const curriedMultiply = (a) => (b) => { return a*b;}

var a = [1,2,3,4,5];

const multiplyBy2 = (item) => { return console.log(item*2)} ;

a.forEach(multiplyBy2);

a.forEach(function(item) {
	console.log(item*2);
})

var details= ['Ahad','Zubair','Yasir','Shoaib'];

details.forEach(function(item) {
	console.log(item + 'exists!')
})
var details= ['Ahad','Zubair','Yasir','Shoaib'];
for(i=0;i>details.lenght;i++) {
	console.log(details[i]);
}

const array = [1,2,3,4,5];

const doubleArray = array.forEach((item) => {
	console.log(item * 2);
})

//Referencing function 
const fun = (a,b) => a*b; 

// map 
const doubleArrayMap = array.map((item) => {
	return item *2 
})

// Cleaner map 

const doubleArrayMapClean = array.map(item=> item * 2);

// filter
const filterArray = array.filter(item=> item > 2 ); 
// const filterArray = array.filter((item) => {
//	return item > 2 
//})

// reduce 
const reduceArray = array.reduce((accumulator, item) => {
	return accumulator + item ;
}, 0); 

//--------------Class ------------------------------- 

class Player {
	constructor(name,type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi my name is ${this.name} and my type is ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name,type) {
		super(name,type)
	}
	play(){
		console.log(`I've very good power that is ${this.type}`)
	}
}

wizard1 = new Wizard('Ahad','Omnitrix');

const sports = ['cricket','football','basketball','hockey','volleyball'];

sports.includes('cricket')

let obj = {
	username: 'abdulahad',
	password: 'secret',
	email: 'abdul9ahad@gmail.com'
}

Object.values(obj).forEach(value=> console.log(value);)

console.log('1');
setTimeout(() => {
	console.log('2');
},2000)
console.log('3')
console.log('3')
console.log('3')
console.log('3')
console.log('3')
console.log('3')
console.log('3')

const array2 = [1,2,3,4,5];
const double = array.map((item)=> {
	return item
})
const newFunc = ((acc,item) => {
	return acc + item;
})
const sum = array2.reduce(newFunc,20)

