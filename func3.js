var user={
name:"Ganya",
age:23,
dispaly: function(){
    console.log(this.age+" "+this.name)
},
reinitialize: function(name,age){
    this.name=name;
    this.age=age;
    console.log(name);
    console.log(age);
}

}
user.dispaly();
user.reinitialize("Abc",34);