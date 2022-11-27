// function globalEventlistener(type, selector, callBack) {
//     document.addEventListener(type, el => {
//         if (el.target.matches(selector)) callBack(el)
//     })
// }


///////////////////////////////////elements
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let deliveryD = document.getElementById("dDate");
let street = document.getElementById("street");
let hNumber = document.getElementById("hNumber");
let fNumber = document.getElementById("fNumber");

let checkbox = document.querySelector(".checkbox1");
let cash = document.getElementById("cash");
let card = document.getElementById("card");
let item1 = document.querySelectorAll("item1");
let gift = document.getElementById("gift");
let postCard = document.getElementById("postCard");
let discount = document.getElementById("discount");
let pP = document.getElementById("pP");
let btnSubmit = document.querySelector(".btnLast");
let error = document.querySelectorAll(".error")
let form = document.querySelector("form")
let input = document.querySelectorAll("input")
let inputRadioCard = document.querySelector(".cash")
let inputRadioCash = document.querySelector(".card")

let required = document.querySelectorAll(".required")
////////////////////////////// check every element for validation
fName.addEventListener("focusout", function() {
    let fnameCheck = ()=> {
        let matchPattern = fName.value.match(/\d+/g);
       
        if(matchPattern !== null || fName.value.length <4 ) {
         fName.classList.add("invalid")
            error[0].style.opacity = "100"
            return false
        } else {
            fName.classList.remove("invalid")
            error[0].style.opacity = "0" 
            return true 
           }
        
        
    }
    fnameCheck();
})
lName.addEventListener("focusout", function(){
    let lnameCheck = ()=> {
        let matchPattern = lName.value.match(/\d+/g);
        if (matchPattern !== null || lName.value.length <4 ) {
        lName.classList.add("invalid")
           error[1].style.opacity = "100"
           return false
       } else {
        lName.classList.remove("invalid")
        error[1].style.opacity = "0"  
        return true
       }
    }
    lnameCheck();
})
deliveryD.addEventListener("focusout", function() {
    let dDayCheck = ()=> {
        let currentTime  = new Date();
        
        let twoDays  = new Date();
        twoDays.setDate(twoDays.getDate() + 1);
        twoDays = twoDays.toISOString().slice(0, 10).replace('T', ' ');
        let twoMonths  = new Date();
        twoMonths.setDate(twoMonths.getDate() + 120);
        twoMonths = twoMonths.toISOString().slice(0, 10).replace('T', ' ');
        
        if(deliveryD.value<twoDays || deliveryD.value > twoMonths) {
            deliveryD.classList.add("invalid")
            error[2].style.opacity = "100"
            return false
        } else {
            deliveryD.classList.remove("invalid")
            error[2].style.opacity = "0" 
            return true 
        }
        
        
        
    }
    dDayCheck(); 
})
street.addEventListener("focusout", function() {
    let streetCheck = ()=> {
        if(street.value.length<5) {
            street.classList.add("invalid")
            error[3].style.opacity = "100"
            return false
        } else {
            street.classList.remove("invalid")
            error[3].style.opacity = "0"  
            return true
        }
    }
    streetCheck();
})
hNumber.addEventListener("focusout", function() {
    let hNumberCheck = ()=>{
        let matchPattern = hNumber.value.match(/\d+/g);
        if(matchPattern === null || hNumber.value < 1 ) {
            hNumber.classList.add("invalid")
            error[4].style.opacity = "100"
            return false
        } else {
            hNumber.classList.remove("invalid")
            error[4].style.opacity = "0" 
            return true 
        }
        
    }
    hNumberCheck()
})
fNumber.addEventListener("focusout", function() {
    let fNumberCheck = ()=>{
        let firstDash = /^-/;
        // let matchPattern = /^[0-9.-]+$/gi;
        // let firstDash = /(^[1-9]{1,})(\w*)/g;
        // matchPattern = fNumber.value.match(matchPattern)
        firstDash = fNumber.value.match(firstDash)
        
        if (firstDash !== null ) {
           
            fNumber.classList.add("invalid")
            error[5].style.opacity = "100"
            return false
        } else {
            fNumber.classList.remove("invalid")
            error[5].style.opacity = "0"
            return true  
        }
    }
    fNumberCheck();
})
checkbox.addEventListener("change", function() {
    let checkBoxCheck = ()=> {
        let checkboxes = document.querySelectorAll('input[name="check"]:checked')
        let cBArr = Array.from(checkboxes);
        
        if(cBArr.length===2){
            checkbox.classList.remove("invalid")
            error[6].style.opacity = "0"
            return true
        } else {
            checkbox.classList.add("invalid")
            error[6].style.opacity = "100"
            return false
        }
         }
         checkBoxCheck()
})



///////////////////////////////height

const body = document.body;
const html = document.documentElement;
const height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);
console.log(height)
//////////////////////////btn validation
form.addEventListener("keyup", validateBtn)
form.addEventListener("change", validateBtn2)
form.addEventListener("keyup", finalbtnCheck)
form.addEventListener("change", finalbtnCheck)
// globalEventlistener("keyup", "form", validateBtn())
// globalEventlistener("change", "form", validateBtn())
let checker = false;
let isValid = false;
function validateBtn2() {
    
   let rCheck = ()=> {
       
    if(inputRadioCard.checked) {
       return true
      }else if(inputRadioCash.checked) {
        
        return true
      } else {
      
          return false
      }
   }
    let checkBoxCheck = ()=> {
        let checkboxes = document.querySelectorAll('input[name="check"]:checked')
        let cBArr = Array.from(checkboxes);
        
        if(cBArr.length===2){
           
            return true
        } else {
        
            return false
        }
         }
    
   
    if (checkBoxCheck() == true && rCheck() === true) {
        checker = true
    }
}

function validateBtn() {
    let newArr = Array.from(required);
     isValid = newArr.every(e=> e.value.length !==0) 
    
}
function finalbtnCheck() {
 

    if(isValid===true && checker===true ) {
        btnSubmit.disabled = false;
        
        
    } else {
       
        btnSubmit.disabled = true;
       
    }
}
////////////////////////////////////////////////////// individual requirements
let finalCheckerz = false;

btnSubmit.addEventListener("click",validation )
btnSubmit.addEventListener("click",formValidation )
function validation() {
    
    let count = 0;
    
    let fnameCheck = ()=> {
        let matchPattern = fName.value.match(/\d+/g);
       
        if(matchPattern !== null || fName.value.length <4 ) {
         fName.classList.add("invalid")
            error[0].style.opacity = "100"
            return false
        } else {
            fName.classList.remove("invalid")
            error[0].style.opacity = "0" 
            return true 
           }
        
        
    }
    fnameCheck();
    let lnameCheck = ()=> {
        let matchPattern = lName.value.match(/\d+/g);
        if (matchPattern !== null || lName.value.length <4 ) {
        lName.classList.add("invalid")
           error[1].style.opacity = "100"
           return false
       } else {
        lName.classList.remove("invalid")
        error[1].style.opacity = "0"  
        return true
       }
    }
    lnameCheck();
    let dDayCheck = ()=> {
        let currentTime  = new Date();
        
        let twoDays  = new Date();
        twoDays.setDate(twoDays.getDate() + 1);
        twoDays = twoDays.toISOString().slice(0, 10).replace('T', ' ');
        let twoMonths  = new Date();
        twoMonths.setDate(twoMonths.getDate() + 120);
        twoMonths = twoMonths.toISOString().slice(0, 10).replace('T', ' ');
        
        if(deliveryD.value<twoDays || deliveryD.value > twoMonths) {
            deliveryD.classList.add("invalid")
            error[2].style.opacity = "100"
            return false
        } else {
            deliveryD.classList.remove("invalid")
            error[2].style.opacity = "0" 
            return true 
        }
        
        
        
    }
    dDayCheck();
    let streetCheck = ()=> {
        if(street.value.length<5) {
            street.classList.add("invalid")
            error[3].style.opacity = "100"
            return false
        } else {
            street.classList.remove("invalid")
            error[3].style.opacity = "0"  
            return true
        }
    }
    streetCheck();
    let hNumberCheck = ()=>{
        let matchPattern = hNumber.value.match(/\d+/g);
        if(matchPattern === null && hNumber.value <=0 ) {
            hNumber.classList.add("invalid")
            error[4].style.opacity = "100"
            return false
        } else {
            hNumber.classList.remove("invalid")
            error[4].style.opacity = "0" 
            return true 
        }
        
    }
    hNumberCheck();
    let fNumberCheck = ()=>{
        let firstDash = /^\-/gm;
        let matchPattern = /e/gi;
        // let firstDash = /(^[1-9]{1,})(\w*)/g;
        matchPattern = fNumber.value.match(matchPattern)
        firstDash = fNumber.value.match(firstDash)
        
        
        if(firstDash !== null ) {
            fNumber.classList.add("invalid")
            error[5].style.opacity = "100"
            return false
        } else {
            fNumber.classList.remove("invalid")
            error[5].style.opacity = "0"
            return true  
        }
    }
    fNumberCheck();
    let checkBoxCheck = ()=> {
        let checkboxes = document.querySelectorAll('input[name="check"]:checked')
        let cBArr = Array.from(checkboxes);
        console.log(cBArr);
        if(cBArr.length===2){
            checkbox.classList.remove("invalid")
            error[6].style.opacity = "0"
            return true
        } else {
            checkbox.classList.add("invalid")
            error[6].style.opacity = "100"
            return false
        }
         }
         checkBoxCheck()
         let finalChecker  = ()=>{
             
             
            if(fNumberCheck()===true && hNumberCheck()===true && streetCheck()===true && dDayCheck()===true && lnameCheck()===true && fnameCheck()===true && checkBoxCheck()===true && checker==true) {
                finalCheckerz = true;
                
                return true
            } else {
                return false
            }
         }
         finalChecker();
         
}
function formValidation() {
    
    if (finalCheckerz===true) {
        let overLay = document.createElement("div")
        overLay.classList.add("overlay")
        overLay.style.height = height + "px";
        overLay.textContent= `your order is complete: ${fName.value} ${lName.value} \n it will be delivered at  ${street.value} \n house N ${hNumber.value} \n flat N ${fNumber.value}\n at ${deliveryD.value} Good Order!!!`
        document.body.append(overLay);
        return true
    }
}
