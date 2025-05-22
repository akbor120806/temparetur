const TextBox = document.getElementById("TextBox")
const toFarenhight = document.getElementById("toFarenhight")
const celsius = document.getElementById("celsius")
const result = document.getElementById("result")
let temp;



function convert(){
    if(toFarenhight.checked){
        temp = Number(TextBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F"
    }
    else if(celsius.checked){
        temp = Number(TextBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "c" ;
    }
    else{
        result.textContent = "select a unit";
    }
}
