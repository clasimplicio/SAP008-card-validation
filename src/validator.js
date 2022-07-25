const validator = {
    
    isValid: (creditCardNumber) => {
        const arrayCardNumber = Array.from(creditCardNumber);
        let soma=0;
        let sizeCardNumber = arrayCardNumber.length; 
        for(let i=0; i<sizeCardNumber; i++){
            if(sizeCardNumber%2===0){
                if(i%2===0){
                        arrayCardNumber[i]=arrayCardNumber[i]*2;
                        if(arrayCardNumber[i]>9){
                            arrayCardNumber[i]=arrayCardNumber[i]-9;
                        }
                    }else{
                        arrayCardNumber[i]=arrayCardNumber[i]*1;
                    }
            }else{
                if(i%2===0){
                    arrayCardNumber[i]=arrayCardNumber[i]*1;
                }else{
                    arrayCardNumber[i]=arrayCardNumber[i]*2;
                    if(arrayCardNumber[i]>9){
                        arrayCardNumber[i]=arrayCardNumber[i]-9;
                    }
                }
            }
            soma+=arrayCardNumber[i];
        }
        if(soma%10===0){
            return true;
        }else{
            return false;
        }
    }
    ,
    maskify:(creditCardNumber) => {
        const arrayCardNumber = Array.from(creditCardNumber);
        let sizeCardNumber = arrayCardNumber.length; 
        if(sizeCardNumber>4){
            for(let i=0; i<(sizeCardNumber-4); i++){
                arrayCardNumber[i]='#'
            }
        }
        return arrayCardNumber.join('');
    }
};
export default validator;
