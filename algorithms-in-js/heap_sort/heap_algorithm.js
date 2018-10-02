const heap={};

heap.sort = function(arr){
  this.make(arr);
  for(var index = arr.length-1; index >0 ; index--){
    var temp = arr[index];
    arr[index] = arr[0];
    arr[0]=temp;
    this.make(arr,index);
  }
}

heap.make = function(arr, last) {
  var end = last?last:arr.length;
  for(var index = 0; index < end; index++){
    var pointer = index;
    while (pointer!=0) {
      var parent = Math.floor((pointer - 1)/2);
      if(arr[pointer]<=arr[parent]){
        break;
      }

      var temp = arr[pointer];
      arr[pointer] = arr[parent];
      arr[parent] = temp;
      pointer = parent;
    }
  }
}

heap.height = function(arr,last){
    var end = last?last:arr.length;
    var sq = 0;
    var height = 1;
    var nodeheight = Math.pow(2,sq++);
    var remainder = end - nodeheight;
    while(remainder>0){
      ++height;
      nodeheight = Math.pow(2,sq++);
      remainder-=nodeheight;
    }
    return height;
}

heap.print = function(arr,last){
  var end = last?last:arr.length;
  var height = this.height(arr,last);
  var printout = "";
  for(var i=0;i<height;i++){
    //print spaces for this height
    for(var h=0;h<(height-1-i)*2;h++){
      printout+=" ";
    }
    var subarr = this.nodes(arr,i,last);
    var left = true;
    for(var j=0; j<subarr.length;j++){
      for(var h=0;h<height-i-3;h++){
        printout+=" ";
      }
      if(!left)
        printout+=" ";

      printout+=subarr[j];
      printout+=" ";
      if(left){
        for(var h=0;h<height-i;h++){
          printout+=" ";
        }
      }
      left=!left;
    }
    printout+="\n";
    for(var h=0;h<(height-1-i)*2-1;h++){
      printout+=" ";
    }
    var base = Math.pow(2,i)-1;
    left = true;
    for(var k=0; k<subarr.length;k++){
      if(((base+k)*2)+1<end)
        printout+="/ "

      for(var h=0;h<height-i-2;h++){
        printout+=" ";
      }

      if(((base+k)*2)+2<end)
        printout+="\\  ";
    }
    printout+="\n";
  }
  console.log(printout);
}

heap.printArray=function(arr){
  var printout = "[";
  for(var i=0;i<arr.length;i++){
    if(i>0)
      printout+=",";
    printout+=arr[i];
  }
  printout += "]";
  console.log(printout);
}

heap.nodes = function(arr,level,last){
  var end = last?last:arr.length;
  var subarr = new Array();
  if(level === 0)
    subarr.push(arr[0]);
  else {
    var count = Math.pow(2,level);
    var start = count-1;
    for(var index = start; index<end
        && index < start+count; index++){
      subarr.push(arr[index]);
    }
  }
  return subarr;
}

var arr = [12,32,1,3,2,8,3,9,10];
heap.sort(arr);
heap.printArray(arr);
heap.print(arr);
