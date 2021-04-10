//Task 1

let product = [ 'bread', 'fruit', 'milk' ];

let last_product = product[product.length - 1];
console.log(last_product);
console.log('<---------------------------------->');

//Task 2

let styles = ['Jazz', 'Blues'];
console.log(styles);
styles.push('Rock\'n\'roll');
console.log(styles);
styles.splice(-1, 1, 'Classic');
console.log(styles);
console.log(styles.shift());
styles.unshift('Rep', 'Reggi');
console.log(styles);
console.log('<---------------------------------->');

//Task 3

function find(arr, value){
	let flag = false;
	for (let i = 0; i<arr.length; i++){
		if(arr[i] == value){
			console.log(i);
			flag = true;
		}
	}
	if (!flag){
		console.log(-1);
	}
}

find(styles, 'Rep');
console.log('<---------------------------------->');

//Task 4

function filterRange(array, a, b){
	return array.slice(a,b);
}

let arr = [1,2,3,4,5,6];

let small = filterRange(arr, 2,4);
console.log(small);

//Task 5

let a = 'my-short-string';

function camelize(str){
	let arr = a.split(str);
	let b = arr.join('S');
	console.log(b);
}

camelize('-s');