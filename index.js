let homeScore = 0
let guestScore = 0

function add1toHome(){
    homeScore+=1
    document.getElementById("home").textContent=homeScore
}
function add2toHome(){
    homeScore+=2
    document.getElementById("home").textContent=homeScore
}
function add3toHome(){
    homeScore+=3
    document.getElementById("home").textContent=homeScore
}
function add1toGuest(){
    guestScore+=1
    document.getElementById("guest").textContent=guestScore
}
function add2toGuest(){
    guestScore+=2
    document.getElementById("guest").textContent=guestScore
}
function add3toGuest(){
    guestScore+=3
    document.getElementById("guest").textContent=guestScore
}
