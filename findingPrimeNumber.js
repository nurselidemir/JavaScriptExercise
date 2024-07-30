      // Finding Prime Number 

let number = Number(prompt("enter the number:"));
let isPrime = true ;

    if (number <= 1)
    {
        alert("the number is not prime")
    }
    else if(number ==2)
    {
        alert("the number is prime")
    }
    else
    {
         for (i=2 ; i <= Math.floor(number/2) ; i++)
       {
         if(number % i == 0) 
           {
            isPrime = false ;
            break;
           }
        }
        
    if (isPrime)
    {
        alert("the number is prime");
    }
    else 
    {
        alert("the number is not prime");
    }
     
 }
