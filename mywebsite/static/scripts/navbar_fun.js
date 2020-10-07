function setNav() {
    var nav = document.getElementById('navContainer');
    var anchor = nav.getElementsByClassName("nav-link");
    var current = window.location.pathname.split('/')[1];
    for (var i = 0; i < anchor.length; i++) {
        if(anchor[i].pathname.slice(1) == current) {
            // console.log(current,anchor[i]);
            anchor[i].classList.add('active');
        }
    }
}

setNav()