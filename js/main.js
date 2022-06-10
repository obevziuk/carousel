
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({repeat: 0});
var curIndex = 0;

//Test data
let testData = [
	{"index":0, "title":"testImage_0"},
	{"index":1, "title":"testImage_1"},
	{"index":2, "title":"testImage_2"},
	{"index":3, "title":"testImage_3"},
	{"index":4, "title":"testImage_4"},
	{"index":5, "title":"testImage_5"},
	{"index":6, "title":"testImage_6"},
	{"index":7, "title":"testImage_7"},
	{"index":8, "title":"testImage_8"},
	{"index":9, "title":"testImage_9"},
	{"index":10, "title":"testImage_10", "idleAnimateLvl": 1},
	{"index":11, "title":"testImage_11"},
	{"index":12, "title":"testImage_12"},
	{"index":13, "title":"testImage_13"},
	{"index":14, "title":"testImage_14"},
	{"index":15, "title":"testImage_15"},
	{"index":16, "title":"testImage_16"},
	{"index":17, "title":"testImage_17"},
	{"index":18, "title":"testImage_18"},
	{"index":19, "title":"testImage_19"},
	{"index":20, "title":"testImage_20"},
	{"index":21, "title":"testImage_21"},
	{"index":22, "title":"testImage_22"},
	{"index":23, "title":"testImage_23", "idleAnimateLvl": 2},
	{"index":24, "title":"testImage_24"},
	{"index":25, "title":"testImage_25"},
	{"index":26, "title":"testImage_26"},
	{"index":27, "title":"testImage_27"},
	{"index":28, "title":"testImage_28"},
	{"index":29, "title":"testImage_29"},
	{"index":30, "title":"testImage_30"},
	{"index":31, "title":"testImage_31"},
	{"index":32, "title":"testImage_32", "idleAnimateLvl": 3},
	{"index":33, "title":"testImage_33"},
	{"index":34, "title":"testImage_34"},
	{"index":35, "title":"testImage_35"},
	{"index":36, "title":"testImage_36"},
	{"index":37, "title":"testImage_37"},
	{"index":38, "title":"testImage_38"},
	{"index":39, "title":"testImage_39"},
	{"index":40, "title":"testImage_40"},
	{"index":41, "title":"testImage_41"},
	{"index":42, "title":"testImage_42"},
	{"index":43, "title":"testImage_43"},
	{"index":44, "title":"testImage_44"},
	{"index":45, "title":"testImage_45"},
	{"index":46, "title":"testImage_46"},
	{"index":47, "title":"testImage_47"},
	{"index":48, "title":"testImage_48"},
	{"index":49, "title":"testImage_49"},
	{"index":50, "title":"testImage_50"}
]


$(document).ready(function(){
	generateCarousel() // Generate slides from testData
	$('.carousel').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
	centerMode: true,
  autoplay: false,
	speed: 300,
	swipeToSlide: true,
	waitForAnimate:false,
  autoplaySpeed: 2000,
	edgeFriction: 0.85,
	centerPadding: '1px',
	prevArrow: '<button class="slick-prev" aria-label="<" type="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
	nextArrow: '<button class="slick-next" aria-label=">" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
});
});

function generateCarousel() {
	var carousel = document.getElementsByClassName('carousel')[0];
		for (let i = 0; i < testData.length; i++) {
			var div = document.createElement('div');
			var img = document.createElement('img');
			img.src = 'img/testImage_' + i + '.png';
			div.appendChild(img);
			carousel.appendChild(div);
		}
}

function applyAnimationToActiveSlide(animationType) {
	var anim = null
	if (animationType == 1) {
		var anim = gsap.fromTo('.slick-current img', {
									clipPath: "inset(50% 50% 50% 50%)"}, {
									duration: 1,
									clipPath: "inset(0% 0% 0% 0%)"
						});
	} else if (animationType == 2) {
		var anim = tl.to('.slick-current img', 0.5, {y: 0, scale:0})
			  				 .to('.slick-current img', 0.3, {y: 50})
								 .to('.slick-current img', 0.5, {x: -50, scale:1})
								 .to('.slick-current img', 0.5, {y: 0})
								 .to('.slick-current img', 0.5, {x: 0, scale:1})
	} else if (animationType == 3) {
		$( ".slick-current img" ).addClass( "glitch" );
		var anim = tl.to('.glitch', 0.1, {skewX:70,ease: Power4.easeInOut})
								 .to('.glitch', 0.04, {skewX:0,ease: Power4.easeInOut})
								 .to('.glitch', 0.04, {opacity:0})
								 .to('.glitch', 0.04, {opacity:1})
								 .to('.glitch', 0.04, {x:-20})
								 .to('.glitch', 0.04, {x:0})
								 .to('.glitch', 0.02, {scaleY:1.5,ease: Power4.easeInOut})
								 .to('.glitch', 0.04, {scaleY:1,ease: Power4.easeInOut})
	}
		document.querySelector(".animIn_mc").addEventListener("click", () => anim.restart());
		document.querySelector(".animOut_mc").addEventListener("click", () => anim.reverse());
	}

$('.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide){
	if (testData[currentSlide].idleAnimateLvl && !testData[currentSlide].idleAnimateLvl.isNaN) {
			var animationTypeToApply = testData[currentSlide].idleAnimateLvl;
			applyAnimationToActiveSlide(animationTypeToApply);
		}
			console.log('Slide Index: ' + currentSlide);
			console.log('Total Slides: ' + slick.slideCount);
});

function addSlide(){
	let theRandomNumber = Math.floor(Math.random() * 49) + 1;
	$('.carousel').slick('slickAdd',"<div><div><img src='img/testImage_" + theRandomNumber + ".png'> </div> </div>");
}

document.querySelector(".addSlide").addEventListener("click", addSlide);
document.querySelector(".removeSlide").addEventListener("click", () => $('.carousel').slick('slickRemove', curIndex));

document.querySelector(".lessSlides").addEventListener("click", showLessSlides);
document.querySelector(".moreSlides").addEventListener("click", showMoreSlides);

function showLessSlides(){
	$('.carousel').slick('slickSetOption', 'slidesToShow', 5, 'centerMode', true);
}

function showMoreSlides(){
	$('.carousel').slick('slickSetOption', 'slidesToShow', 7, 'centerMode', true);
}
