// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function sliderToPost(){
    var x = document.getElementById('grad-1').clientHeight;
    window.scroll(0, x)
    console.log(x)
}

function PublishPost() {
    $('#PuPost').submit();

}

$('.carousel').carousel({
    interval: 5000,

})


