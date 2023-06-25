clockp = document.getElementById('clock')
input=document.getElementById('item')
added=document.getElementById('add')
sno=document.getElementById('serialno')
text=document.getElementById('text')
timedone=document.getElementById('donetime')
statu=document.getElementById('status')
todelete=document.getElementById('todelete')
timestamp=document.getElementById('timestamp')
delu=document.getElementsByClassName('del')
number=1

clock=()=>{
    let fulldate=new Date()
    clockp.innerHTML=fulldate
}
setInterval(clock,1000);


showtime=(timeitem)=>{
    let fulldate=new Date(Date.parse(timestamp.value))
    hours=fulldate.getHours()
    minutes=fulldate.getMinutes()
    date=fulldate.getDate()
    month=fulldate.getMonth()
    year=fulldate.getFullYear()
    timeitem.innerHTML= hours+ ' : '+minutes+ " ; "+date+' / '+month+' / '+year
}



add=()=>{
    
    //serial numbers
    itemno=document.createElement('li')
    itemno.innerHTML=number
    sno.appendChild(itemno)
    number++
    
    
    //text message
    listitem=document.createElement('li')
    listitem.innerHTML=input.value
    text.appendChild(listitem)
    
    // time on done
    timeitem=document.createElement('li')
    showtime(timeitem)
    timedone.appendChild(timeitem)
    
    
    //add delete btn
    delbox=document.createElement('li')
    delbtn=document.createElement('button')
    delbtn.classList.add('del')
    delbtn.innerHTML='DELETE'
    todelete.appendChild(delbox)
    delbox.appendChild(delbtn)
    
}

deletefn = ()=>{
   console.log('ayush')
}
    
    
    


added.addEventListener('click',add)
for (var i = 0 ; i < delu.length; i++) {
    console.log(delu[i])
 }

    
    

