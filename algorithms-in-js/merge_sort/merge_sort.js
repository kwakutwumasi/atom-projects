const merge_sort={};

merge_sort.executeOn=function(arr, first, last, arr2){
  var start = first!=undefined? first:0;
  var end = last!=undefined?last:arr.length-1;
  var temp = arr2!=undefined?arr2:new Array(arr.length);

  if(start>=end)
    return;

  var midpoint = (start+end)/2;
  this.executeOn(arr,start,midpoint,temp);
  this.executeOn(arr,midpoint+1,end,temp);

  var left = start;
  var right = midpoint + 1;
  var pointer = left;
  while(left<=midpoint && right<=end){
    if(arr[left]<=arr[right]){
      temp[pointer++]=arr[left++];
    } else {
      temp[pointer++]=arr[right++];
    }
  }
  for(var i=left;i<=midpoint;i++)
    temp[pointer++]=arr[i];
  for(var i=right;i<=end;i++)
    temp[pointer++]=arr[i];
  for(var i=start;i<=end;i++)
    arr[i]=temp[i];
}

merge_sort.printArray=function(arr){
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
merge_sort.executeOn(arr);
merge_sort.printArray(arr);
