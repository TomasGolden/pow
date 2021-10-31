window.onload = function() {
    let prices = [7421, 7421];
    let inputs = document.querySelectorAll('input');
    let minus = document.getElementsByClassName('minus');
    let plus = document.getElementsByClassName('plus');
    
    for(let i=0; i < prices.length; i++)
    {
        minus[i].onclick = () => { // AL HACER CLICK EN EL - RESTA EL VALOR DEL INPUT
            if(inputs[i].value > 0) {
                inputs[i].value--;
                recalculate(prices);
            } 
        }
        
        plus[i].onclick = () => { // AL HACER CLICK EN EL + SUMA EL VALOR DEL INPUT
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

// FUNCION QUE RECALCULA LOS VALORES DE LOS INPUTS Y SUMA LOS TOTALES

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