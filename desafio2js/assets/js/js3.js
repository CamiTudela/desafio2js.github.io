
document.querySelector("#ingresar").addEventListener('click', () => {
    let digito1 = document.querySelector("#digito1").value;
    let digito2 = document.querySelector("#digito2").value;
    let digito3 = document.querySelector("#digito3").value;
    
    let password = digito1 + digito2 + digito3;
    let mensaje = document.querySelector("#mensaje");
    
    if (password === '911') {
      mensaje.innerHTML = "Password 1 correcto";
    } else if (password === '714') {
      mensaje.innerHTML = "Password 2 es correcto";
    } else {
      mensaje.innerHTML = "Password incorrecto";
    }
  });