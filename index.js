const button = document.querySelector('.switch');
const bulb = document.querySelector('.bulb');
let count=0

function glowBulb(){
    if (count==0){
        bulb.style.boxShadow = "0 0 40px 20px yellow";
        button.textContent="Swith OFF";
        count=1;
    }else{
        bulb.style.boxShadow = "none";
        button.textContent="Swith ON";
        count=0;
    }
}

const cord = document.querySelector('.cord');

let isOn = false;

function pullDown() {  
        cord.style.animation="cordBig 1s ease";
}

function releaseCord() {  
        cord.style.animation="cordSmall 1s ease-in";

    isOn = !isOn;

    if (isOn) {
        bulb.style.boxShadow = "0 0 40px 20px yellow";
        bulb.style.backgroundColor = "yellow";
    } else {
        bulb.style.boxShadow = "none";
        bulb.style.backgroundColor = "transparent";
    }
}