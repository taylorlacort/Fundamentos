function FirstFactorial(num) { 

    let fac = 1;
    for (let i = 2; i <= num; i++) {
      fac *= i;
    }
     
    return fac;
  }
   
         console.log(FirstFactorial(4))  