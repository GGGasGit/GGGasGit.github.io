
/*
1) Összegzés
összeg = 0 (gyűjtőváltozó, akkumulátor)
CIKLUS AMÍG van még szám, ADDIG
	szám = következő elem
	összeg = összeg + szám
CIKLUS VÉGE
*/

sum = 0
for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
}

/*
2) Számlálás (bizonyos feltételeknek megfelelő elemek darabszáma)
darab = 0
CIKLUS AMÍG van még szám, ADDIG
	szám = következő elem
	HA igaz a feltétel a számra, AKKOR
		darab = darab + 1
	FELTÉTEL VÉGE	
CIKLUS VÉGE
*/

let count = 0
for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 == 0) {                 /*páros számokat kerestem ki*/
        count++;
    }
}

/*
3) Szélsőérték
legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
	szám = következő szám
	HA a szám > legnagyobb, AKKOR
		legnagyobb = szám
	FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let maximum = arguments[0];
for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maximum) {
        maximum = arguments[i];
    }
}

let minimum = arguments[0];
for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < minimum) {
        minimum = arguments[i];
    }
}

/*
4) Tartalmazás eldöntésének algoritmusa (keresett elem egy tömbben)
találat = HAMIS
CIKLUS AMÍG van elem ÉS találat = HAMIS (NEM találat), ADDIG
	szám = következő elem
	HA igaz a feltétel a számra, AKKOR
		találat = IGAZ
	FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let contains = false
for (let i = 0; i < arguments.length && contains == false; i++) {  /*contains = false helyett írhatom, hogy !contains*/
    if (arguments[i] == 5) {                 /*Itt arra vagyok kíváncsi, hogy az 5-öt tartalmazza-e a tömb*/
        contains = true;
    }
}

/*Itt azt vizsgálom meg, hogy a tömb összes eleme pozitív-e*/

let all = true;
for (let i = 0; i < arguments.length && all; i++) {
  if (arguments[i] <= 0) {
    all = false;
  }
}

/*Átlagszámítás
Elvégzem az összegzést
Elosztom a tömbben lévő darabok számával*/

let average = 0
let sum = 0
for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
}
average = sum / arguments.length