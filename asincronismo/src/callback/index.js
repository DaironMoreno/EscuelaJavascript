function  sum(num1,num2) {
    return num1 + num2;
}

function calc(num1 , num2 , callback){
    return callback(num1,num2);
}

console.log(calc(3,4,sum))

function ShowDate(callback){
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    },3000);
}

function PrintDate(print){
    console.log(print)
}

ShowDate(PrintDate);