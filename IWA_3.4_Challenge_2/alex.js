const firstname = "Alex"
const surname = "Naidoo"
export const role = "Head of Marketing"

document.addEventListener("DOMContentLoaded", function(){
const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display});

