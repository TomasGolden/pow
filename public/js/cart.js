window.onload = function() {
    let prices = [7421, 7421];
    let inputs = document.querySelectorAll('input');
    let minus = document.getElementsByClassName('minus');
    let plus = document.getElementsByClassName('plus');
    
    for(let i=0; i < prices.length; i++)
    {
        minus[i].onclick = () => {
            if(inputs[i].value > 0) {
                inputs[i].value--;
                recalculate(prices);
            } 
        }
        
        plus[i].onclick = () => {
            if(inputs[i].value < 9) {
                inputs[i].value++; 
                recalculate(prices);
            } 
        }
        inputs[i].onchange = () => {
            recalculate(prices);
        }

    }
    
}

function recalculate(prices) {
    let acum = 0;
    let qtyacum = 0;
    let qty = document.getElementsByClassName('cant');
    let counter = document.getElementById('counter');
    let subtotal = document.getElementById('subtotal');
    let total = document.getElementById('total');
    for(let i = 0; i < prices.length; i++) {
        acum = acum + prices[i] * qty[i].value;
        qtyacum = qtyacum + Number(qty[i].value);
    }
    subtotal.innerHTML = acum;
    total.innerHTML = acum;
    counter.innerText = qtyacum;
}