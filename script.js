function signup(){
    location.replace("signup.html");

}

function validate(){    
    const passwordElement = document.getElementById('js-password').value;

    if (passwordElement.length <8){
        alert("Password is incorrect!"); 
     
        return false

    }
    else{
        return true

    }
}
function signinValidate(){
    const nameElement = document.getElementById('js-name').value;
    const lastnameElement = document.getElementById('js-lastname').value;
    const passwordElement = document.getElementByIdr('js-password').value;

    if(nameElement.length == 0 || nameElement.length<3 ){
        alert('Minimum length(2) is required');
        return false;
    }
    else if(lastnameElement.length == 0 || lastnameElement.length<3 ){
        alert('Minimum length(2) is required');
        return false;
    }
    else if(passwordElement.length<8){
        alert('Password length should be 8')
        return false;
    }

    else{
        return true;
    }
        
        
    
}

let notesElelement = document.querySelector('.js-notes');
function notes(){   
    notesElelement.style.display ="block"; 

}
   

function getData(){
    let textElement = document.querySelector('.js-text').value;
    let timeElement = document.querySelector('.js-time').value;
    const timeElements =  document.querySelectorAll(".js-para");
    if (timeElement < 12){
        timeElement = timeElement +'PM';

    }
    else{
        timeElement = timeElement +'AM';
    }
    
    timeElements.forEach(element => {
        if (String(element.textContent)==String(timeElement)){
            const b = document.createElement('span');
            b.classList.add('new-para');
            b.textContent = `${textElement} ${timeElement}`;               
            let a = element.textContent;
            element.textContent = a + b.textContent;
            
        
    
        }


    });
    notesElelement.style.display ="none";
    
    

}



