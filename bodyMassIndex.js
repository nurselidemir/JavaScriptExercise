//  body mass index calculation

let weight = Number(prompt("enter your weight :"));
let height = Number(prompt("enter your height :"));

let result = weight / (height*2);

if(result < 18.5)
{
    console.log("You are below your ideal weight");
}
else if(result > 18.5 && result <= 24.9)
    {
        console.log("You are below your ideal weight");
    }
else if(result >= 25 && result <= 29.9)
    {
        console.log("You are at your ideal weight");
    }
else if(result > 30 && result <= 39.9)
    {
        console.log("You are above your ideal weight");
    }

