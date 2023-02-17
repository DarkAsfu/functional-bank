function getInputFieldValueById(inputId){
    const getInputField = document.getElementById(inputId);
    const getInputValueString = getInputField.value;
    const getInput = parseFloat(getInputValueString);
    getInputField.value = '';
    return getInput;
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
function setTextElementValueById(id, value){
    const finalValue = document.getElementById(id);
    finalValue.innerText = value;
    
}