var frase = prompt("Ingresa una frase: ").toLocaleLowerCase();
let vocales = 0;

for (let i = 0; i < frase.length; i++) {
  if ("aeiou".includes(frase[i]))
        ++vocales; 
}
alert(`En la frase '${frase}'.\nAparecen ${vocales} vocales`);
/* Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales */