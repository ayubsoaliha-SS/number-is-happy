function sumofsquares(n){
    let sum = 0;
    while(n>0 ){
      let digit = n % 10;
      sum += digit*digit;
      n=Math.floor(n/10)
    }
    return sum;
  }
  function isHappy(hap){
    let num={};
    while(hap !==1 && !num[hap]){
      num[hap] = true;
      hap = sumofsquares(hap);
    }
    return hap === 1;
  }
  console.log(isHappy())