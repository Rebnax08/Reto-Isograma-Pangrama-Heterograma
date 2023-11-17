const formulario = document.getElementById('formulario');
const resultadosDiv = document.getElementById('resultados');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const texto = document.getElementById('texto').value;

  const esIsogramaResultado = esIsograma(texto);
  const esPangramaResultado = esPangrama(texto);
  const esHeterogramaResultado = esHeterograma(texto);
  const coincideCantidadLetrasPalabras = coincideCantidadLetrasConPalabras(texto);

  mostrarResultados(esIsogramaResultado, esPangramaResultado, esHeterogramaResultado, coincideCantidadLetrasPalabras);
});

function mostrarResultados(esIsograma, esPangrama, esHeterograma, coincideCantidadLetrasPalabras) {
  resultadosDiv.innerHTML = `
    <p>Isograma: ${esIsograma}</p>
    <p>Pangrama: ${esPangrama}</p>
    <p>Heterograma: ${esHeterograma}</p>
    <p>La cantidad de letras coincide con la cantidad de palabras: ${coincideCantidadLetrasPalabras}</p>
  `;
  resultadosDiv.classList.add('mostrar');
}

function esIsograma(cadena) {
  const caracteres = cadena.toLowerCase().split('');
  const caracteresUnicos = [...new Set(caracteres)];
  return caracteres.length === caracteresUnicos.length;
}

function esPangrama(cadena) {
  const letras = "abcdefghijklmnopqrstuvwxyz";
  const cadenaMinusculas = cadena.toLowerCase();
  for (let letra of letras) {
    if (!cadenaMinusculas.includes(letra)) {
      return false;
    }
  }
  return true;
}

function esHeterograma(cadena) {
  const caracteres = cadena.toLowerCase().replace(/[^a-z]/g, '').split('');
  const caracteresUnicos = [...new Set(caracteres)];
  return caracteres.length === caracteresUnicos.length;
}

function coincideCantidadLetrasConPalabras(oracion) {
  const palabras = oracion.split(' ');
  const cantidadLetras = oracion.replace(/[^a-zA-Z]/g, '').length;
  return palabras.length === cantidadLetras;
}