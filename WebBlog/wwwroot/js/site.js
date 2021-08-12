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

function seeText(description) {
    var descripShort = description.substr(0, 500);
    return descripShort + "...";
}


function showPost() {
    const divSlide = $(`#carrucel-container`);
    let body = '';
    let i = 0;
    var x = new Date();
    let pMin = 200;
    var xDate = moment(x).format("YYYY-MM-DD hh:mm:ss")
    var xTime = moment(x).format("h:mm:ss")
    console.log(x.getTime())
    InfoPostd.forEach(item => {
        i++;
        var parseDate = new Date(item.Date);

        if (i % 2 != 0) {
            if (i == 1) body += `<div class="carousel-item active">`;
            else body += `<div class="carousel-item" >`;
        }
        body += ` <div class="row content-sliders">
                        <div class="col-12 row">
                          <div class="col-2 bg-black timePublished">${(x.getTime() - parseDate.getTime()) / 3600000} hrs</div >
                          <div class="col-10">
                            <h5>${item.Title}</h5>
                            <h6>${moment(item.Date).format("YYYY-MM-DD")}</h6>
                            <h6>${item.Author}</h6>
                          </div>
                        </div>
                        <p  id="ContText_${item.Id}" name="ContText"class="d-block w-100">${seeText(item.Text)}</p>
                        <div class="col-12 text-right">
                          <button id="read" class="" onclick="goPost(${item.Id})">Read More</button>
                       </div>
                      </div>`;

        if (i % 2 == 0) body += `</div>`;
    });

    divSlide.append(body);
}

$(document).ready(function () {
    showPost()
});

function goPost(Id) {
    window.location.href = '/Home/readMore/' + Id;

}

