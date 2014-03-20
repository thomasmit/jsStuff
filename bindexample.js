console.log('==no bind==');

var myObj1 = {

	specialFunction: function () { console.log('special1'); },
	anotherSpecialFunction: function () { console.log('special2'); },

	getAsyncData: function (callback) { callback(); }, //executes a callback

	render: function () {

		var that = this;
		this.getAsyncData(function () { 
			that.specialFunction(); 
			that.anotherSpecialFunction(); 
		});

	}
};

myObj1.render();

console.log('==with bind==');

var myObj2 = {

	specialFunction: function () { console.log('special1'); },
	anotherSpecialFunction: function () { console.log('special2'); },

	getAsyncData: function (callback) { callback(); }, //executes a callback

	render: function () { 
			this.getAsyncData( function()  { 
				this.specialFunction(); 
				this.anotherSpecialFunction(); 
			}.bind(this));
		}
};

myObj2.render();


