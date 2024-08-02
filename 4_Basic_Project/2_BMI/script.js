const form = document.querySelector("form");
console.log(form);

form.addEventListener('submit', (i)=>{
    i.preventDefault();
    
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#results');
    console.log(height, weight);
    if(height === '' || height < 0 || isNaN(height)){
        result.textContent = "Please enter a valid height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.textContent = `Please enter a valid weight`;
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let s = "";
        if(bmi<=18.6){
            s = "Under Weight";
        }else if(bmi<=24.9){
            s = "Normal Weight";
        }else{
            s = "Over Weight";
        }
        result.innerHTML = `<spam>${bmi}</spam><br>${s}`;

    }
})