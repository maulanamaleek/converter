var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue, outputTypeValue;


inputTypeValue = inputType.value;
outputTypeValue = outputType.value;


input.addEventListener("keyup", converter);
inputType.addEventListener("change", converter);
outputType.addEventListener("change", converter);



function converter () {
    
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;

    //inputType = meter
    if (inputTypeValue === "meter" && outputTypeValue === "inch"){
        output.innerHTML = Number(input.value) * 39.37;
    } else if (inputTypeValue === "meter" && outputTypeValue === "feet"){
        output.innerHTML = Number(input.value) * 3.28084;
    } else if (inputTypeValue === "meter" && outputTypeValue === "meter") {
        output.innerHTML = input.value;
    }

    //inputType = inch
    if (inputTypeValue === "inch" && outputTypeValue === "meter"){
        output.innerHTML = Number(input.value) * 0.0254;
    } else if (inputTypeValue === "inch" && outputTypeValue === "feet"){
        output.innerHTML = Number(input.value) * 0.0833333;
    } else if (inputTypeValue === "inch" && outputTypeValue === "inch") {
        output.innerHTML = input.value;
    }

     //inputType = feet
    if (inputTypeValue === "feet" && outputTypeValue === "meter"){
        output.innerHTML = Number(input.value) * 0.3048;
    } else if (inputTypeValue === "feet" && outputTypeValue === "inch"){
        output.innerHTML = Number(input.value) * 12;
    } else if (inputTypeValue === "feet" && outputTypeValue === "feet"){
        output.innerHTML = input.value;
    };
}
