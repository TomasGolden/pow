window.onload = function() {
    let prices = [7421, 7421];
    let inputs = document.getElementsByClassName('cant');
    let minus = document.getElementsByClassName('minus');
    let plus = document.getElementsByClassName('plus');
    
    for(let i=0; i < plus.length; i++)
    {
        minus[i].onclick = () => {
            if(inputs[i].value > 0) {
                inputs[i].value--;
                recalculate(prices);
            } 
        }
        
        plus[i].onclick = () => {
            if(inputs[i].value < 15) {
                inputs[i].value++; 
                recalculate(prices);
            } 
        } 
    }
    
}

function recalculate(prices) {
    let acum = 0
    let inputs = document.getElementsByClassName('cant');
    let subtotal = document.getElementById('subtotal');
    let total = document.getElementById('total');
    for(let i = 0; i < prices.length; i++) {
        acum = acum + prices[i] * inputs[i].value;
    }
    subtotal.value = acum;
    total.value = acum;
}