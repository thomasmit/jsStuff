function add (a,b) {
	return a + b;
}

console.log(add(5,5));

var partial = add.bind(null, 3);

console.log(partial(5));


function foo () {
	console.log(x);
	var x = 1;
}


foo() ;



