// lets try to convert in function 

//update input field with function
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountvalue = parseFloat(inputAmountText);
    //clr input text
    inputField.value = '';

    return amountvalue;
};

// update text with function
function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = amount + previousTotal ;
};

//update balance

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}






document.getElementById('deposite-button').addEventListener('click', function(){
   /*  const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText); */
   

    // set deposite input value

    /* const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText)
    depositeTotal.innerText = depositeAmount + previousDepositeTotal ; */

   

    //update balance

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositeAmount; */
    const depositeAmount = getInputValue('deposite-input');
    if(depositeAmount > 0){
        updateTotalField('deposite-total', depositeAmount)
        updateBalance(depositeAmount, true)
    }
});

//handle withdraw button 

document.getElementById('withdraw-button').addEventListener('click', function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    

    //set withdraw amount

    /* const withdrawTotal = document.getElementById('withdraw-total');
    let withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText)
    withdrawTotal.innerText = withdrawAmount + previousWithdrawAmount; */
    
    //update balance after withdraw

    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    if(withdrawAmount > 0){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false)
    }
    
})