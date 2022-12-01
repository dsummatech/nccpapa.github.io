function submenu() {
    var submenu = document.getElementById("sub");
    if (submenu.style.display == "none") {
        submenu.style.display = "block";
    }
    else{
        submenu.style.display = "none";
    }
}
function say() {
    alert("hi");
}
function come() {
    var submenu = document.getElementById("left");
        setTimeout(() => {
            submenu.style.left =0 + "%";
        }, 500);
    }
    function smallmenu() {
        var smallmenu = document.getElementById("smallmenu");
        if (smallmenu.style.display == "none") {
            smallmenu.style.display = "block";
        }
        else{
            smallmenu.style.display = "none";
        }
    }