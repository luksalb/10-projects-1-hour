const BTN1 = document.querySelector("#sum")
const BTN2 = document.querySelector("#sub")
const BTN3 = document.querySelector("#mult")
const BTN4 = document.querySelector("#div")


BTN1.addEventListener('click',function(sum){
    sum.preventDefault();
    const NUM1 = parseInt(document.getElementById('num1').value);
    const NUM2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = NUM1 + NUM2;
})

BTN2.addEventListener('click',function(sub){
    sub.preventDefault();
    const NUM1 = parseInt(document.getElementById('num1').value);
    const NUM2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = NUM1 - NUM2;
})

BTN3.addEventListener('click',function(mult){
    mult.preventDefault();
    const NUM1 = parseInt(document.getElementById('num1').value);
    const NUM2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = NUM1 * NUM2;
})

BTN4.addEventListener('click',function(div){
    div.preventDefault();
    const NUM1 = parseInt(document.getElementById('num1').value);
    const NUM2 = parseInt(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = NUM1 / NUM2;
})

