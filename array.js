var fruits=["apple","orange"];
fruits.push("mango","grape");
fruits[10]="watermelon";
console.log(fruits);

for(var i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
for(var a of fruits){ 
    console.log(a);
}