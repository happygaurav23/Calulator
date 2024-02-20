let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

buttons.forEach(button =>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.textContent);
        if(e.target.innerText === 'C'){
            input.innerText = "";
        }else if(e.target.innerText === 'back'){
            input.innerText = input.innerText.slice(0,-1);
        }else if(e.target.innerText === '='){
            input.innerText = eval(input.innerText);
        }
        else{
            input.innerText += e.target.innerText;
        }

        input.scrollLeft = input.scrollWidth;
        

    })
})