// code your solution here
function saturdayFun( activity = "roller-skate")
{
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun("bathe my dog");
saturdayFun();

function mondayWork(activity= "go to the office")
{
    return(`This Monday, I will ${activity}.`);
}
mondayWork("work from home")
mondayWork();

function wrapAdjective(flair="*")
{
  
   return function innerFunction(adjective="a hard worker")
    {
     return `You are ${flair}${adjective}${flair}!`
    }
    
}

