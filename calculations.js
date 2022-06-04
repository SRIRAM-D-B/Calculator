let outputScreen = document.getElementById("output-screen");
function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invaid")
    }
}
function Clear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}
function nextPage(){
    window.location = "sample.html";
}