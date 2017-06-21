var obj = {
	name: "John Doe",
	greet: function() {
		console.log(`Hello ${ this.name }`)
	}
}

obj.greet();
// The only difference between call and apply is the way parameters are entered
// .call can accept parameters { name: 'Jane Doe', param1, param2
// .apply accepts parameters in array { name: 'Jane Doe'}, [param1, param2]
obj.greet.call({ name: 'Jane Doe'});
obj.greet.apply({ name: 'Jane Doe'})