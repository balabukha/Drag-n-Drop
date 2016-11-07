// перенос элемента 

var ball = document.getElementById('ball');

ball.onmousedown = function(event) {

    var coords = getCoords(ball);
    var shiftX = event.pageX - coords.left;
    var shiftY = event.pageY - coords.top;


    ball.style.position = 'absolute';
    // moveTo(event);
    document.body.appendChild(ball);
    ball.style.zIndex = 1000;

    function moveTo(event) {
        ball.style.left = event.pageX - shiftX + 'px';
        ball.style.top = event.pageY - shiftY + 'px';
    };

    document.onmousemove = function(event) {
        moveTo(event) // важная особенность, что onmousemove отслеживается на document
    };

    ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
    }
};

function getCoords(elem) { // кроме IE8-
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

};

ball.ondragstart = function() {
    return false;
};


//*************************************

var slider = document.getElementById('slider');
var sliderBar = slider.querySelector('.thumb');


sliderBar.onmousedown = function(event) {
    var coordsSliderBar = getCoords(sliderBar);
    // var coordsSlider = getCoords(slider);


    var shiftX = event.pageX - coordsSliderBar.left + 16;


    document.onmousemove = function(event) {
        var sliderWidth = window.getComputedStyle(slider, null).getPropertyValue("width");
        var sliderLeftStart = window.getComputedStyle(slider, null).getPropertyValue("margin-left");
        if (event.pageX >= parseInt(sliderLeftStart) && event.pageX <= (parseInt(sliderWidth) + parseInt(sliderLeftStart))) {
            sliderBar.style.left = parseInt(sliderLeftStart) + event.pageX - shiftX + 'px';

        }


        function moveTo(event) {
            sliderBar.style.left = event.pageX - shiftX + 'px';
            sliderBar.style.top = event.pageY - shiftY + 'px';
        };
        sliderBar.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        };


    };




    function getCoords(elem) { // кроме IE8-
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
    sliderBar.ondragstart = function() {
        return false;
    };
};

//*************************************
