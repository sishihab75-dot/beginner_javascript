const book = "bangla";
const book1 = "Bangla";
if(book == book1){
    console.log("khela hobe :");
}
else{
    console.log("kothin kup :");
}

if(book.toUpperCase == book1.toUpperCase){
    console.log("khela hobe :");
}
else{
    console.log("kothin kup :");
}

// slice 

const address = "voashrwala";
const part = address.slice(3,7);
console.log(part);

// split 

console.log(address.split("a"));
const array= [1,2, 3, 4, 5, 5,6,3];
console.log(array.join("_"));

// revarse 

const revarse = "i learning fahh"
let fah = ""
for(const letter of revarse){
    // console.log(letter);
    fah = letter + revarse;
}
console.log(fah);


//  object 

const bottle= {
    brand: "apple",
    price: 50,
    color: "red",
    isclean: false
}
console.log(bottle);