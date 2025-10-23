function boasVindas(){
    document.getElementById("x").innerText = "Texto vindo do js"
    document.getElementById("x").style.display="flex";
}
    
function apagar(){
    document.getElementById("x").style.display="none";
}

function mostrarTabuada() {
    const b = 1
    let r = ""
    for (i = 0; i < 11; i++){
        r += `${b} X ${i} =` + (b * i) + "\n"
        document.getElementById("tabuada").innerText = r
    }
}

function entradaTabuada() {
    const base = parseInt(document.getElementById("base"))
    const resultado = document.getElementById("resultado")

    if (base.value < 0 || base.value > 10) {
        resultado.innerText = "Valor Inválido. Digite um número de 1 a 10"
        resultado.style.color="red";
        base.value = ""
        base.focus();
        return
    } 
    else{
        resp = ""
        for (i = 0; i < 11; i++){
            resp += `${base.value} X ${i} =` + (base.value * i) + "\n"
            resultado.innerText = resp
        }
    }
    
}
