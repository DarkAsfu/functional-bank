
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('balance-withdraw');

    const previousBalanceTotal = getTextElementValueById('balance-total');
    if(newWithdrawAmount > previousBalanceTotal){
        alert('You have not much money');
        return;
    }
    const finalWithdrawAmount = newWithdrawAmount+previousWithdrawAmount;
    setTextElementValueById('balance-withdraw', finalWithdrawAmount);
    const finalBalanceAmount = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', finalBalanceAmount);
 })