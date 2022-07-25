import validator from './validator.js';

let creditCardNumber;
document.getElementById("ok").addEventListener("click",pegar);

function pegar() {
    creditCardNumber = document.getElementById("card").value;
    let typeNumberCreditCardNumber = Number(creditCardNumber);
    if(creditCardNumber!=""){  
        if(isNaN(typeNumberCreditCardNumber)){
            alert("Digite apenas números em \"NÚMERO DO CARTÃO\" ");
        }else{
            let valid = validator.isValid(creditCardNumber);
            if(valid==true){
                alert("CARTÃO VÁLIDO")
            }else{
                alert("CARTÃO INVÁLIDO")
            }
        }
    }
}
document.getElementById("mascara").addEventListener("click",camuflar);
function camuflar(){
    creditCardNumber = document.getElementById("card").value;
    alert(validator.maskify(creditCardNumber));
}
console.log(validator);