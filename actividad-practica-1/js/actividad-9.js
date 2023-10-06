const frase = prompt("Ingresar una frase: ").toLocaleLowerCase();
var cont = 0;
for (let i = 0; i < frase.length; i++) {
  if(frase[i] == "a")
    ++cont;
}
alert(`En la frase '${frase}'.\nLa 'a' se repite: ${cont} veces.`)
/* Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a */