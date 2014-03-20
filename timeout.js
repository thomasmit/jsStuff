var requestReturned = false;


setTimeout(function() {
	console.log('request returned');

	requestReturned = true;
}, 5000);


var doStuff = function ( ) {

	if(!requestReturned) {
		console.log('splat');
		setTimeout(doStuff, 1000);
	}

}

setTimeout(doStuff,1000);


