function partial (fn /*, args...*/){
	 var aps = array.prototype.slice,
	 args = aps.call(arguements, 1);

	  return function(){
  		return fn.apply(this, args.concat(aps.call(arguements)));
	  };	
	
	}	

function add (a,b){
	return a+b;
}

var add1 = partial(add,1);
add1(2);
