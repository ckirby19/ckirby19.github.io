function record() {
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB"

    recognition.onresult = function(event) {
        output = event.results[0][0].transcript;
        console.log(output)
        if (output=="portfolio"){
            window.location.href = "/portfolio";
        }
        else if (output=="about me"){
            window.location.href = "/home";
        }
        else if (output=="resume"){
            window.location.href = "/resume";
        }
        else if (output=="feedback"){
            window.location.href = "/feedback";
        }
        else if (output=="other sites"){
            window.location.href = "/other"
        }
    }
    recognition.start();
}