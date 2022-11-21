
let bar = document.querySelector("#bar");
let navbar = document.querySelector("#narbar");
let close = document.querySelector('#close')

let sum = 0;

if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}

// Cart
let priceProduct = document.getElementsByClassName('priceProduct');
let inputs = document.getElementsByClassName('amountInput')
let totalPrice = document.getElementsByClassName('totalPrice')

// console.log(totalPrice);
let inputsArray = [...inputs]
inputsArray.forEach((input, index) => {
    totalPrice[index].innerText = (priceProduct[index].innerHTML * input.value).toFixed(2) 
})

inputsArray.forEach((input, index) => {
    input.oninput = (e => {
        sum -= totalPrice[index].textContent
        totalPrice[index].innerText = (priceProduct[index].innerText * e.target.value).toFixed(2)
        sum += Number(priceProduct[index].textContent * e.target.value)
        sumPrices[0].innerText ="$ " + sum.toFixed(2);
        sumPrices[1].innerText ="$ " + sum.toFixed(2);
    })
})




// Remove Product
let iconRemoves = document.getElementsByClassName('remove-product')
let cartItems = document.getElementsByClassName('cart-item')
let sumPrices = document.getElementsByClassName('sum-price')

for (let i = 0; i < iconRemoves.length; i++) {
    
    iconRemoves[i].onclick = () => {
        cartItems[i].style = 'display: none'
        sum -= totalPrice[i].textContent
        sumPrices[0].innerText ="$ " + sum.toFixed(2);
        sumPrices[1].innerText ="$ " + sum.toFixed(2);
    }
}



for (let i = 0; i < totalPrice.length; i++) {
    
    sum += Number(totalPrice[i].textContent);
}

sumPrices[0].innerText ="$ " + sum.toFixed(2);
sumPrices[1].innerText ="$ " + sum.toFixed(2);




