// // перенос элемента 

// var ball = document.getElementById('ball');

// ball.onmousedown = function(event) {

//     var coords = getCoords(ball);
//     var shiftX = event.pageX - coords.left;
//     var shiftY = event.pageY - coords.top;


//     ball.style.position = 'absolute';
//     // moveTo(event);
//     document.body.appendChild(ball);
//     ball.style.zIndex = 1000;

//     function moveTo(event) {
//         ball.style.left = event.pageX - shiftX + 'px';
//         ball.style.top = event.pageY - shiftY + 'px';
//     };

//     document.onmousemove = function(event) {
//         moveTo(event) // важная особенность, что onmousemove отслеживается на document
//     };

//     ball.onmouseup = function() {
//         document.onmousemove = null;
//         ball.onmouseup = null;
//     }
// };

// function getCoords(elem) { // кроме IE8-
//     var box = elem.getBoundingClientRect();

//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };

// };

// ball.ondragstart = function() {
//     return false;
// };


//*************************************

// var slider = document.getElementById('slider');
// var sliderBar = slider.querySelector('.thumb');


// sliderBar.onmousedown = function(event) {
//     var coordsSliderBar = getCoords(sliderBar);
//     // var coordsSlider = getCoords(slider);


//     var shiftX = event.pageX - coordsSliderBar.left + 16;


//     document.onmousemove = function(event) {
//         var sliderWidth = window.getComputedStyle(slider, null).getPropertyValue("width");
//         var sliderLeftStart = window.getComputedStyle(slider, null).getPropertyValue("margin-left");
//         if (event.pageX >= parseInt(sliderLeftStart) && event.pageX <= (parseInt(sliderWidth) + parseInt(sliderLeftStart))) {
//             sliderBar.style.left = parseInt(sliderLeftStart) + event.pageX - shiftX + 'px';

//         }


//         function moveTo(event) {
//             sliderBar.style.left = event.pageX - shiftX + 'px';
//             sliderBar.style.top = event.pageY - shiftY + 'px';
//         };
//         sliderBar.onmouseup = function() {
//             document.onmousemove = null;
//             document.onmouseup = null;
//         };


//     };




//     function getCoords(elem) { // кроме IE8-
//         var box = elem.getBoundingClientRect();

//         return {
//             top: box.top + pageYOffset,
//             left: box.left + pageXOffset
//         };

//     }
//     sliderBar.ondragstart = function() {
//         return false;
//     };
// };

//*************************************

var Hero = function(options) {
    var elem = this.elem = options.elem;
    elem.onmousedown = this.newLocation.bind(this);
    this.shiftX = this.getCoords.bind(this);
    this.shiftY = this.getCoords.bind(this);
};

Hero.prototype.newLocation = function(event) {
    var that = this;
    // var coords = getCoords(that);
    // var shiftX = this.getBoundingClientRect().left;
    // var shiftY = event.pageY - coords.top;

    // console.log(shiftX);



};

Hero.prototype.getCoords = function() {
    // var that = this;
    var box = this.getBoundingClientRect();
    return {
        top: that.getBoundingClientRect().top + pageYOffset,
        left: that.getBoundingClientRect().left + pageXOffset
    }
}

// function getCoords(elem) { // кроме IE8-
//     var box = elem.getBoundingClientRect();

//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };

// };

var hero1 = new Hero({
    elem: document.getElementById('hero1')
});
var hero2 = new Hero({
    elem: document.getElementById('hero2')
});
var hero3 = new Hero({
    elem: document.getElementById('hero3')
});
var hero4 = new Hero({
    elem: document.getElementById('hero4')
});
var hero5 = new Hero({
    elem: document.getElementById('hero5')
});
var hero6 = new Hero({
    elem: document.getElementById('hero6')
});
var hero7 = new Hero({
    elem: document.getElementById('ball3')
});

console.log(document.getElementById('hero2').getBoundingClientRect().left)