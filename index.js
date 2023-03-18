const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    var name_1= [...cats,name];
    return name_1;
  }
function prependCat(name){
    var name_1= [name, ...cats]
    return name_1
}
function removeLastCat(){
    var name_1 = cats.slice(0, length-1)
   return(name_1) 
}
function removeFirstCat(){
    var name_1 = cats.slice(1)
    return(name_1)
}
