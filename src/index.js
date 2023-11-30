// ====================== PAIR PROGRAMMING  ======================

// EPISODIO 1: JESSIH STRIKES BACK

// 1) BRUTE FORCE ATTACK: La JeSsIh nos ha pedido que accedamos al instagram de su ex. Sospecha que puede saber cuál es su contraseña y nos pasa una lista de posibles contraseñas
// Como futuros hackers, vuestro objetivo es ayudar a la JeSsIh (nuestra jefa) a crear una función que resuleva sus "problemas".
// ENUNCIADO: dados 2 parámetros (passwords y rightPassword), crea una función que compruebe si alguna de las contraseñas de su lista coincide con la contraseña real. Devuelve un valor booleano (true si existe, false si no)
// Ejemplo: passwords es un array como: ["veranito2019", "purple","angel","jordan","liverpool"], rightPassword es "purple", en ese caso devolveríamos true porque la contraseña real forma parte de las contraseñas posibles

function checkIfPassword(passwords, rightPassword) {}

// 2) LA BLACKBERRY: La JeSsIh no ha encontrado indicios en el IG de su ex de que haya encontrado a otra persona.
// Sin embargo, la ambición (y toxicidad) de la JeSsIh van mucho más allá: ha encontrado su antiguo móvil y quiere acceder a sus mensajes.
// El dispositivo tiene un PIN de 4 posibles valores NUMÉRICOS. Es decir, cada valor del pin puede ser un número del 0 al 9, ejemplo: 5050
// Existe una excepción: El primer número del pin NO puede ser 0
// ENUNCIADO: Crea una función que genere todos los posibles PINS existentes. NOTA: los pins tienen que estar ordenados de menor a mayor [1000, 1001, ... 9999]

function getAllPossiblePins() {}

// 3) MAILS: JeSsIh no ha encontrado ninguna clave en el dispositivo de su ex, pero recuerda que él pasaba mucho tiempo intercambiando "mails profesionales". Necesita entrar en su cuenta.
// ENUNCIADO: dada una lista de mails, retorna un array con todas las posibles combinaciones con la terminación @gmail.com
// Ejemplo: ["goblin729", "elXokasIstheBest", "furbitol98", "forocarros98"] => ["goblin729@gmail.com", "elXokasIstheBest@gmail.com", "furbitol98@gmail.com", "forocarros98@gmail.com"]

function getAllPossibleMails(mails) {}

// 4) JeSsIh ha conseguido el correo de su ex. Ahora necesita la contraseña. En el IG no encontró mensajes pero sí encontró un extraño objeto (el ex era desarrollador de IA frustrado que trabajaba para Marca.com) junto a una ristra de letras
// Parece que ese objeto es una serie de reglas para desencriptar un mensaje cifrado.
// ENUNCIADO: completa la función para poder iterar esta y cualquier string y desencriptar el código y cualquier otro. Retorna la STRING resultante de desencriptar el mensaje.
// EJEMPLO: cipherText = "dzdz" keys = {d: "h", z: "o"} => "hoho"

function decryptMessage(
  cipherText = "axbl",
  keys = { a: "t", b: "m", x: "k", l: "S" }
) {}

// 5) INFILTRACIÓN: JeSsIh no encontró ningún mensaje en el dispositivo de su ex. Pero sí ha encontrado un sospechoso documento en su gmail.
// Este documento es una lista de palabras: ["jordan","samantha",  "liverpool", "justin", "loveme", "fuckyou", "123123", "football", "secret", "andrea", "carlos", "jennifer", "joshua", "bubbles", "1234567890", "superman", "hannah", "amanda", "loveyou", "pretty", "basketball", "andrew", "angels", "tweety", "flower","elizabeth","samantha", "playboy", "hello", "elizabeth", "hottie", "tinkerbell", "charlie", "samantha", "jennifer"]
// JeSsIh sospecha que la clave para estar más deprimida se encuentra en esta lista de palabras. Tal vez la contraseña para su gmail sea la palabra que más se repita...
// Por otra parte, qué significa el texto desencriptado de la última función: "tkmS"?
// Enunciado: Crea una función que, dada una lista de palabras, encuentre la palabra que más veces se repita. Retorna la palabra que más se repita como string.

function getMostCommonWord(words = mostCommonWords) {}

// 6) CONCLUSIONES: JeSsIh ha encontrado la palabra que más se repite en la lista de palabras. "tkmS"... ¿Quién es Samantha?
// Izan (el ex) se percata de la intrusión y cambia su contraseña. Pero JeSsIh es capaz de hacer una última llamada a la Api de gmail para recuperar aquellos correos donde se mencione a "Samantha".
// Da la casualidad de que Samantha es también el nombre de su hermana, así que hay correos con el mismo tema que no dan ninguna pista.
// El día "14-02-2023" Izan desapareció por 24 horas. ¿Qué pasó ese día?
// ENUNCIADO: Completa la función para acceder a la propiedad message del mensaje enviado por Izan el día 14 de febrero de 2023. Retorna dicho mensaje

function getCompleteMessage(messages = samanthaRelatedMessages) {
  return null
}

// PREGUNTA FINAL: ¿QUIÉN ES SAMANTHA?

// =============================================================================

// BONUS 🔥🔥🔥: First letter to appear twice: https://leetcode.com/problems/first-letter-to-appear-twice/

if (typeof module !== "undefined") {
  module.exports = {
    checkIfPassword,
    getAllPossiblePins,
    getAllPossibleMails,
    decryptMessage,
    getMostCommonWord,
    getCompleteMessage,
  }
}
