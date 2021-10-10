let habitParentList = document.querySelector('#habitList')
let habitList = document.getElementsByTagName('li');
let habitInput = document.querySelector('#habitInput');


let addBtn = document.querySelector('#addButton');


function createHabit(){
    let addHabitToList = document.createElement('li');
    let captureText = document.createTextNode(habitInput.value);
    addHabitToList.appendChild(captureText);
    if(habitInput.value === ''){
        alert('Write something')
    }
    else{
        habitParentList.appendChild(addHabitToList);
        habitInput.value = '';
    }
    
}

addBtn.addEventListener("click", createHabit())























// created date object with constructor

// let today = new Date();

// designed a let to give today's date and month has index value, so solved that by adding plus 1

// todaysDate.innerText = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
// let habitStorage = [];



