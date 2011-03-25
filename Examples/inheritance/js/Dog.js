Dog.inherits(Animal);

function Dog(breed){

	this.breed = breed;

	this.bark = function(){
		console.log("woof");
		return this;
	}
	
	this.speak = function(){
		console.log("I am a " + this.breed);
		return this;
	}
	
}



var Tutorials = {
	
	open(url) : function(){
		window.open(url);
	}
	
}


var something = function() {
	console.log("default value");
};



Tutorials.open("google.com");