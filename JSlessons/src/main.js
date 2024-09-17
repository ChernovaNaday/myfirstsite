// alert("Hello from JavaScript!")
// confirm("Согласны, узнали?")

// console-объект.
// log()-метод, выводит специальный отдел в браузере,специальную информацию
// alert - окно для уведомлений
/*
undefined - неинициализированные значения
null - флаг отсутствия значений или нулевое значение
bool (Boolean) - логический тип данных, frue или false (правда или ложь, есть или нет)
string(строка) - последовательность символов или символ, объединенные в структуру
number (цифры) - число любого вида, NaN (Not-a-Numbet), Infiniti (если надо описать бесконечность) +0 -0
object - представление объекта языка JavaScript

Декримент:
++x или x++ <=> x+1

Инкримент:
--x или x-- <=> x-1
*/


// let ans;
// ans = prompt("Укажите ваше имя");
// alert("Ваше имя -" + ans);

// let ans;
// ans = prompt("Введите код операции:");
// if (ans== "6453") {
//     alert("Молодец! Правильный ответ");
// }else{
//     alert("Код неверный! Не молодец");
// }

/*
if (condition)условие{
    statement;
}
else{
    other statement;
}*/

// let x;
// x = prompt("Введите число:");
// Number(x);
// alert("Ваше число в квадрате: " + x ** 2);

// let x;
// x = prompt("Введите число первое число:");
// x = Number(x);
// let y;
// y = prompt("Введите число второе число:");
// y = Number(y);
// let S;
// S = (x + y) / 2;
// alert("Ваше среднее арифметическое чисел: " + S); 

const mile = 0.621371;
let x;
x = prompt("Введите км");
x = Number(x);
alert("Мили: " + x * mile)

// let user = new Object();
// let user = {
//   name: "Vlad",
//   age: 27,
// };

// console.log(user.name);
// console.log(user["age"]);

// user.isAdmin = true
// delete user.age

// console.log(user);


// let fruit = prompt("Введите свой любимый фрукт:")
// let user = {
//     name: "Nadezchda",
//     surname: "Chernova",
//     age: 40,
//     city: "St-P",
//     alive: true,
//     [fruit]: "favourite",
// }
//    console.log(user.name);
// console.log(user["age"]);

// user.isAdmin = true
// delete user.age

// console.log(user); 

let rectangle = {
  A: null,
  B: null,
  C: null,
  D: null,
};

function set_rectangle(o) {
A = prompt("Введите координаты первой точки (через запятую):");
o.A = A;
B = prompt("Введите координаты второй точки (через запятую):");
o.B = B;
C = prompt("Введите координаты третьей точки (через запятую):");
o.C = C;
D = prompt("Введите координаты четвертой точки (через запятую):");
o.D = D;
}

function rectangleInfo(o){
    alert(
      `Точка A: (${o.A})\nТочка B (${o.B})\nТочка C (${o.C})\nТочка D (${o.D})`
    );
}
function getWidth(o){
    alert(`ширина прямоугольника: ${Number(o.B[0]) - Number(o.A[0])}`);
}
function getHeight(o) {
  alert(`высота прямоугольника: ${Number(o.C[2]) - Number(o.D[2])}`);
}

function getArea(o) {
  alert(
    `площадь равна: ${
      Number(o.B[0]) - Number(o.A[0]) * Number(o.A[0]) - Number(o.D[0])
    }`
  );
}
