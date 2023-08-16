function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


/*validacion de Campos*/

function passwordIgualdad(){

return document.getElementById('password1').value === document.getElementById('password2').value

}

function passwordlongitud(){

    const minimo = 6;
    return document.getElementById('password1').value.length >= minimo

}




let contador = 0 

function validacioncampos (){
let validacion = document.getElementsByClassName('form-control')

for (let i=0; i<validacion.length; i++){

    if (validacion[i].value === ""){
        contador++
}
}
console.log(contador)

return contador  == 0


}


document.getElementById('regBtn').addEventListener("click", function() {

if (passwordIgualdad() && passwordlongitud() && validacioncampos ()){
    showAlertSuccess()
}
else{
    showAlertError()
}




})


