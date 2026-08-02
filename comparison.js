console.log(5>10);
console.log(5<10);
console.log(5>=10);
console.log(5<=10);
console.log(5==10);
console.log(5!=10);


// comparison on variable 

var bal = 10;
var chal = 15;
console.log(bal > chal);

//  if & else 

var number = 5;
if(5>3){
    console.log("hello");
}
if(5>6){
    console.log("hello");
}

if(number > 8)
{
    console.log("drink water :");
}
else{
    console.log("dont drink water :");
}

var name = "jodu" ;
var age = 22;
var bcs = true;
var waight = 70;
if(age>20 || bcs == true)
{
    console.log("khela hobe :");
}

if((age>20 || name == "shihab") && bcs == true)
{
    console.log("khela hobe :");
}
if((age>20 || bcs == true) && name == "shihab")
{
    console.log("khela hobe :");
}


//  multi level condition 

var pric = 2000;


if(pric >= 4000){
    // 20% discound 
    const discound = pric * 20/100;
    const payamount = pric-discound;
    console.log(payamount);
}
else if (pric >= 3000){
    const discound = pric*10/100;
    const payamount = pric - discound;
    console.log(payamount);
}
else if (pric >= 2000){
    const discound = pric*5/100;
    const payamount = pric - discound;
    console.log(payamount);
}
else{
    console.log(pric);
}