let habitParentList = document.querySelector('#habitList')
let habitList = document.getElementsByTagName('li');
let habitInput = document.querySelector('#habitInput');
let addBtn = document.querySelector('#addButton');
let closeBtn = document.getElementsByClassName('close')


for (i = 0; i < habitList.length; i++) {
    let close = document.createElement('span');
    let closeText = document.createTextNode('\u00D7');
    close.className = 'close'
    close.appendChild(closeText);
    habitList[i].appendChild(close);
}

function createHabit() {
    let addHabitToList = document.createElement('li');
    let captureText = document.createTextNode(habitInput.value);
    addHabitToList.appendChild(captureText);
    if (habitInput.value === '') {
        alert('Write something')
    } else {
        habitParentList.appendChild(addHabitToList);
        habitInput.value = '';

        //close  button
        let close = document.createElement('span');
        let closeText = document.createTextNode('\u00D7');
        close.className = 'close'
        close.appendChild(closeText);
        addHabitToList.appendChild(close);  
    }

}

// function removeHabit(){
//     for(i=0; i < habitList.length; i++){
//         habitList[i].style.display = 'none'
//     }
// }

// closeBtn.addEventListener("click", removeHabit);

addBtn.addEventListener("click", createHabit)

