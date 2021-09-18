const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outPut = document.querySelector("#output-box")

function compareValues (sum,luckyNumber )
{
    if(sum%luckyNumber===0) {
        outPut.innerText= "WOW! Your BDAY is lucky💥 "
    }else {
        outPut.innerText="Your BDAY is not-lucky !😔"
        
    }

}

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value ;
    const sum = calculateSum(dob)
    compareValues (sum,luckyNumber.value )

}

function calculateSum(dob) {
    dob= dob.replaceAll("-","");
    let sum =0;
    for(let index=0 ;index<dob.length;index++)

    { 
        sum = sum + Number (dob.charAt(index) )
    }
return sum;

}

checkNumber.addEventListener('click',checkBirthDateIsLucky)

