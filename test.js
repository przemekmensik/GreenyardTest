document.addEventListener('DOMContentLoaded', (event) =>{
    console.log('works!');

    var confButton = document.getElementById("confirm");
    var checkbox = document.getElementById("checkboxInput");
    var txtInput = document.getElementById("textInput");
    var testDiv = document.getElementById("test-div");
    var span = document.querySelector("span");
    var cancButton = document.getElementById("cancel");


    console.log(confButton);
    console.log(checkboxInput);
    console.log(txtInput);
    console.log(testDiv);
    console.log(span);
    console.log(cancel);





function textValidation() {
    if (txtInput.value > 100 && txtInput.value < 1000 && checkbox.checked) {
        confButton.disabled = false;
    } else { 
        confButton.disabled = true;
    }
}

function confClick() {
    testDiv.parentElement.removeChild(testDiv);
    span.innerHTML = "ok";
}

function cancClick() {
    testDiv.parentElement.removeChild(testDiv);
    span.innerHTML = "cancelled";
}

checkbox.addEventListener("click", textValidation);
txtInput.addEventListener("keyup",textValidation);
confButton.addEventListener("click", confClick);
cancButton.addEventListener("click", cancClick);

});