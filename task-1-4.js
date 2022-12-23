let droidQty = prompt('quantity droids?')

const credits = 23580;
const pricePerDroid = 3000;

let totalPrice = (droidQty * pricePerDroid);
let result = credits - totalPrice;

if (droidQty === null){
    console.log('Скасовано користувачем!')
}else if( totalPrice > credits){
    console.log('Недостатньо коштів на рахунку!')
}else if (totalPrice < credits){
    console.log(`Ви купили ${droidQty} дроїдів, на рахунку залишилося ${result} кредитів.`)
}





