/* Turkish  4 point
   Maths    4 point
   Social Sciences  4 point
   Science  4 point

OSYM gives 100 points

*/

let turkishCorrect , turkishWrong = 0;
let mathsCorrect , mathsWrong = 0;
let socialCorrect , socialWrong = 0;
let scienceCorrect , scienceWrong = 0;
let score ;

let newLine = "\r\n";
let message = " 1 - Calculate your score" + newLine 
            + " 2 - Exit" ;
            

let selection = prompt(message);

switch(selection)
{
    case "1" :
        turkishCorrect = Number(prompt("Please enter the number of correct answers in the Turkish class"));
        turkishWrong =  Number(prompt("Please enter the number of incorrect answers in the Turkish class"));
        
        mathsCorrect = Number(prompt("Please enter the number of correct answers in the maths class"));
        mathsWrong = Number(prompt("Please enter the number of incorrect answers in the maths class"));

        socialCorrect = Number(prompt("Please enter the number of correct answers in the social sciences class"));
        socialWrong = Number(prompt("Please enter the number of incorrect answers in the social sciences class"));

        scienceCorrect = Number(prompt("Please enter the number of correct answers in the science class"));
        scienceWrong = Number(prompt("Please enter the number of incorrect answers in the science class"));
        
        totalCorrect = turkishCorrect + mathsCorrect + socialCorrect + scienceCorrect;
        totalIncorrect = turkishWrong + mathsWrong + scienceWrong + scienceWrong;
        
        score = (((totalCorrect) - (totalIncorrect/4)) * 4 ) + 100;
        alert ( "TYT Score :" + score);
        break ;

    case "2" :
        alert("exited");
        break ;

    default :
        alert("Please enter a value within the valid range");
        break ;
}