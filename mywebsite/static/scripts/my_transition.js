const options = {
    animationSelector: '[class*="transition-fade"]',
    animateHistoryBrowsing: true,
    animateScroll: false,
    plugins: [

        new SwupScrollPlugin({
            animateScroll: false
        })
    ]
};


let scrollValues = {};

const swup = new Swup(options);


swup.on('clickLink', () => {
    scrollValues[window.location.href] = window.scrollY;
});

swup.on('popState', () => {
    setTimeout(function() {
        window.scrollTo(0, scrollValues[window.location.href]);
    }, 100);
});


function init() {


    // For accordion text
    var acc = document.getElementsByClassName("accordion");
    if (acc != null){
        for (var i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
            });
        }
    }

        // Portfolio Images
    if (document.getElementById("myBtnContainer") != null){
        filterSelection("all") // Execute the function and show all columns
    }
    
    function filterSelection(c) {
        var x, i;
        var shown = 0;
        x = document.getElementsByClassName("portfolio-page");
        if (c == "all") {
        c = "";
        }
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i],"show");
            if (x[i].className.indexOf(c) > -1) {
                AddClass(x[i],"show")
            }
        }
    }
    
    // Show filtered elements
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }
    
    // Hide elements that are not selected
    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }
    
      
      // Get the container element
    var btnContainer = document.getElementById("myBtnContainer");
    if (btnContainer){
        // Get all buttons with class="btn" inside the container
        var btns = btnContainer.getElementsByClassName("filter");
      
        // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = btnContainer.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
          });
        }
    }

    // For navbar text
    var nav = document.getElementById('navigation');
    var links = nav.getElementsByClassName("nav-link");
    for (var i=0; i<links.length; i++) {
        links[i].addEventListener("click", function() {
            var current = nav.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active"
        });
    }
    // For email to prevent spammers
    $('a.mail').on('click', function(){
        var href = $(this).attr('href');
        $(this).attr('href', href.replace('badmail.', ''));
    });

    
      
}

init();
document.addEventListener('swup:contentReplaced', init);

