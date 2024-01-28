(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clearbtn = document.querySelector('.btn-clear');
    let equalbtn = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            
            if (button.classList.contains('btn-yellow')){
                clickeffect(button,"linear-gradient(rgb(214, 110, 7), rgb(214, 110, 7))")
            }
            if (button.classList.contains('btn-grey')){
                clickeffect(button,"linear-gradient(rgb(0, 0, 0), rgb(0,0,0))")
            }

            let value = e.target.dataset.num;
            screen.value += value;
        });
    });
     

    equalbtn.addEventListener('click', function(e){
        
        clickeffect(equalbtn,"linear-gradient(rgb(2, 75, 2),rgb(2, 75, 2))")

        if(screen.value == ""){
            clearScreen();
        } else {
            let answer = eval(screen.value);
            clearScreen();
            screen.value = answer;  
        }
    });

    clearbtn.addEventListener('click', function(){

        clickeffect(clearbtn,"linear-gradient(red,red)")
        clearScreen();

    });

    function clearScreen(){
        screen.value = "";
    }
    function clickeffect(buttoname,color){
        var computedStyle = window.getComputedStyle(buttoname);
        var backgroundColor = computedStyle.backgroundImage;
        buttoname.style.backgroundImage = color;
        setTimeout(function(){
            buttoname.style.backgroundImage = backgroundColor;
        },100)
    }
})();
