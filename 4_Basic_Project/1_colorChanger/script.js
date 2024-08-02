const buttons = document.querySelectorAll('.button');
console.log(buttons);
const body = document.querySelector('body');
console.log(body);  

buttons.forEach( (buttons) => {
    console.log(buttons);
    buttons.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = "#373A40";
            body.style.color = "#F7F9F2"
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = "#F7F9F2";
            body.style.color = "black"
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = '#478CCF';
            body.style.color = "black"
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = "#F3FEB8";
            body.style.color = "black"
        }
        else if(e.target.id === 'purple'){
            body.style.backgroundColor = "#C65BCF";
            body.style.color = "black"
        }
    });
});