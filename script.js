(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            var computedStyle = window.getComputedStyle(button);
            var backgroundColor = computedStyle.backgroundImage;

            button.style.backgroundImage = "linear-gradient(rgb(0, 0, 0), rgb(0,0,0)";
            setTimeout(function(){
                button.style.backgroundImage = backgroundColor;
            },100)
            let value = e.target.dataset.num;
            screen.value += value;
            

        });
    });
     

    equal.addEventListener('click', function(e){
        if(screen.value == ""){
            clearScreen();
        } else {
            let answer = eval(screen.value);
            clearScreen();
            screen.value = answer;
        }
    });

    clear.addEventListener('click', clearScreen);

    function clearScreen(){
        screen.value = "";
    }
})();
