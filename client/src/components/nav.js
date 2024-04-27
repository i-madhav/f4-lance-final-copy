function responsivenav() {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementsByClassName('menu');
    if (menu.style.display == 'none') {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";

    }
}