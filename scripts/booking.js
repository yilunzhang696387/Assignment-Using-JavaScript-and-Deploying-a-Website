/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var dailyrate = 35;
var particularday = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var mondayButton = document.getElementById("monday");
var tuesdayButton = document.getElementById("tuesday");
var wednesdayButton = document.getElementById("wednesday");
var thursdayButton = document.getElementById("thursday");
var fridayButton = document.getElementById("friday");


function colourChangeDaysOfWeek(){
    if (!this.classList.contains("clicked"))
    {
        particularday++;
        this.classList.add("clicked");
        totalCost();
    }
}


mondayButton.addEventListener("click", colourChangeDaysOfWeek);
tuesdayButton.addEventListener("click", colourChangeDaysOfWeek);
wednesdayButton.addEventListener("click", colourChangeDaysOfWeek);
thursdayButton.addEventListener("click", colourChangeDaysOfWeek);
fridayButton.addEventListener("click", colourChangeDaysOfWeek);



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearDays = document.getElementById("clear-button");
function removeDays(){

    var cost = 0;
    particularday = 0;
    dailyrate = 35;


    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    document.getElementById("calculated-cost").innerHTML = cost;

}
clearDays.addEventListener("click", removeDays);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfButton = document.getElementById("half");

function changeRateH(){

    if (halfButton.classList.contains("clicked"))
        dailyrate = 20;
    else
    {
        fullButton.classList.remove("clicked");
        var switchlist = halfButton.classList;
        switchlist.add("clicked");
        dailyrate = 20;
    }
    totalCost();
}

halfButton.addEventListener('click', changeRateH);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

var fullButton = document.getElementById("full");

function changeRateF(){

    if (fullButton.classList.contains("clicked"))
            dailyrate = 35;
    else
    {
        halfButton.classList.remove("clicked");
        var switchlist2 = fullButton.classList;
        switchlist2.add("clicked");
        dailyrate = 35;
    }
    totalCost();
}

fullButton.addEventListener('click', changeRateF);




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function totalCost(){
    
    var cost = dailyrate*particularday;
    document.getElementById("calculated-cost").innerHTML = cost;
}

