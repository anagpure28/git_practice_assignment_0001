//Program Starts

function prime(num){

  let factors =0;
  for(let i=1;i<=num;i++){
     if(num%i==0){
         factors++;
     }
  }
  if(factors == 2){
      return true;
   }else{
      return false;
   }
}

let ans = prime(13);
if(ans == true){
   console.log(ans,"is a Prime Number");
}else{
   console.log(ans,"is not a Prime Number");
}

//Program Ends
