let habitParentList = document.querySelector('#habitList')
let habitList = document.getElementsByTagName('li');
let habitInput = document.querySelector('#habitInput');
let addBtn = document.querySelector('#addButton');
let closeBtn = document.getElementsByClassName('close')
let editBtn = document.getElementsByClassName('edit')

// add close button when DOM is loaded
for (i = 0; i < habitList.length; i++) {
    let close = document.createElement('span');
    let closeText = document.createTextNode('\u00D7');
    close.className = 'close'
    close.appendChild(closeText);
    habitList[i].appendChild(close);
}

// remove habit functionality added when DOM is loaded
for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function removeHabit() {
        var div = this.parentElement;
        div.style.display = "none";
    })
}


// add pencil icon when DOM is loaded
for (i = 0; i < habitList.length; i++) {
    let edit = document.createElement('span');
    let editText = document.createTextNode('\u270E');
    edit.className = 'edit'
    edit.appendChild(editText);
    habitList[i].appendChild(edit);
}

// edit functionality when DOM is loaded
for (i = 0; i < editBtn.length; i++) {
    editBtn[i].addEventListener('click', function editHabit() {
        var div = this.parentElement;
        div.innerText=habitInput.value;
    })
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

        //remove functionality when a new habit is added
        for (i = 0; i < closeBtn.length; i++) {
            closeBtn[i].addEventListener('click', function removeHabit() {
                var div = this.parentElement;
                div.style.display = "none";
            })
        }

        // add pencil icon when a new habit is added
        for (i = 0; i < habitList.length; i++) {
            let edit = document.createElement('span');
            let editText = document.createTextNode('\u270E');
            edit.className = 'edit'
            edit.appendChild(editText);
            habitList[i].appendChild(edit);
        }
    }
}




addBtn.addEventListener("click", createHabit)