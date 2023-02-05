// var loop = 1;
// while(loop<40){
//     console.log('ajke amar mon valo nei');
//     console.log(loop);
//     loop ++;
// }

// // show odd numbers 
// for(var number = 581; number<=623; number +=2){
//     console.log(number);
// }

// // show even numbers 
// for(var number = 412; number<=456; number +=2){
//     console.log(number);
// }

// // show array 
// var haveLearned = ['html','css','bootstrap','tailwind','javascript'];
// console.log(haveLearned);

// break and continue 
var number = 30;
while(number<=86){
    console.log(number);
    number++;
    if(number>44){
        break; 
    }
}

var number = [1,2,3,4,5,6];
for(var i=0;i<number.length;i++){
    var numbers = number[i];
    if(numbers>4){
        continue;
    }
    console.log(numbers);
}

var numbers = [100,200,300,400,500,600];
for(var i=0;i<numbers.length;i++){
    var number = numbers[i];
    if(number <= 200){
        console.log(number);
    }
}