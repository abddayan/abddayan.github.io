//
$("body").overlayScrollbars({className:"os-theme-thin-light",
	overflowBehavior : {
		x : "hidden",
		y : "scroll"
	},scrollbars: {clickScrolling:true},autoUpdate:true
});

	var keyBoardScrlCount=4;
//
//**********************************welcome screen DESIGNBIT ANIMATOR**********************************/
		/*anime({
	  targets: '#mysvgpath5 path',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  loop:true,
	  fill:'rgba(0,0,0,0)',
	  //duration:function(){return anime.random(2500,5000)},
	  delay:100,
	  //stroke:['#161666','#16A066','#16FFFF','#D358FF'],
	  opacity:[0,1]
	});*/ 
	anime({
	  targets: '#dbwelcomscreenAnimCont ellipse',
	  strokeDashoffset: [anime.setDashoffset, 0],
	  loop:true,
	  fill:'rgba(0,0,0,0)',
	  duration:3000,
	  delay:0,
	  stroke:['#161666','#16A066','#16FFFF','#D358FF','#0058FF','#EA5800','#40FF00','#DFFF00','#DF2323'],
	  opacity:[0.6,1],
	  //skewY:[10,0],
	  //rotate:'1turn',
	  easing:'easeInOutCirc',
	  direction:'alternate'
	});
	//motion path
	// Create a path `Object`
		var path = anime.path('#dbwelcomscreenAnimCont ellipse');

		var motionPath = anime({
		  targets: '#dbwelcomscreenAnimCont .mosher',
		  translateX: path('x'), // Follow the x values from the path `Object`
		  translateY: path('y'), // Follow the y values from the path `Object`
		  rotate: path('angle'),  // Follow the angle values from the path `Object`
		  loop:true,
		  duration:6000,
			delay:100,
			opacity:[0.6,1],
			  skewY:[10,0],
			  //rotate:'1turn',
			  easing:'easeInOutCubic',
			  direction:'alternate'	 
		});
			var timeline = anime.timeline({
				direction:'alternate',
				loop:true,
				autoplay:true,
				duration:1000,
				delay:100,
				//opacity:[0,1],
				easing:'easeInOutCubic',

			});
			timeline.add([ 
			/*{
			  targets: '#svg_2',
			  strokeDashoffset: [anime.setDashoffset, 0],

			},*/
			{
			  targets: '#svg_3',
			  strokeDashoffset: [anime.setDashoffset, 0],

			},
			{
			  targets: '#svg_4',
			  strokeDashoffset: [anime.setDashoffset, 0],
			},
			{
			  targets: '#svg_1',
			  strokeDashoffset: [anime.setDashoffset, 0],
			},
			{
			  targets: '#svg_5',
			  strokeDashoffset: [anime.setDashoffset, 0],
			  
			},
			{
			  targets: '#svg_7',
			  strokeDashoffset: [anime.setDashoffset, 0],
			  
			},
			{
			  targets: '#svg_8',
			  strokeDashoffset: [anime.setDashoffset, 0],

			},
			{
			  targets: '#svg_9',
			  strokeDashoffset: [anime.setDashoffset, 0],

			},
			{
			  targets: '#svg_11',
			  strokeDashoffset: [anime.setDashoffset, 0],

			},
			{
			  targets: '#svg_12',
			  strokeDashoffset: [anime.setDashoffset, 0],

			},
			{
			  targets: '#svg_14',
			  strokeDashoffset: [anime.setDashoffset, 0],

			},
			{
			  targets: '#svg_15',
			  strokeDashoffset: [anime.setDashoffset, 0],
			},
			{
			  targets: '#svg_16',
			  strokeDashoffset: [anime.setDashoffset, 0],
			},
			{
			  targets: '#svg_17',
			  strokeDashoffset: [anime.setDashoffset, 0],
			},
			{
			  targets: '#svg_18',
			  strokeDashoffset: [anime.setDashoffset, 0],
			},
			{
			  targets: '#svg_19',
			  strokeDashoffset: [anime.setDashoffset, 0],
			},
			{
			  targets: '#svg_20',
			  strokeDashoffset: [anime.setDashoffset, 0],
			},
			 ]);
//******************************end designbit animator**************************************************/

var buble5=function(targetDiv){
	// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 100;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  //document.querySelector('#welcomScreen').append(ball);
  targetDiv.append(ball);
}
// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

}
//instantiate bubbles
var welcomScreenObj=$('#welcomScreen');
buble5(welcomScreenObj);
//
//ABOUT US

anime({
  targets: '#wwa-prf-pic',
  scale: '1.2',borderRadius:'50%',
  opacity: .8,duration:3000,delay:2000,
  loop:true,direction:'reverse',
  
});
//Stories in Picures
 $(document).ready(function(){
      $('#dbtFaces').slick({
        autoplay:true,mobileFirst:true,speed:3000
        //dots:true,
        //prevArrow:,
        //nextArrow:
      });
 });
//****SERVICES***/
$('.svs-btn').on('click',function(){$('.svs-disps').slideUp();$(this).removeClass('active')})
$('#svsWDesign-mi').on('click', function(){
	$('#svs-wd-disp').slideDown();$(this).addClass('active');
});
$('#svsADesign-mi').on('click', function(){
	$('#svs-ad-disp').slideDown();$(this).addClass('active');
});
$('#svsGDesign-mi').on('click', function(){
	$('#svs-gis-disp').slideDown();$(this).addClass('active');
});

//****PROJECTS***/
$('.prj-btn').on('click',function(){$('.prj-disps').slideUp();$(this).removeClass('active')})
$('#prjWDesign-mi').on('click', function(){
	$('#prj-wd-disp').slideDown();$(this).addClass('active');
});
$('#prjADesign-mi').on('click', function(){
	$('#prj-ad-disp').slideDown();$(this).addClass('active');
});
$('#prjGDesign-mi').on('click', function(){
	$('#prj-gis-disp').slideDown();$(this).addClass('active');
});

//***TESTIMONIALS***/
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});
//***FEATUREs***/

document.querySelector(".feature-item").addEventListener("insideViewport", (event) => {
	$('.feature-item').animateCss('bounce', function() {
  		$(this).removeClass('bounce')
	});
}, false);

//***SERVICES***/
$('#dbtservices .xsmbtn').on('click', function(){
	if ($(this).hasClass('active')) {
		$('#svs-nav').hide();
	$(this).removeClass('active')
	}else {
		$('#svs-nav').show('slow');
	$(this).addClass('active');
	}
});
$('#svs-nav ul li').on('click', function(){
	$('#svs-nav').hide();
});
//***SERVICES***/
$('#dbtprojects .xsmbtn').on('click', function(){
	if ($(this).hasClass('active')) {
		$('#prj-nav').hide();
	$(this).removeClass('active')
	}else {
		$('#prj-nav').show('slow');
	$(this).addClass('active');
	}
});
$('#prj-nav ul li').on('click', function(){
	$('#prj-nav').hide();
});
//***TESTIMONY***/
document.querySelector(".testimonies").addEventListener("insideViewport", (event) => {
	$('#dbt-1testmny').animateCss('slideInLeft', function() {
  		$(this).removeClass('slideInLeft')
	});
	$('#dbt-2testmny').animateCss('slideInUp', function() {
  		$(this).removeClass('slideInUp')
	});
	$('#dbt-3testmny').animateCss('slideInRight', function() {
  		$(this).removeClass('slideInRight')
	});
}, false);
//***FOOTER***/
//address;
function initmap(dn,loc,adr) {
			$('#dbt-adrs-text').empty();
			//$('#geog-am-head h3').text(dn);
			if (adr) {
				$('#dbt-adrs-text').html(dn+", "+adr);
			}
			if (loc && !$('#dbt-map-vp').hasClass('active')) {
			map();
			}
			function map (){
		     DBTMap = L.map('dbt-map-vp',{
		      center:loc,zoom:13
		    });
		      DBTMap.zoomControl.setPosition('topright');
		    //get map data
		    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', 
		        {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
		      .addTo(DBTMap);
		      $('#dbt-map-vp').addClass('active');
		      if (dn && adr) {var dirtxt= "<b><h2 class='dbt-poptitle'>"+dn+"</h2></b><br>"+adr}else {var dirtxt="h2> class='geog-poptitle'"+dn+"</h2>";}
		 MARKER= L.marker(loc,{attribution:"Location data: Designbit"}).addTo(DBTMap);
		  MARKER.bindPopup(dirtxt).openPopup();
			var circle = L.circle(loc, {
		    color: 'red',
		    fillColor: '#00f',
		    fillOpacity: 0.5,
		    radius: 500
			}).addTo(DBTMap);
			}
		}
		//loc GAR;
		var lgara= {abs:[5.13686,-0.153871],rlt:"Designbit, Community One, Tema Metro, Greater Accra, Ghana"};
		var lgart= {abs:[5.01036,-0.01023],rlt:"Designbit, 3rd Street, Ga West, Greater Accra, Ghana"};
		$('#locGar').data('loc',[lgara,lgart]);
		//loc UWR;
		var luwr= [{abs:[11.01324,2.18361],rlt:"Upper West Region, Greater Accra."}];
		$('#locUwr').data('loc',luwr);
		$('.dbt-loc-btn').on('click', function(){
			let loc= $(this).data('loc');MARKER.remove();
			for (var i = 0; i < loc.length; i++) {
				let abs= loc[i].abs;let rlt=loc[i].rlt;
				setTimeout(function() {
					switchLoc(abs,rlt);
				}, 3000);
			}
		});
var switchLoc= function(abs,rlt) {
	L.marker(abs,{attribution:"Location data: Designbit",alt:"location marker"}).addTo(DBTMap)
		  .bindPopup(rlt).openPopup();
		  DBTMap.panTo(abs);
}
		initmap("Designbit",[5.603502, -0.185909],"3rd Street, Ga West, Greater Accra, Ghana");







/*Some scroll snippet
$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}
$('#your-element').scrollView();
*/
/*$(document).ready(function() {
    var $element = $('#bubble');
    var newText = 'In this example, bubbleText takes the inner html of $element (initially empty), and animates it into this new text. The effect is the phrase being displayed letter by letter, in place.';

    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
        repeat: Infinity,
    });
});
$(document).ready(function() {
    var $element = $('#bubble');
    var phrases = [
        'This is how bubbleText works.',
        'Animating each letter in a friendly way',
        'Thanks for seeing it :)',
        'It really matters to me ...',
        'Regards,',
        'Guedes, Washington L.',
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1000);
            },
        });
    })();
});*/