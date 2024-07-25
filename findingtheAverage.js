    //   Finding The Average

// exam1 %30 , exam2 %30, final exam % 40

let exam1 = Number(prompt("Enter your exam1 grade :"));
let exam2 = Number(prompt("Enter your exam2 grade :"));
let finalExam = Number(prompt("Enter your final exam grade:"));

let average = (0.3 * exam1) + ( 0.3 * exam2) + (0.4 * finalExam);

if(average >= 50) 
{
    alert("successful, congratulations");
}
else
{
    alert("unsuccessful");
}