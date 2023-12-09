/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;

console.log("la somma di 10 e 20 è:", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 21);

console.log("numero casuale tra 0 e 20:", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Fabio",
  surname: "Gilardi",
  age: 21,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "CSS", "JS"];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("SQL");

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.ceil(Math.random() * 6);

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (a, b) => {
  if (a !== b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  } else {
    return "they are equal";
  }
};

console.log(whoIsBigger(12, 7));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (string) => string.split(" ");

console.log(splitMe("I love Coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, boolean) => {
  if (boolean === true) {
    return string.slice(1);
  } else {
    return string.slice(0, string.length - 1);
  }
};

console.log(deleteOne("ciao Epicode", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (string) => {
  const lettersArray = string.split("");
  for (let i = 0; i < lettersArray.length; i++) {
    if (
      lettersArray[i] === "0" ||
      lettersArray[i] === "1" ||
      lettersArray[i] === "2" ||
      lettersArray[i] === "3" ||
      lettersArray[i] === "4" ||
      lettersArray[i] === "5" ||
      lettersArray[i] === "6" ||
      lettersArray[i] === "7" ||
      lettersArray[i] === "8" ||
      lettersArray[i] === "9"
    ) {
      // lettersArray.splice(lettersArray[i], 1) ho provato così ma mi toglie sempre il quarto carattere della frase, non so dove sto sbagliando perchè con la forma sotto invece funziona correttamente
      lettersArray[i] = "";
    }
  }
  const sentence = lettersArray.join("");
  return sentence;
};

console.log(onlyLetters("today i ate 20 slices of bread"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// nel caso di gmail

const isThisAnEmail = (email) => console.log(email.endsWith("@gmail.com"));

isThisAnEmail("mario.rossi@gmail.com");

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  let date = new Date();
  dateNumber = date.getDay();
  switch (dateNumber) {
    case 0:
      return "Domenica";
      break;
    case 1:
      return "Lunedì";
      break;
    case 2:
      return "Martedì";
      break;
    case 3:
      return "Mercoledì";
      break;
    case 4:
      return "Giovedì";
      break;
    case 5:
      return "Venerdì";
      break;
    case 6:
      return "Sabato";
      break;
  }
};

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (n) => {
  const values = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let rolled = dice();
    sum += rolled;
    values.push(rolled);
  }

  console.log(sum);
  return values;
};

console.log(rollTheDices(7));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (userdate) => {
  let date = new Date(userdate);
  let now = new Date();

  let difference = now.getTime() - date.getTime();
  let differenceDays = difference / (1000 * 3600 * 24);
  return differenceDays;
};

console.log("sono trascorsi " + howManyDays("12/7/2023") + " giorni");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (userdate) => {
  let now = new Date();
  let birthday = new Date(userdate);

  const actualMonth = now.getMonth();
  const actualDay = now.getDate();

  const birthdayMonth = birthday.getMonth();
  const birthdayDay = birthday.getDate();

  if (actualDay === birthdayDay && actualMonth === birthdayMonth) {
    console.log("is today my birthday?", true);
  } else {
    console.log("is today my birthday?", false);
  }
};

isTodayMyBirthday("12/7/2002");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// Ho inteso che non si deve riferire all'array movies

const deleteProp = function (obj, str) {
  delete obj.str;
  return obj;
};

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = () => {
  let newest = movies[0];
  for (let i = 0; i < movies.length; i++) {
    if (newest.Year < movies[i].Year) {
      newest = movies[i];
    }
  }
  return newest;
};

console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = () => movies.length;

console.log("I film sono:", countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
  const years = [];
  for (let i = 0; i < movies.length; i++) {
    years.push(movies[i].Year);
  }
  return years;
};

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
  const previousAge = movies.filter((movie) => {
    return parseInt(movie.Year) < 2000;
  });
  return previousAge;
};

console.log("I film del millenio precedente sono:", onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  const yearsSum = movies.reduce((acc, value) => {
    return (acc += parseInt(value.Year));
  }, 0);

  return yearsSum;
};

console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (string) => {
  const titleSearch = movies.filter((movie) => {
    return movie.Title.toLocaleLowerCase().includes(string);
  });
  return titleSearch;
};

console.log(searchByTitle("avenger"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (string) => {
  const match = [];
  const unmatch = [];
  movies.forEach((movie) => {
    if (movie.Title.toLocaleLowerCase().includes(string)) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  });
  console.log("Film che contengono la stringa:", match);
  console.log("Film che non contengono la stringa", unmatch);
};

searchAndDivide("endgame");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// Faccio una copia dell'array per non alterare l'originale

const movies2 = [...movies];

const removeIndex = (index) => {
  if (index <= movies2.length && index > 0) {
    movies2.splice(index - 1, 1);
    return movies2;
  } else return "Il numero deve essere compreso tra 1 e 14";
};

console.log(removeIndex(14));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const containerFinder = () => {
  const idContainer = document.getElementById("container");
  return idContainer;
};

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const tdFinder = () => {
  const tdArray = document.getElementsByTagName("td");
  return tdArray;
};

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTd = () => {
  tdArray.forEach((td) => {
    console.log(td.innerText);
  });
};

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const backgroundRed = () => {
  aArray = document.getElementsByTagName("a");
  const aRed = aArray.forEach((a) => {
    a.classList.add("background-red"); // Ho supposto che ci fosse una classe CSS già creata per lo scopo (.background-red)
  });
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addLi = (string) => {
  const list = document.getElementById("myList");
  const newLi = document.createElement("li");
  newLi.innerText = string;
  list.appendChild(newLi);
};

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const clearList = () => {
  const list = document.getElementById("myList");
  list.innerHTML = ``;
};

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addTrClass = () => {
  trArray = document.getElementsByTagName("tr");
  trArray.forEach((tr) => {
    tr.classList.add("test");
  });
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      document.write("*");
    }
    document.write("</br>");
  }
};

halfTree(7);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

// Ho considerato 0 e 1 come numeri non primi
// Il metodo di verifica si basa sul fatto che se n = a * b  e  n = sqrt(n)*sqrt(n) , allora a e b non possono essere entrambi maggiori di sqrt(n), quindi eseguo il controllo solo su uno di essi.

const isItPrime = (num) => {
  for (let i = 2, square = Math.sqrt(num); i <= square; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

console.log(isItPrime(37));
