const permutate ={};

permutate.call = function(arr,selection,results,index){
  if(index === undefined){
    index = 0;
  }

  if(index === selection.length){
    var result = new Array(selection.length);
    for(var i=0;i<selection.length;i++){
      result[i]=arr[selection[i]];
    }
    results.push(result);
  } else {
    for(var i=0;i<arr.length;i++){
      var found = false;
      for(var j=0;j<index;j++){
        if(i===selection[j]){
          found=true;
          break;
        }
      }
      if(!found){
        selection[index]=i;
        this.call(arr,selection,results,index+1);
      }
    }
  }
}

permutate.print=function(results){
  for(var i=0;i<results.length;i++){
    var result = results[i];
    var printout = "";
    for(var j=0;j<result.length;j++)
      printout+=result[j]+" ";
    console.log(printout);
  }
}

var arr = ['A','B','C','D'];
var selection = new Array(2);
var results = new Array();

permutate.call(arr,selection,results);
console.log(`results.length = ${results.length}`);
permutate.print(results);
