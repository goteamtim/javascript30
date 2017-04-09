(function () {
    var keys = Array.from(document.querySelectorAll('.drum-key'));
    var keysArray = [].slice.call(keys);
    var soundFiles = {
        65: 'clap.wav',
        83: 'hihat.wav',
        68: 'kick.wav',
        70: 'openhat.wav',
        71: 'boom.wav',
        72: 'ride.wav',
        74: 'snare.wav',
        75: 'tom.wav',
        76: 'tink.wav',
    };

    document.onkeypress = function (e) {
        e = e || window.event;
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