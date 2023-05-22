
//問１
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
function isEven() {
    for(let i = 0;i<=numbers.length;i++){
        if(numbers[i]%2===0){
        let num = numbers[i];
        console.log(num + 'は偶数です');
    }
}
}

isEven();


//問2

class Car{
 constructor(gass,number){
    this.gass = gass;
    this.number = number;
 }
 getNumGas(){
    console.log(`ガソリンは${this.gass}です。ナンバーは${this.number}です。`);
 }
}

let Car1 = new Car(20,8766);
Car1.getNumGas();