function containsAny(str, substrings) {
    for (var i = 0; i != substrings.length; i++) {
       var substring = substrings[i];
       if (str.indexOf(substring) != - 1) {
         return substring;
       }
    }
    return null; 
}

function record() {
    var images = ["static/images/microphone.svg","static/images/bars.svg"];
    document.getElementById("changingImage").src = images[1]
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB"
    var projects = {"portfolio":"/portfolio",
                    "about me":"/home",
                    "resume":"/resume",
                    "other sites":"/other",
                    "augmented":"/augmented",
                    "volunteer":"/DSC",
                    "infinity":"/infinity",
                    "physics one":"/ligo",
                    "physics 1":"/ligo",
                    "robot one":"/moonshot",
                    "robot 1":"/moonshot",
                    "physics two":"/muon",
                    "physics 2":"/muon",
                    "robot two": "/SHI",
                    "robot 2": "/SHI",
                    "spring": "/spring",
                    "yo-yo": "/yoyo"
                    
    };
    var keys = Object.keys(projects)

    recognition.onresult = function(event) {
        var output = event.results[0][0].transcript.toLowerCase();
        var confidence = event.results[0][0].confidence;
        // alert([output,confidence])
        result = containsAny(output,keys)
        if (result != null){
            window.location.href = projects[result]
        }
    }
    recognition.onspeechend = function() {
        document.getElementById("changingImage").src = images[0]
        recognition.stop()
    }
    recognition.start();
}