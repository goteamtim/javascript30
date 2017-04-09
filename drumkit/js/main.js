(function(){
    var keys = Array.from(document.querySelectorAll('.drum-key'));
    var keysArray = [].slice.call(keys);
    var soundFiles = {
        "A": 'clap.wav',
        "S": 'hihat.wav',
        "D": 'kick.wav',
        "F": 'openhat.wav',
        "G": 'boom.wav',
        "H": 'ride.wav',
        "J": 'snare.wav',
        "K": 'tom.wav',
        "L": 'tink.wav',
    };
    
    //add an event listener to the divs
    //create function that adds the playing class then plays the sound and removes the class when finished
    keysArray.forEach(addListener);
    function addListener(element){
        element.addEventListener('click',function(){
            playSound();
        });
    }

    function playSound(key){
        var audio = new Audio('./sounds/' + key +'.wav');
        audio.play();
    }

})();