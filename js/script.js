const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rateText = document.getElementById('rate');
const swap = document.getElementById('btn');

currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);

amount_one.addEventListener('input',calculateMoney);

function calculateMoney(){
    // console.log("otay :D");
    const one = currency_one.value; // setting value to the selection on website
    const two = currency_two.value;
    // console.log(one); // when clicked on each selection, it shows up in the console log of the selection in the website
    // console.log(two); 
    fetch(`https://api.exchangerate-api.com/v4/latest/${one}`) // grabs exchange rate for calculator (fetch) assinging it to "one"
    .then(res => res.json())  // converts to json
    
 // => means continue oppe

    .then(data=>{ // 
        const rate = data.rates[two];
        rateText.innerText = `1 ${one} = ${rate}${two}`;
        amount_two.value = (amount_one.value * rate).toFixed(2);
    })
}

swap.addEventListener("click",()=>{
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculateMoney();
 })

calculateMoney();


