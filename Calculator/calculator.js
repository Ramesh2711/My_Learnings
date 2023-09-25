
const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const operators=["%", "*", "/", "-", "+", "="];
let output="";


buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>
        calculate(e.target.dataset.value));
});

const calculate=(btn)=>{

    if(btn==="=" && output!==""){
        output=eval(output.replace("%","/100"));
    }else if(btn==="AC"){
        output="";
    }else if(btn==="DEL"){
        output=output.toString().slice(0,-1);
    }else{
        if(output==="" && operators.includes(btn)) return;
        output+=btn;
    }
    display.value=output;
};


