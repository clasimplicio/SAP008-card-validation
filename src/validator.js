const validator = {
    
    isValid: (creditCardNumber) => {
        //---------------STRING PRA ARRAY----------------------------
        const arrayCardNumber = Array.from(creditCardNumber);
        //-----------------SOMA FINAL PARA VALIDAÇÃO------------------------------
        let soma=0;
     
        // console.log(arrayCardNumber);
        //--------------------TAMANHO ARRAY---------------------------
        let sizeCardNumber = arrayCardNumber.length; 
        // console.log(sizeCardNumber)
        // console.log(typeof(sizeCardNumber))
        // alert("entrou")
        for(let i=0; i<sizeCardNumber; i++){
            //---------------------SE FOR PAR A QUANTIDADE DE NUMEROS DO CARTÃO-----------------------------------
            if(sizeCardNumber%2===0){
                if(i%2===0){
                        //-----------------------DOBRANDO OS VALORES---------------------
                        //---------------------STEP 1-----------------
                        arrayCardNumber[i]=arrayCardNumber[i]*2;
                        //---------------------PRA SABER SE O DOBRO DEU MAIOR QUE 9--------------------
                        //--------------------STEP 2------------------
                        if(arrayCardNumber[i]>9){
                            arrayCardNumber[i]=arrayCardNumber[i]-9;
                        }
                    }else{
                        //------------------TRANSFORMANDO EM NUMBER--------------------------
                        arrayCardNumber[i]=arrayCardNumber[i]*1;
                    }
                //------------------------------ SE FOR IMPAR A QUANTIDADE DE NUMEROS DO CARTÃO-------------------    
            }else{
                if(i%2===0){
                    //-----------TRANSFORMANDO EM NUMBER---------------
                    arrayCardNumber[i]=arrayCardNumber[i]*1;
                }else{
                    //------------------------DOBRANDO OS VALORES
                    //--------------------STEP 1---------------------------
                    arrayCardNumber[i]=arrayCardNumber[i]*2;
                    //------------------PRA SABER SE O DOBRO DEU MAIOR QUE 9-----------------------
                    //-------------------------------STEP 2---------------------
                    if(arrayCardNumber[i]>9){
                        arrayCardNumber[i]=arrayCardNumber[i]-9;
                    }
                }
            }
            //-------SOMAR TODOS OS NUMEROS----------------
            //-----------------STEP 3----------------------------  
            soma+=arrayCardNumber[i];
        }
        //---------------FAZER A VALIDAÇÃO DO CARTÃO-------------------
        if(soma%10===0){
            return true;
        }else{
            return false;
        }
        //console.log(arrayCardNumber);   
    }
    ,
    maskify:(creditCardNumber) => {
        //---------------STRING PRA ARRAY----------------------------
        const arrayCardNumber = Array.from(creditCardNumber);
        //--------------------TAMANHO ARRAY---------------------------
        let sizeCardNumber = arrayCardNumber.length; 
        //---------------- ALTERA SE A QUANTIDADE DE NUMEROS DO CARTÃO FOR MAIOR 4-------------------
        if(sizeCardNumber>4){
            for(let i=0; i<(sizeCardNumber-4); i++){
                arrayCardNumber[i]='#'
            }
        }
        //-----------------IMPRIMINDO O ARRAY EM FORMA DE STRING SEM NENHUMA SEPARAÇÃO---------------
        alert(arrayCardNumber.join(''));
    }
};

export default validator;
