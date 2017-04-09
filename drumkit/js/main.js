(function () {
    var keys = Array.from(document.querySelectorAll('.drum-key'));
    var keysArray = [].slice.call(keys);
    var soundFiles = {
        97: 'clap.wav',
        115: 'hihat.wav',
        100: 'kick.wav',
        102: 'openhat.wav',
        103: 'boom.wav',
        104: 'ride.wav',
        106: 'snare.wav',
        107: 'tom.wav',
        108: 'tink.wav',
    };

    document.onkeypress = function (e) {
        e = e || window.event;
        console.log("Key pressed: " + e.keyCode)
        if(soundFiles.hasOwnProperty(e.keyCode)){
            playSound(e.keyCode);
        }
    };


    keysArray.forEach(addListener);
    function addListener(element) {
        element.addEventListener('click', function () {
            //debugger;
            playSound(this.dataset.key);
        });
    }

    function playSound(key) {
        var audio = new Audio('./sounds/' + soundFiles[key]);
        audio.play();
    }

})();