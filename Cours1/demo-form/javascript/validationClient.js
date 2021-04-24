'use strict';

function validerFormulaire() {

    var x = document.forms["monFormulaire"]["monSelect"].value;


    if(x === "Abracadabra"){
        return true;
    }
    else{
        document.getElementById("hey").hidden = false;
        return false;
    }
}