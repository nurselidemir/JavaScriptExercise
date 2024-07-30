   /* Armstrong number
   An Armstrong number is a number that is equal to the sum of its
own digits each raised to the power of the number of digits.
   */

let number  = prompt("enter the number:");
let sum = 0;
for(let i = 0 ; i < number.length ; i++)
  {
    let value = Number(number.charAt(i));
     sum += value * value * value;
     
  }
  if(number == sum )
  {
    alert("this number is an Armstrong number");
  }
  else
  {     
    alert("this number is not an Armstorng number");
  }