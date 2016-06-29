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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Против часовой~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function perimeter(arr) {


  var result = [];



  var left = [];

  for(var i=0;i<arr.length;i++) left.push(arr[i][0]);

  var bottom = [];

 for(var i  = 1; i < arr.length; i++)  bottom.push(arr[arr.length-1][i]);

  var right = [];
  for(var i = arr.length - 2; i >= 0; i--) right.push(arr[i][arr.length-1]);

  var top = [];
  for(var i = arr.length - 2; i>=0; i--) top.push(arr[0][i]);

 result =  left.concat(bottom,right,top);

  return result;
  }
var r = perimeter(arr);
console.log('perimeter', r);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~По часовой диагонали~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//



/*var result = [];

  var top = [];
  for(var i = 0 ; i < arr.length; i++) top.push(arr [0] [i]);

  var right = [];
  for(var i = 1; i < arr.length ; i++) right.push(arr[i][arr.length-1] );

   var max =[];
   var i = arr.length-2;
   var j = arr.length-2;

 for ( ; i >= 0, j >= 0; i--, j--) {



        max.push(arr[i][j]);



}

   result =  top.concat(right,max);

  return result;
  }
var r = perimeter(arr);
console.log('perimeter', r);*/

