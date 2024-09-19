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