let habitInput = document.querySelector('#habitInput');
let addHabitBtn = document.querySelector('#addHabitBtn');
let showDate =document.querySelector('#showDate');
let displayHabits = document.querySelector('#displayHabits');

// created date object with constructor

let today = new Date();
// designed a let to give today's date and month has index value, so solved that by adding plus 1

let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
let habitStorage = [];


// showDate.innerText = date;

// function addHabit(){
//     let newHabit = document.createElement('p')
//     let habitText = document.createTextNode(habitInput.value);
//     newHabit.appendChild(habitText);
//     displayHabits.appendChild(newHabit);
//     habitStorage.push(habitInput.value);
    

// }

//CRUD Functions
function addHabit(){
    habitStorage.push({name: habitInput.value,
    date: Date.now()});        
}
// Update function
//takes the habit to update and new habit
// find the old habit index and replace it with new one.
//

console.log(habitStorage);
addHabitBtn.addEventListener('click', addHabit)

// functional tasks
// UI
