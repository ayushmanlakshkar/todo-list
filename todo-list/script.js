common_clock = document.getElementById('clock')
to_do_set = document.getElementById('to_do')
add_button = document.getElementById('add')
deadline_set = document.getElementById('timestamp')
box = document.getElementsByClassName('box')[0]
number = 0


clock = () => {
    let fulldate = new Date()
    common_clock.innerHTML = fulldate
    setInterval(clock, 1000);
}
clock()


load = () => {
    let previousdata = localStorage.getItem('tabledata')
    if (previousdata != null) {
        box.innerHTML = previousdata
    }
    let remove = document.getElementsByClassName('remove')
    for (let i = 1; i < remove.length; i++) {
        number=number+1 ;
        remove[i].addEventListener('click', (e) => { 
            delete_task(e);
        })
    }
}
load()



set_deadline = () => {
    let fulldate = new Date(Date.parse(deadline_set.value))
    hours = fulldate.getHours()
    minutes = fulldate.getMinutes()
    date = fulldate.getDate()
    month = fulldate.getMonth()
    year = fulldate.getFullYear()
    return hours + ' : ' + minutes + " &nbsp , " + date + ' / ' + month + ' / ' + year
}


serial_rearrange = () => {
    row = document.getElementsByClassName('row')
    for (let i = 1; i < row.length; i++) {
        row[i].children[0].innerHTML = i
    }
}



delete_task = (e) => {
    e.target.parentElement.remove();
    serial_rearrange();
    localStorage.setItem('tabledata', box.innerHTML)
    number = number - 1
}



add = () => {
    if (to_do_set.value == '' || deadline_set.value == '') {
        alert('Please fill all the fields')
    }
    else {
        row = document.createElement('ul')
        row.classList.add('row')

        serial = document.createElement('li')
        number = number + 1
        serial.innerHTML = number
        serial.classList.add('column', 'serial')
        row.appendChild(serial)

        task = document.createElement('li')
        task.innerHTML = to_do_set.value
        to_do_set.value = ''
        task.classList.add('column', 'task')
        row.appendChild(task)

        deadline = document.createElement('li')
        deadline.innerHTML = set_deadline()
        deadline_set.value = ''
        deadline.classList.add('column', 'deadline')
        row.appendChild(deadline)

        remove = document.createElement('button')
        remove.innerHTML = "remove"
        remove.classList.add('column', 'remove')
        row.appendChild(remove)
        box.appendChild(row)
        remove.addEventListener('click', (e) => { delete_task(e) });
        localStorage.setItem('tabledata', box.innerHTML)

    }

}


add_button.addEventListener('click', add)




