import { newRowsota } from "./ota.js";
import { newRowsima } from "./ima.js";
import { newRowsafa } from "./afa.js";

const getDate = (event) => {
 
    event.preventDefault();
    let day = parseInt(document.getElementById('day').value)
    let month = parseInt(document.getElementById('month').value)
    let year = parseInt(document.getElementById('year').value)

    let gradday = parseInt(document.getElementById('gradday').value)
    let gradmonth = parseInt(document.getElementById('gradmonth').value)
    let gradyear = parseInt(document.getElementById('gradyear').value)
    console.log("day is ", day);

    let aca= document.getElementById('academy').value
    console.log(aca);

    // Check if all fields are filled
    if (!day || !month || !year || !gradday || !gradmonth || !gradyear || !aca) {
        alert('Please fill in all details before submitting.');
        return; // Stop further execution
    }

    let date = new Date()

   if (aca==='ota') {
    
    newRowsota(date.getFullYear(), year, gradyear, month, day, gradmonth, gradday)
   } else if(aca==='ima') {
    newRowsima(date.getFullYear(), year, gradyear, month, day, gradmonth, gradday)
    
   }else{
    newRowsafa(date.getFullYear(), year, gradyear, month, day, gradmonth, gradday)
   }
   


}

document.getElementById('button').addEventListener("click",getDate)