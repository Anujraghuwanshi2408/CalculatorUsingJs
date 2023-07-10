(function(){
let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector(".btn-equal");

buttons.forEach(function(button){
    button.addEventListener('click' , function(event){
        let value = event.target.dataset.num;

        console.log(value);
        screen.value += value ;
        // console.log(screen.value);
    })
});

equal.addEventListener('click' , (e) => {
    if(screen.value === ''){
        screen.value = '';
       }
       
        screen.value = eval(screen.value); 
       console.log(screen.value);
})
clear.addEventListener('click' , (e) => {
    screen.value = "";
})
})();

