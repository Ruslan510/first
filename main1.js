//Массивы

//arr[2] и arr[3] Добовляет в переменную.
/*var arr = ['Яблоко ','Груша','Лимон'];
arr[arr.length-0]='Кофе';
arr.unshift('Макароны');
console.log(arr.shift());*/

//Выводит на экран Object (arr[1].name)
/*var arr = ['Яблоко',{name: 'Вася'}];
alert(arr[1].name);*/

// pop Удаляет последний элимент тоесть Лимон.
/*var arr = ['Груша','Яблоко','Лимон'];
console.log(arr.pop());
console.log(arr);*/

//push добавляет елимент в конец массива.
/*var arr = ['Яблоко','Груша'];
arr.push('Лимон');
console.log(arr);*/

//Shift Удаляет из массива первый элемент и возвращает его
/*var arr = ['Яблоко','Груша','Лимон'];
console.log(arr.shift());*/

// unshift Добавляет элемент в начало массиваarr[3]= 'Киви';
/*arr.unshift('Персик');
console.log(arr);*/

/*var arr = ['Яблоко','Груша','Лимон'];
for (i = 0; i < arr.length; i++){
console.log(arr[i]);
}*/

//var arr = ['Яблоко','Груша','Лимон','goods' ];
//console.log(arr[3]);

/*var goods = ['Яблоко','Груша','Лимон','goods' ];
goods.push('Компьютор');
console.log(goods);*/

/*var styles = ['Джаз','Блюз'];
styles.push('Рок-н-Ролл');
styles[1] = 'Классик';
//alert(styles.shift());
//styles.unshift('Рэп','Регги');*/

//Метод split превращяает строку в миссив
//и делает отступ (', ') в alert
/*var name = 'Яблоко, Груша, Персик, Лимон';
var arr = name.split(', ');
for (i = 0; i < arr.length; i++){
	console.log('Ваше сообщение ' + arr[i]);
}*/

//split Разбивка по буквам ('')
/*var arr = 'Привет';
console.log(arr.split(''));*/


// Метод join, str = arr.join (;) склеивает массив
/*var arr = ['Яблоко', 'Груша', 'Персик', 'Лимон'];
var str = arr.join(';');
console.log(str);*/

//Повторяет окончание 'ик' 3 раза.
/*var arr = ['Яблоко', 'Груша', 'Персик', 'Лимон'];
var str = arr.join(';');
console.log(new Array(4).join('ик'));*/

//Метод splace удалять элементы, вставлять элементы,
//заменять элементы – по очереди и одновременно.

//arr.splice(1,1); удалит изучаю
/*var arr = ['Я', 'изучаю', 'Javascript'];
arr.splice(1, 1);
console.log(arr);*/

//Удалит с 0 по 3 и вставим Мы изучаем.
/*var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
arr.splice(0,3, 'Мы изучаем');
console.log(arr);*/

// Удалит "изучаю", "JavaScript"
/*var arr = ["Я", "сейчас", "изучаю", "JavaScript"];
var removed = arr.splice(0,2);
console.log(removed);*/



/*var arr = ["Я", "изучаю", "JavaScript"];
arr.splice(2,0,'Не навижу');
console.log(arr);*/

// Выводит четные числа 2 4 6 8 10
/*for(var i = 1; i < 10; i++){
	i += 1;
	alert(i);
}*/

/*var num;

do {
  num = prompt("Введите число больше 100?");
} while (num <= 100);*/

//Цыкл for in
/*var menu = {
	width: 100,
	height: 200,
	title: ' Menu '
};
for (var key in menu) {
	alert(" Ключ: " + key + " Значение: " + menu[key]);
}*/

/*var obj = {
	id: 1,
	age: 39,
	name: 'Иванов'
};
for (var key in obj) {
	console.log(key + ': ' + obj[key]);
}*/

//arr.sort Сортирует.
/*var arr = ['а','б','г','в','д'];

 arr.sort();
console.log(arr);*/

// reverse Сортирует в обратном порядке.
/*var arr = ['1','2','3','4'];
arr.reverse();
console.log(arr);*/

//concat Добавляет 3,4
/*var arr = ['1','2'];
var Newarr = arr.concat(3,4);
console.log(Newarr);*/

/*var arr = [1, 12, 2, 21, 3];
arr.sort();
console.log(arr);

arr.sort(function(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(arr);


var arr = [1, 12, 2, 21, 3];
arr.sort();
console.log(arr);

arr.sort(function(a, b) {
  return a - b;
});
console.log(arr);

//задание
var myArr = ['10','25','7','41'];
function findInArr(arr, el){
	var found = -1;
	for (i = 0; i < arr.length; i++){
		if(arr[i] === el){
			found = i;
			break;
		}
	}
return found;
}

console.log(myArr);*/



/*var myArray = [10,20,45,7,20,12];
var found = -1;
function findInArr(arr, el){
	for (var i = arr.length-1; i >= 0; --i) {
		if (arr[i] == el) {
			found = i;
			break;
		}
	}
	return found;
}

var found = findInArr(myArray, 20);
console.log(found);*/



// На уроке
/*var array = [10,20,45,7,12];
var found = findInArr(array, 45);

function findInArr(arr, el) {
	for (var i = 0; i < arr.length; i++) {
     	if (arr[i] === el) {
        	found = i;
        		break;
     }
  }
return found;
}

 console.log(found);*/
 /*var array = [6,7,5,3,8, -8,-5];
function number (arr) {
	var a = 0;
	for(i = 0; i < arr.length; i++){
		if(arr[i] < 0  ){
			a++;
		}
	}
	return a;
}
console.log(number(array));*/

/*function random(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}

var arr = [];
   for (var i = 0; i < 10; i++) {
     arr[i]=random(1, 100);
 }
 console.log(arr);

function creatArray(size)

function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}
/* task 1 */

/*function createArray(size) {
  var arr = [];
  for (var i = 0; i < size; i++) {
    arr.push( randomInteger(1, 100) );
  }
  return arr;
}
var myArray = createArray(10);
console.log(myArray);*/

/*function createTwoDimentionalArray(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    var innerArr = [];
    for (var j = 0; j < size; j++) {
      innerArr.push( randomInteger(1, 100) );
    }
    result.push(innerArr);
  }

  return result;
}
var arr = createTwoDimentionalArray(10);
// console.table(arr);*/

	/*function createTwoDimentionalArray(arr) {
   var array = [10,20,45,68,97,42,]

   for (var i = arr.length-1; i >= 0; i--) {

    for (var j = arr[i].length-1; j >= 0 ; j++) {
    }

}
var arr = createTwoDimentionalArray(2);
 console.log( arr[i][j] );*/
function createTwoDimentionalArray(size) {
 function randomInteger(min, max) {
  return Math.floor( min + Math.random() * (max + 1 - min) );
}
 var result = [];

  for (var i = 0; i < size; i++) {
    var innerArr = [];
    for (var j = 0; j < size; j++) {
      innerArr.push( randomInteger(1, 100) );
    }
    result.push(innerArr);
  }

  return result;
}
 var arr = createTwoDimentionalArray(5);
 console.table(arr);

 for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < arr[i].length; j++) {

        //console.log( arr[i][j] );
}
  }
for (var i = arr.length-1; i >= 0; i--){
  for (var j = arr[i].length-1; j >= 0; j--){
   //console.log(arr [i][j]);
  }
}


function perimeter(arr) {
  var result = [];

  var left = [];
  for(var i = 0; i < arr.length ; i++) left.push(arr[i][0]);

  var bottom = [];
  for(var i = 1 ; i < arr.length; i++) bottom.push(arr[arr.length-1][i]);


   var max =[];



  for ( var i = 0; i < arr.length; i++);

  for ( var j = 0; j < arr.length; j++);



        max.push(arr i==j);




   result =  left.concat(bottom,max);

  return result;
}


var r = perimeter(arr);
console.log('perimeter', r);