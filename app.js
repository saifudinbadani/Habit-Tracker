var habitInput = document.querySelector('#habitInput');
var addHabitBtn = document.querySelector('#addHabitBtn');
var showDate =document.querySelector('#showDate');
var displayHabits = document.querySelector('#displayHabits');

// created date object with constructor

var today = new Date();
// designed a var to give today's date and month has index value, so solved that by adding plus 1

var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var habitStorage = [];

showDate.innerText = date;

function addHabit(){
    var newHabit = document.createElement('p')
    var habitText = document.createTextNode(habitInput.value);
    newHabit.appendChild(habitText);
    displayHabits.appendChild(newHabit);
    habitStorage.push(habitInput.value);
    

}
addHabitBtn.addEventListener('click', addHabit)



