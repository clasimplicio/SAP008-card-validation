import validator from './validator.js';

//--------------ADICIONANDO EVENTO AO BOTÃO VALIDAR-----------------
document.getElementById("ok").addEventListener("click",pegar);

let creditCardNumber;
//--------------FUNÇÃO DO BOTÃO VALIDAR---------------------------------
function pegar() {
    //-------------------RECEBE O Q FOI DIGITADO NO INPUT---------------
    creditCardNumber = document.getElementById("card").value;
    //-----------CHAMANDO O MÉTODO DA OBJETO VALIDATOR---------------------
    let valid = validator.isValid(creditCardNumber);
    //-------------------------VERIFICANDO A VALIDAÇÃO COM O RETURNO NA VARIÁVEL VALID-----------------------
    if(valid==true){
        alert("CARTÃO VÁLIDO")
    }else{
        alert("CARTÃO INVÁLIDO")
    }
}

//-----------------------ADICIONANDO EVENTO AO BOTÃO MASCARAR-------------------------------
document.getElementById("mascara").addEventListener("click",camuflar);
//------------------FUNÇÃO DO BOTÃO MASCARAR----------------------
function camuflar(){
    //--------------RECEBE O QUE FOI DIGITADO NO INPUT--------------------
    creditCardNumber = document.getElementById("card").value;
    //---------------------------CHAMA O METODO DO OBJETO VALIDATOR--------------------
    validator.maskify(creditCardNumber);
}

console.log(validator);
