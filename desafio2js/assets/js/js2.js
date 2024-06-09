
let verificar = document.querySelector("#verificar");

verificar.addEventListener('click', () => {
    let input1 = parseInt(document.querySelector("#input1").value) || 0;
    let input2 = parseInt(document.querySelector("#input2").value) || 0;
    let input3 = parseInt(document.querySelector("#input3").value) || 0;

    let suma = input1 + input2 + input3;
    let mensaje = document.querySelector("#mensaje");

    if (suma > 10) {
      mensaje.innerHTML = "Llevas demasiados stickers";
    } else {
      mensaje.innerHTML = `Llevas ${suma} stickers`;
    }
  });