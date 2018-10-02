var raiseToThePowerOf = function(a,b){
  var arr=new Array(b)
  arr[1] = a
  var mul = a
  var last = 0
  for(var i=2; i<=b; i*=2){
    arr[i] = mul * mul
    mul = arr[i]
    last = i
  }

  var sel = new Array(1)
  sel[0] = last
  var sum = last;
  for(var i=last/2;i>=1;i/=2){
    if(b-(sum+i)>=0){
      sel.push(i)
      sum+=i
    }
  }

  var pow = 1;
  for (var i=0;i<sel.length;i++) {
    pow*=arr[sel[i]]
  }

  return pow
}

console.log("2^2="+raiseToThePowerOf(2,2));
console.log("4^2="+raiseToThePowerOf(4,2));
console.log("7^7="+raiseToThePowerOf(7,7));
console.log("100^4="+raiseToThePowerOf(100,4));
console.log("70^9="+raiseToThePowerOf(70,9));
