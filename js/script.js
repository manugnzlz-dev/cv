
window.addEventListener('load', function () {
    'use strict';

    const e_copyright = document.getElementById("copyright");
    e_copyright.addEventListener('load', getCopyright());

});


/* Get copyright */
function getCopyright() {

    let lv_year = new Date().getFullYear();
    let lv_copyright = "&copy; Copyright " + lv_year + " - MGC Studio Consulting";
    document.getElementById("copyright").innerHTML = lv_copyright;

}