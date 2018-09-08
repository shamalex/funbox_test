'use strict'

/* ==========================================================================
    toggle selected elements
========================================================================== */
element = document.getElementsByClassName('feed__item');

for (var i=0; i < element.length; i++) {
    element[i].onclick = function(){
        this.classList.toggle('selected'); // or whatever your active class is
        if (this.classList.contains('disabled')) {
            this.classList.remove("selected");
        }
    }
}