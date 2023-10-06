var frase = prompt("Ingresa una frase: ").toLocaleLowerCase();
let vocales = "";

for (let i = 0; i < frase.length; i++) {
  if ("aeiou".includes(frase[i]) && !vocales.includes(frase[i]))
        vocales += " " + frase[i]; 
}
alert(`En la frase '${frase}'.\nAparecen las siguientes vocales: ${vocales}`);
/* Escribe un programa que pida una frase y escriba las vocales que aparecen */