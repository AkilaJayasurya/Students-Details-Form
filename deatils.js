var namee=document.getElementById("name")
var age=document.getElementById("age")
var male=document.getElementById("male")
var female=document.getElementById("female")
var course=document.getElementById("course")
var email=document.getElementById("email")
var btnsave=document.getElementById("btnsave")
var tab2=document.getElementById("tab2")

btnsave.addEventListener("click",function(event){
    event.preventDefault()

    var tr=document.createElement("tr")

    var name1=document.createElement("td")
    name1.textContent=namee.value
    tr.append(name1)
   
    var age1=document.createElement("td")
    age1.textContent=age.value
    tr.append(age1)

    var malefemale=document.createElement("td")
    malefemale.textContent = male.checked ? "male" : (female.checked ? "female" :"");
    tr.append(malefemale)

    var course1=document.createElement("td")
    course1.textContent=course.value
    tr.append(course1)

    var email1=document.createElement("td")
    email1.textContent=email.value
    tr.append(email1)

    var deletecol=document.createElement("td")

    var deletebtn=document.createElement("button")
    deletebtn.textContent = "Delete"
    deletebtn.style.background="red"
    deletebtn.style.color="white"
    
    deletecol.append(deletebtn)
    tr.append(deletecol)

    deletebtn.addEventListener("click",function(){
        tr.remove()
    })
    tab2.append(tr)
})