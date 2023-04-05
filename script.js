//  DANE WEJŚCIOWE
const people = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
  },
  {
    firstName: "Mateo",
    lastName: "Loza",
  },
  {
    firstName: "Ja",
    lastName: "Zi",
  },
];

/* 
    1. Napisz funkcję mapującą, która utworzy klucz(właściwość) nickname na każdej osobie w tablicy w następujący sposób:
    a) pobierze 3 pierwsze litery imienia, odwróci ich kolejność i zapisze do zmiennej
    //onazoL
    //Lozano
    b) pobierze 3 ostatnie litery nazwiska, zamieni kolejnością pierwszą i ostatnią i dołączy powstały string do poprzedniego
    c*) Zmieni wielkość liter w taki sposób, żeby powstały nick zaczynał się wielką literą i nie miał żadnych wielkich liter poza 1.
    d) Jeżeli liczba znaków w imieniu bądź nazwisku jest mniejsza niż 3, nickname będzie odpowiednio krótszy 
    e) rozważcie wszystkie skrajne przypadki, ponieważ Waszą funkcję mapującą wrzucimy do testów na platformie
    e) Have fun :)
    Na przykład:
    Dla osoby: 
    {
        firstName: 'Bartolomeo',
        lastName: 'Lozano'
    }
    powinniśmy uzyskać nickname Rabona
    Hints:
    - mając zmienną name = 'Bart'
      name.split('') => ['B', 'a', 'r', 't'] - tworzymy tablicę liter ze stringa
      ['B', 'a', 'r', 't'].join('') => 'Bart' - odwracamy ten proces
    - Na tablicy możemy użyć metody reverse()
    - Na stringach czy pojedynczych literkach możemy używać metod toLowerCase(), toUpperCase()
*/

const peopleMapFunction = (people) => {
  //1a)

  people.map(
    (person) =>
      (person.nickName = person.firstName
        .slice(0, 3)
        .split("")
        .reverse()
        .join(""))
  );

  //1b)
  people.map((person) => {
    const threeLastNameChars = person.lastName.slice(-3);
    return (person.nickName =
      person.nickName +
      threeLastNameChars
        .replace(
          threeLastNameChars[0],
          threeLastNameChars[threeLastNameChars.length - 1]
        )
        .replace(
          threeLastNameChars[threeLastNameChars.length - 1],
          threeLastNameChars[0]
        )
        .split("")
        .reverse()
        .join(""));
  });

  //1c)

  people.map(
    (person) =>
      (person.nickName =
        person.nickName.slice(0, 1).toUpperCase() +
        person.nickName.slice(1).toLowerCase())
  );

  return people;
};

console.log(peopleMapFunction(people));

//  DANE WEJŚCIOWE
const people2 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
  },
];

/* 
    2. 
    a) Do każdego obiektu dodaj funkcję introduceYourself, która za pomocą słówka this wyświetli w konsoli tekst powitalny.
    Oczywiście tekst powinien wyświetlić się dopiero po wywołaniu funkcji.
    Dla powyższego przykładu tekst powinien wyglądać w następujący sposób:
    "Cześć jestem Bartolomeo Lozano, ale w szkole mówią na mnie [Rabona]"
    Natomiast wywołanie funkcji: people[0].introduceYourself()
    Obiekt z przykładu powinien wyglądać w ten sposób
    {
        firstName: "Bartolomeo",
        lastName: "Lozano",
        nickname: "Rabona",
        introduceYourself: // tutaj ma się znajdować funkcja
    },
    b) za pomocą pętli forEach, wywołaj funkcję powitalną dla każdego elementu tablicy. W rezultacie na ekranie powinien
    pojawić się tekst powitalny dla każdej osoby w tablicy
    Hints:
    - nie używaj w tym zadaniu funkcji strzałkowej, ponieważ słówko this Ci nie zadziała i nie będziesz miał(a)
    dostępu do this.firstName lastName i nickname
    - postaraj się zdefiniować funkcję powitalną tylko raz (nie rób tego w pętli, ani funkcji map)
    
*/

const introduceYourself = function () {
  console.log(
    `Cześć, jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]`
  );
};

people2.map((person) => (person.introduceYourself = introduceYourself));

people2.forEach((person) => person.introduceYourself());

//  DANE WEJŚCIOWE
const people3 = [
  {
    firstName: "Bartolomeo",
    lastName: "Lozano",
    nickname: "Rabona",
    introduceYourself: "", // funkcja zamiast pustego stringa
  },
  { firstName: "Kuba", lastName: "Zimny", nickname: "" },
];

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];

/*
    3. 
    a) Dodaj do każdego obiektu funkcję getFavouriteColor
    b) funkcja ma przyjmować jeden parametr typu number z zakresu 1 - 30
    c) jeżeli podany parametr jest poza zakresem, powinien wyświetlić się odpowiedni komunikat
        - podałeś za małą liczbę, liczba nie może być mniejsza niż 1
        - podałeś za dużą liczbę, liczba nie może być większa niż 30
    d) w przypadku wywołania funkcji bez parametru, powinniśmy ustawić domyślną wartość na 5
    e) funkcja powinna zsumować wszystkie litery imienia, nazwiska i przezwiska, 
    odjąć od tej sumy liczbę wprowadzoną w parametrze, a następnie za pomocą działania modulo (%) względem długości tablicy kolorów
    wyznaczyć index
    f) za pomocą indexu funkcja powinna wyciągnąć odpowiedni kolor z tablicy i wyświetlić go w konsoli.
    Dla powyższego przykładu i liczby 5 wprowadzonej w parametrze, powinniśmy uzyskać wynik:
    (22 - 5) % 6 = 5
    console.log("orange")
    Hints
    - jeżeli po odjęciu parametru funkcji od sumy liter uzyskacie wartośc ujemną, możecie użyć metody z biblioteki Math, 
    Math.abs(-20), która zamieni liczbę na wartość absolutną, czyli dodatnią
    - w funkcji musicie użyć słówka this, parametru i tablicy, która jest na zewnątrz, tablica z kolorami może mieć
    dowoloną ilość kolorów
*/

const getFavouriteColor = function (number) {
  if (number < 1) {
    console.log("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1");
  } else if (number > 30) {
    console.log("Podałeś za dużą liczbę, liczba nie może być większa niż 30");
  } else if (number === undefined) {
    number = 5;
  }

  const sumOfNameNickNameAndLastName =
    this.firstName.length + this.lastName.length + this.nickname.length;

  const favouriteColorNumber =
    Math.abs(sumOfNameNickNameAndLastName - number) % colors.length;

  return console.log(colors[favouriteColorNumber]);
};

people3.map((person) => (person.introduceYourself = introduceYourself));

people3.map((person) => (person.getFavouriteColor = getFavouriteColor));

people3.forEach((person) => person.getFavouriteColor());

/*
    4. Napisz funkcję analogiczną do funkcji z zadania 3, ale nie dodawaj jej w obiekcie.
    a) funkcja powinna przyjąć 2 parametry (obiekt osoby i liczbę z zakresu 1 - 30)
    b) funkcja powinna wykonać dokładnie takie samo działanie jak poprzednia
    c) Za pomocą pętli for of przeiteruj po wszystkich osobach z tablicy i wyświetl ich ulubione kolory
*/

const getFavouriteColor2 = function (person, number) {
  if (number < 1) {
    console.log("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1");
  } else if (number > 30) {
    console.log("Podałeś za dużą liczbę, liczba nie może być większa niż 30");
  } else if (number === undefined) {
    number = 5;
  }

  const sumOfNameNickNameAndLastName =
    person.firstName.length + person.lastName.length + person.nickname.length;

  const favouriteColorNumber =
    Math.abs(sumOfNameNickNameAndLastName - number) % colors.length;

  return console.log(colors[favouriteColorNumber]);
};

for (let person of people3) {
  getFavouriteColor2(person);
}

/*
    5. Zadanie polega na użyciu .filter() .map() .reduce w wersji łańcuchowej,
    czyli nie twórz nowych tablic w momencie wykonanie jednej z powyższych metod, połącz wykonanie ze sobą w jeden 
    "łańcuch" tzn. const wynik = arr.filter().map().reduce()
    a) Przefiltruj tablicę w taki sposób, aby zostały w niej osoby,
    których imię kończy się na literę 'a' lub 'k' 
    i nazwisko ma więcej znaków niż 6 
    i nick zawiera w sobie przynajmniej jedną literę a
    b) do powyższego warunku dodaj "furtkę" w postaci parametru isElite. Zmienna isElite powinna być obliczona
    za pomocą generatora liczb pseudolosowych Math.random(). Za pomocą tego generatora wylosujcie liczbę z zakresu 0 - 100.
    Jeżeli wartość losowej liczby będzie liczbą pierwszą lub będzie podzielna przez 3 i 5, ustawcie isElite na true, w pozostałych przypadkach
    isElite powinno być ustawione na false
    c) jeżeli zmienna isElite ma wartość true, nie bierzcie pod uwagę warunku z punktu a przy filtracji
    d) za pomocą funkcji map i for in odwróccie wartości i klucze w obiekcie, usuwając przy tym funkcje
    Przykład
    INPUT
    {
        firstName: "Bartolomeo",
        lastName: "Lozano",
        nickname: "Rabona",
        introduceYourself: '' // funkcja zamiast pustego stringa
        getFavouriteColor: '' // funkcja zamiast pustego stringa
    },
    OUTPUT
    {
        Bartolomeo: "firstName",
        Lozano: "lastName",
        Rabona: "nickname",
    },
    e) zredukuj tablicę obiektów do pojedynczego obiektu, który będzie zawierał wszystkie klucze i wartości
    wszystkich obiektów z tablicy, dzięki temu, że w punkcie d) odwrócilismy klucze z wartościami, nie będzie 
    z tym problemu :)
    f) posortuj tablicę alfabetycznie
*/

const isPrimeNumber = (number) => {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};

const randomNumber = Math.floor(Math.random() * (100 - 0 + 1) + 0);

let isElit;

if (
  isPrimeNumber(randomNumber) ||
  (randomNumber % 3 === 0 && randomNumber % 5 === 0)
) {
  isElit = true;
} else {
  isElit = false;
}

if (isElit === false) {
  people3
    .filter(
      (person) =>
        person.firstName[person.firstName.length - 1] === "a" ||
        person.firstName[person.firstName.length - 1] === "k"
    )
    .filter((person) => person.lastName.length > 6)
    .filter((person) => person.nickname.toLowerCase().includes("a"));
}

/*
    *6. Currying function
    a) Napisz taką funkcję mnożącą 2 liczby, aby możliwe były następujące wywołania:
    - multi(5)(6)
    - const multiplyBySix = multi(6)
      multiplyBySix(10)

    b) Analogicznie napisz funkcję, która mnoży 4 liczby i możliwe jest wywołanie
    - multi(4)(5)(6)(10)
    Hints:
    - funkcja może zwracać inne funkcje
    - funkcja może korzystać ze zmiennych i parametrów funkcji zewnętrznych (czyli tych w których się znajduje)
*/

let multi = (x) => (y) => x * y;

console.log(multi(5)(6));

const multiplyBySix = multi(6);

console.log(multiplyBySix(10));

multi = (a) => (b) => (c) => (d) => a * b * c * d;

console.log(multi(1)(5)(2)(4));

/*
    **7. Rekurencja
     a) Mając zagnieżdżony obiekt, wyciągnij z niego wszystkie imiona i dodaj do tablicy
     ***b) Jeżeli osoba ma więcej niż jedno imię, te imiona powinny znajdować się w jednym stringu w tablicy
     Na przykład 'Kamil Bartek'
    INPUT:
*/
const nestedObject = {
  name: "Kamil",
  children: [
    {
      name: "Zosia",
    },
    {
      name: "Krysia",
      name2: "Barbara",
      children: [
        {
          name: "Basia",
          children: [
            {
              name: "Monika",
              name2: "Viola",
              children: [
                {
                  name: "Mateusz",
                },
                {
                  name: "Sebastian",
                  name2: "August",
                  name3: "Franciszek",
                  children: [
                    { name: "Alex" },
                    { name: "Stasio" },
                    {
                      name: "Paulina",
                      children: [{ name: "Kuba" }, { name: "Kacper" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// const getTheNamesFromObject = (object) => {
//   let names = [];
//   for (prop in object) {
//     if (typeof object[prop] === "object") {
//       getTheNamesFromObject(object[prop]);
//     } else {
//       if (prop === "name" || prop === "name2" || prop === "name3") {
//         names.push(object[prop]);
//       }
//     }
//   }
//   return names;
// };

const getTheNamesFromObject = (obj) => {
  const names = [];

  const getTheName = (obj) => {
    return Object.keys(obj).forEach((key) => {
      return typeof obj[key] === "object"
        ? getTheName(obj[key])
        : typeof obj[key] === "function"
        ? names.push(obj[key]())
        : names.push(obj[key]);
    });
  };

  getTheName(obj);

  return names;
};

console.log(getTheNamesFromObject(nestedObject));
