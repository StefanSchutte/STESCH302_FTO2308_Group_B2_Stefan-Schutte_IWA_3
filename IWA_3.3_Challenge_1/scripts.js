import  { company, year } from './configuration.js'
//import { year } from './configuration.js'


document.addEventListener("DOMContentLoaded", function(){
const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message;
});
