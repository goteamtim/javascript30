(function(){
    var keys = Array.from(document.querySelectorAll('.drum-key'));
    var keysArray = [].slice.call(keys);
    //Collect the keys
    //add an event listener to the divs
    //create function that adds the playing class then plays the sound and removes the class when finished
    keysArray.forEach(addListener);
    function addListener(element){
        element.addEventListener('click',function(){
            playSound();
        });
    };

    function playSound(){
        var audio = new Audio('./sounds/ride.wav');
        audio.play();
    }

})();