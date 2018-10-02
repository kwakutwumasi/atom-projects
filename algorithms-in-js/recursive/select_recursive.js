const select_recursive = {};

select_recursive.call=function(arr,selections,results,duplicate,index){
  if(index === undefined)
    index = 0;

  if(index===selections.length){
    result = new Array(selections.length);
    for(var i=0;i<selections.length;i++)
      result[i]=arr[selections[i]];

    results.push(result);
  } else {
    var start = index>0?selections[index-1]+(!duplicate?1:0):0;

    for(var i=start;i<arr.length;i++){
      selections[index]=i;
      this.call(arr,selections,results,duplicate,index+1);
    }
  }
}

select_recursive.print=function(results){
  for(var i=0;i<results.length;i++){
    var result = results[i];
    var printout = "";
    for(var j=0;j<result.length;j++)
      printout+=result[j]+" ";
    console.log(printout);
  }
}

var arr = ['A','B'];
var selections = new Array(4);
var results = new Array();
console.log("With duplicates");
select_recursive.call(arr,selections,results,true);
console.log(`results.length = ${results.length}`);
select_recursive.print(results);
results = new Array();
console.log("Without duplicates");
select_recursive.call(arr,selections,results,false);
console.log(`results.length = ${results.length}`);
select_recursive.print(results);
