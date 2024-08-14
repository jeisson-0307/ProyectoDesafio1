// Obtener los elementos del DOM
const textoInput = document.getElementById("texto");
const encriptarBtn = document.getElementById("encriptar");
const desencriptarBtn = document.getElementById("desencriptar");
const respuesta = document.getElementById("respuesta");

// Función para encriptar el texto
function encriptarTexto(texto) {
  let textoEncriptado = texto.toLowerCase()
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
  let textoDesencriptado = texto.toLowerCase()
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return textoDesencriptado;
}

// Función para validar el texto
function validarTexto(texto) {
  // Verificar si el texto está vacío o solo tiene espacios
  if (/^\s*$/.test(texto)) {
    alert("El texto no puede estar vacío.");
    return false;
  }
  // Verificar si el texto tiene letras mayúsculas
  if (/[A-Z]/.test(texto)) {
    alert("El texto no puede tener letras mayúsculas.");
    return false;
  }
  // Verificar si el texto tiene acentos o caracteres especiales
  if (/[^a-z\s]/.test(texto)) {
    alert("El texto no puede tener acentos ni caracteres especiales.");
    return false;
  }
  return true;
}

// Función para manejar el evento de encriptar el texto
function onEncriptarClick() {
  // Validar el texto
  if (!validarTexto(textoInput.value)) {
    return;
  }
  // Encriptar el texto
  let textoEncriptado = encriptarTexto(textoInput.value);
  // Mostrar el resultado en la pantalla
  respuesta.textContent = textoEncriptado;
}

// Función para manejar el evento de desencriptar el texto
function onDesencriptarClick() {
  // Validar el texto
  if (!validarTexto(textoInput.value)) {
    return;
  }
  // Desencriptar el texto
  let textoDesencriptado = desencriptarTexto(textoInput.value);
  // Mostrar el resultado en la pantalla
  respuesta.textContent = textoDesencriptado;
}

// Agregar los listeners a los botones
encriptarBtn.addEventListener("click", onEncriptarClick);
desencriptarBtn.addEventListener("click", onDesencriptarClick);

// Agregar el botón de copiar texto
const copiarBtn = document.createElement("button");
copiarBtn.textContent = "Copiar";
copiarBtn.addEventListener("click", copiarTexto);
respuesta.insertAdjacentElement("afterend", copiarBtn);