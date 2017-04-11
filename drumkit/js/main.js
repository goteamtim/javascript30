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
        if (soundFiles.hasOwnProperty(e.keyCode)) {
            
            var element = document.querySelector('div[data-key=\"' + e.keyCode + '\"]');
            playSound(e.keyCode);
            //debugger;
            manipulateClasses(element);
        }
    };


    keysArray.forEach(addListener);
    function addListener(element) {
        element.addEventListener('click', function () {
            //debugger;
            playSound(this.dataset.key);
            manipulateClasses(this);

        });
    }

    function manipulateClasses(element) {
        console.log('tyopeof element: ' + typeof(element));
        console.log(element);
        element.classList.add('playing');

        setTimeout(removeClass(element), 100);

        function removeClass(e) {
            e.classList.remove('playing');
        }
    }

    function playSound(key) {
        var audio = new Audio('./sounds/' + soundFiles[key]);
        audio.play();
    }

})();