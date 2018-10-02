const quick_sort = {};

quick_sort.executeOn=function(arr, first, last){
  var start = first!=undefined? first:0;
  var end = last!=undefined?last:arr.length-1;

  if(start>=end)
    return;

  var divider = arr[start];
  var lo = start;
  var hi = end;
  while(true){
    while(arr[hi]>=divider){
      hi-=1;
      if(hi<=lo)
        break;
    }
    if(hi<=lo){
      arr[lo]=divider;
      break;
    }
    arr[lo]=arr[hi]
    lo+=1;
    while(arr[lo]<divider){
      lo+=1;
      if(lo>=hi)
        break;
    }
    if(lo>=hi){
      arr[hi]=divider;
      break;
    }
    arr[hi]=arr[lo];
  }
  this.executeOn(arr,start,lo-1);
  this.executeOn(arr,lo+1,end);
}

quick_sort.printArray=function(arr){
  var printout = "[";
  for(var i=0;i<arr.length;i++){
    if(i>0)
      printout+=",";
    printout+=arr[i];
  }
  printout += "]";
  console.log(printout);
}

var arr = [4,2,7,5,3,9,6,5,1];
quick_sort.executeOn(arr);
quick_sort.printArray(arr);
