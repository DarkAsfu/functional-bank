document.getElementById('btn-deposite').addEventListener('click', function(){
    const newDepositeAmount = getInputFieldValueById('deposite-field');
    const previousDepositeAmount = getTextElementValueById('deposite-total');
    
    const finalDepositeAmount = newDepositeAmount+previousDepositeAmount;
    setTextElementValueById('deposite-total', finalDepositeAmount );

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const finalBalanceAmount = previousBalanceTotal+newDepositeAmount;
    
    setTextElementValueById('balance-total', finalBalanceAmount);
    
})
