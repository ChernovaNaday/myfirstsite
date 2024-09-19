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

// let rectangle = {
//   A: null,
//   B: null,
//   C: null,
//   D: null,
// };

// function set_rectangle(o) {
// A = prompt("Введите координаты первой точки (через запятую):");
// o.A = A;
// B = prompt("Введите координаты второй точки (через запятую):");
// o.B = B;
// C = prompt("Введите координаты третьей точки (через запятую):");
// o.C = C;
// D = prompt("Введите координаты четвертой точки (через запятую):");
// o.D = D;
// }

// function rectangleInfo(o){
//     alert(
//       `Точка A: (${o.A})\nТочка B (${o.B})\nТочка C (${o.C})\nТочка D (${o.D})`
//     );
// }
// function getWidth(o){
//     alert(`ширина прямоугольника: ${Number(o.B[0]) - Number(o.A[0])}`);
// }
// function getHeight(o) {
//   alert(`высота прямоугольника: ${Number(o.C[2]) - Number(o.D[2])}`);
// }

// function getArea(o) {
//   alert(
//     `площадь равна: ${
//       Number(o.B[0]) - Number(o.A[0]) * Number(o.A[0]) - Number(o.D[0])
//     }`
//   );
// }

// $(document).ready(function () {
// $("p").click(function () {
//   $(this).hide();
// });
// })

// $(document).ready(function () {
// $("button").click(function () {
//   $("p").toggle();
// });
// })

// $(document).ready(function () {
// $("p").text("Текст установленный из jQuery");
// $("p").html("<h3>Текст установленный из jQuery<h3/>");
// $("input").val("Значение поля, установленое из jQuery");
// $("p").attr("style", "font-size: 24px");
// })
/*
$("p").append("Какой то текст") - добавление значение в конец тега
$("p").prepend("какой то текст") - добавление значения в начале тега
$("p").after("div")
$("p").defore("div")
 $("p").remove() - удаление дочернего элемента(или указанного в методе)
 $("p").empty() - удаляет все дочерние элементы(пустой)
*/
$(document).ready(function () {
      $.ajax({
       url: "https://jsonplaceholder.typicode.com/todos/5",
       type: "GET", 
       success: function (data) {
        for (key in data) {
          $("#ajaxPicture").append(key + ":" + data[key] + "<br>");
        }
        },
        error: function (error) {
          $("#ajaxPicture").text(error)
        }
        
         
      }) 
});