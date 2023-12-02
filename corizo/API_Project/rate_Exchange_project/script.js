const currencyEL_one = document.getElementById('currency-one');
const currencyEL_two = document.getElementById('currency-two');

const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rateEL = document.getElementById('rate');
const swapEL = document.getElementById('swap');


// const calculate = ()=>{
//     fetch('items.json')
//     .then(res=>res.json())
//     .then(data => document.body.innerHTML = data[1].text);
// }

// calculate();

const calculate = () => {
    const currency_one = currencyEL_one.value;
    const currency_two = currencyEL_two.value;

    // console.log(currency_one+ "===" +currency_two);
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then((data)=>
        {
            const rate = data.rates[currency_two];
            rateEL.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
            amount_two.value = `${rate*amount_one.value}`;
        }
    );

}

const swapping = () => {
    const temp = currencyEL_one.value;

    currencyEL_one.value = currencyEL_two.value;
    currencyEL_two.value = temp;

    calculate();
}

calculate();

currencyEL_one.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);

currencyEL_two.addEventListener('change',calculate);
amount_two.addEventListener('input',calculate);

swapEL.addEventListener('click',swapping);