const entradaTexto = document.querySelector(".entradaTexto");
const mensaje = document.querySelector(".mensaje");

let palabrasClave = [["e","enter"],
                     ["i","imes"],
                     ["a","ai"],
                     ["o","ober"],
                     ["u","ufat"]];

function encriptar(stringEncriptado){
    
    stringEncriptado = stringEncriptado.toLowerCase();

    if(stringEncriptado.trim() != "")
    {
        for(let i=0; i<palabrasClave.length; i++)
        {
            if(stringEncriptado.includes(palabrasClave[i][0]))
            {
                stringEncriptado=stringEncriptado.replaceAll(palabrasClave[i][0],palabrasClave[i][1]);   
            }
        }
    }
    else{
        return "Ingrese un texto para encriptar";
    }
    return stringEncriptado;
}

function btnEncriptar()
{
    const textoEncriptado = encriptar(entradaTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    entradaTexto.value = "";
}

function desencriptar(stringDesencriptado){
    
    stringDesencriptado = stringDesencriptado.toLowerCase();

    if(stringDesencriptado.trim() != "") //Verifica que el contenido del textarea no este vacio
    {
        for(let i=0; i<palabrasClave.length; i++)
        {
            if(stringDesencriptado.includes(palabrasClave[i][1]))
            {
                stringDesencriptado=stringDesencriptado.replaceAll(palabrasClave[i][1],palabrasClave[i][0]);
                
            }
        }
    }
    else{
        return "Ingrese un texto para desencriptar";
    }
    return stringDesencriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(entradaTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    entradaTexto.value = "";
}

function btnCopiar()
{
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value).then(() => alert("Texto copiado"));
    mensaje.value = "";
}
