//
//Main background slideshow BEGINS
		$("body").vegas({
				delay: 3000,
			    timer: true,
			    shuffle: true,
			    firstTransition: 'fade',
			    firstTransitionDuration: 5000,
			    transition: 'random',
			    transitionDuration: 5000, // or"auto",
			    cover: true,
			    color: "rgba(0,0,0,0.5)",
			    overlay: 'images/overlays/08.png',
			    animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ],
			    // or animation: 'kenburns',
			    slides: [
			        { src:'images/dbSlides/ad/1a.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/ad/2a.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/ad/1b.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/ad/2b.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/ad/1c.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/ad/2g.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/ad/1e.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/ad/2f.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/md/4.jpeg', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/md/5.jpeg', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/md/1.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/md/3.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/md/2.PNG', info: "Some information about this picture will be displayed here! Users can find out more." },
			        { src:'images/dbSlides/md/7.jpg', info: "Some information about this picture will be displayed here! Users can find out more." }
			    ],
			    /* init: function (globalSettings) {
			        alert("Init");
			    },
			    play: function (index, slideSettings) {
			        alert("Play");
			    },*/
			    walk: function (index, slideSettings) {
			    	var imgName=slideSettings.src; //alert(slideSettings.src)
			    	var inform;
			    	var vtype= typeof imgName
			    	if(imgName){ imgName=slideSettings.src; inform=slideSettings.info} else {imgName=slideSettings.video.src; inform=slideSettings.video.info}
			        document.getElementById("ImgTitle").innerHTML="Slide index " + index + " image " + imgName;
			    	$('#ImgNcontent').html(inform)
			    },
			    /*end:[a function to call on end of all slides]...,
			    pause: [a function to call on end of all slides]...*/
			    
				});
			//next and previous button
				$('#dbprev').on('click', function () {
				    $('body').vegas('options', 'transition', 'slideRight2').vegas('previous');
				});

				$('#dbnext').on('click', function () {
				    $('body').vegas('options', 'transition', 'slideLeft2').vegas('next');
				});
			//check for a Navigator
				$.vegas.isVideoCompatible = function () {
				    var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
				    return !devices.test(navigator.userAgent);
				}
			//Slide Controls for play, pause, next, previous and more;
			$('#dbpause, #dbplay').on('click', function () {
				$('#dbpause').toggle(500);
				$('#dbplay').toggle(500);
				$('body').vegas('toggle');
			});
			$('#dbIcon').on('click', function(){
				$('#aboutUs').toggle(500);
				$('#aboutUs').focus(); $('body').blur()
			});
    		//Change slides set to only Web Design set
    		$('#wdMenu').on('click', function(){
    		$('body').vegas('options', 'slides',[]);//alert(slides[slides.length-1].src)
    			var wdSlides=$('body').vegas('options', 'slides');
    			wdSlides.push({ src: "images/wd/afterRamadan3.jpg",info:"additon: RAMADAN KAREEM" },
				      { src: "images/wd/Effects of Ramadan on Productivity and Consumption.jpeg",info:"additon: RAMADAN KAREEM" },
				      { src: "images/wd/afterRamadan2.jpeg",transition: 'slideRight2', info:"additon: RAMADAN KAREEM" },
				      { src: "images/wd/GhMYC-31-5-18-img1.jpeg",info:"additon: RAMADAN KAREEM" },
				      { video: {
			                src: [
			                    'videos/IMG_0195.mp4',
			                    //'/videos/video.webm',
			                    //'/videos/video.ogv'
			                ],
			                loop: false,
			                mute: true,
			                info:"additon: RAMADAN KAREEM"
			            },
			            delay: 30000,
			            transition: 'slideLeft',
			            
			        });
    			$('body').vegas('options', 'transition', 'random').vegas('next');
    		});
    		//Change slides set to only Architectural Design set
    		$('#adMenu').on('click', function(){
    		$('body').vegas('options', 'slides',[]);//alert(slides[slides.length-1].src)
    			var wdSlides=$('body').vegas('options', 'slides');
    			wdSlides.push({ src:'images/dbSlides/ad/1a.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    				{ src:'images/dbSlides/ad/1b.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/1bv.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/1cv.png',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/1c.png',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/1d.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/1e.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/1f.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/2a.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/2b.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/2c.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/2c.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/2d.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/2e.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/2f.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{ src:'images/dbSlides/ad/2g.PNG',info: "Some information about this picture will be displayed here! Users can find out more."})
    			;
    			$('body').vegas('options', 'transition', 'random').vegas('next');
    		});
    		//Change slides set to only Map Design set
    		$('#mdMenu').on('click', function(){
    		$('body').vegas('options', 'slides',[]);//alert(slides[slides.length-1].src)
    			var wdSlides=$('body').vegas('options', 'slides');
    			wdSlides.push({ src:'images/dbSlides/md/1.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    				{src:'images/dbSlides/md/2.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{src:'images/dbSlides/md/3.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{src:'images/dbSlides/md/3.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{src:'images/dbSlides/md/4.jpeg',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{src:'images/dbSlides/md/5.jpeg',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{src:'images/dbSlides/md/6.png',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{src:'images/dbSlides/md/7.jpg',info: "Some information about this picture will be displayed here! Users can find out more."},
    			{src:'images/dbSlides/md/8.PNG',info: "Some information about this picture will be displayed here! Users can find out more."},
    			);
    			$('body').vegas('options', 'transition', 'random').vegas('next');
    		});
    		//
/*			var slides = $('body').vegas('options', 'slides')
			//alert(slides[0].src)
//creating indicators;
			var indexIds=[];
			var indexArray=[];
			for (var i = 0; i < slides.length; i++) {
				//slides[i]
				var indDiv= document.createElement('DIV');
			 indDiv.setAttribute("class", "slidIndicator");
			 indDiv.setAttribute("id", "index"+i);
			 var indCont= document.getElementById('siContainer');
			 indCont.appendChild(indDiv);
			 indexIds.push("index"+i);
			 indexArray.push(i);//alert(indexIds[i])
			}
			*/
//About Us***********/
//Slides 
$(document).ready(function(){
			  $('#abtContContainer').slick({
			    accessibility: true,
			    adaptiveHeight:true,
			    autoplay:true,
			    speed:3000,
			    autoplaySpeed: 100,
			    arrows: false,
			    //asNavFor: //(ID or Class Name),
			    //appendArrows: //Default: $(element) Change where the navigation arrows are attached (Selector, htmlString, Array, Element, jQuery object),
			    //appendDots: // Default: $(element) Change where the navigation dots are attached (Selector, htmlString, Array, Element, jQuery object),
			    pauseOnHover: true,
			    dots: false,
			    //dotsClass: //Default:'slick-dots' Class for slide indicator dots containe
			    slidesToShow: 1,
			    //fade: true,
  				//cssEase: 'ease-in-out',
  				//centerMode:true
  				draggable:true,
  				focusOnSelect:true,
  				easing: 'easeOutBounce',
  				infinite: true,
  				initialSlide: 0,
  				mobileFirst: true,
  				lazyLoad: 'progressive', // or 'ondemand'
  				pauseOnFocus: true,
  				pauseOnHover: true,
  				respondTo: 'slider',
  				//responsive:  //Object containing breakpoints and settings objects (see demo). Enables settings sets at given screen width. Set settings to "unslick" instead of an object to disable slick at a given breakpoint.
  				swipe: true,
  				swipeToSlide: true,
  				touchMove: true,
  				touchThreshold: 2,
  				useCSS: true,
  				useTransform: true,
  				variableWidth: false,
  				vertical: true,
  				verticalSwiping: true,
  				rtl:false,
  				waitForAnimate: true,
  				zIndex:1000,

			  });
				/*// On swipe event
				$('#abtContContainer').on('swipe', function(event, slick, direction){
				  alert(direction);
				  // left
				});

				// On edge hit
				$('#abtContContainer').on('edge', function(event, slick, direction){
				  alert('edge was hit')
				});

				// On before slide change
				$('#abtContContainer').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				  alert(nextSlide+event+slick+currentSlide);
				});*/
				jQuery.easing.def = "easeOutBounce"
			});
//
//Get in Touch
			$('#abtUsGetIntouch').on('click', function(){
				var getInTach = $('#contactSlot');
			$('#contactSlot').css('border', 'solid 2px red');
			$("#contactSlot").addClass("redBlink");//alert($("#contactSlot").hasClass("redBlink"));
				setInterval(function(){
					if ($("#contactSlot").hasClass("redBlink")) {
					$('#contactSlot').css('border', 'solid 2px yellow');
					$("#contactSlot").removeClass("redBlink");
					$("#contactSlot").addClass("yelBlink");

				} else if ($("#contactSlot").hasClass("yelBlink")) {
					$('#contactSlot').css('border', 'solid 2px red');
					$("#contactSlot").removeClass("yelBlink");
					$("#contactSlot").addClass("redBlink");

				}
				}, 100);
				setTimeout(function(){//alert("here")
					$("#contactSlot").removeClass();
					$("#contactSlot").css('border', 'solid 1px transparent');
				}, 1000)
			});
//
		//Popup Overlay
				$(document).ready(function() {
	      // Initialize the plugin
	      $('#my_popup').popup({
	      	autoopen: false,
	      	openelement: "#dbMsg",
	      	focuselement:"#dbMsgFrom",
	      	keepfocus: true,
	      	blur: false,
	      	escape: true,
	      	scrolllock: true,
	      	background: true,
	      	opacity: 0.9,
	      });

	    });
//
//Popup Overlay Textarea input field
			$(document).ready(function(){
				 $("#dbMainMessage").jqte({
				 	b: true,
					br: false,
					//button: "SEND",
					center: true,
					color: false,
					/*css: "dbMainMessage",*/
					fsize: true,
					fsizes: ["10", "15", "20"],
					funit: "px",
					format: true,
					formats: [
							  ["p","Normal"],
							  /*["h1","Header 1"],*/
							  ["h2","Header 2"],
							  ["h3","Header 3"],
							  ["h4","Header 4"],
							 /* ["h5","Header 5"],
							  ["h6","Header 6"],
							  ["pre","Preformatted"]*/
							 ],
					i: false,
					indent: false,
					link: true,
					linktypes: ["Web URL", "E-mail", "Picture"],
					left: true,
					ol: true,
					outdent: false,
					p: true,
					placeholder: "Please Write Your Message",
					remove: false,
					right: true,
					rule: false,
					source: false,
					status: true,
					sub: false,
					strike: false,
					sup: false,
					title: true,
					/*titletext:[
						        {title:"Text Format"},
						        {title:"Font Size"},
						        {title:"Select Color"},
						        {title:"Bold",hotkey:"B"},
						        {title:"Italic",hotkey:"I"},
						        {title:"Underline",hotkey:"U"},
						        {title:"Ordered List",hotkey:"."},
						        {title:"Unordered List",hotkey:","},
						        {title:"Subscript",hotkey:"down arrow"},
						        {title:"Superscript",hotkey:"up arrow"},
						        {title:"Outdent",hotkey:"left arrow"},
						        {title:"Indent",hotkey:"right arrow"},
						        {title:"Justify Left"},
						        {title:"Justify Center"},
						        {title:"Justify Right"},
						        {title:"Strike Through",hotkey:"K"},
						        {title:"Add Link",hotkey:"L"},
						        {title:"Remove Link",hotkey:""},
						        {title:"Cleaner Style",hotkey:"Delete"},
						        {title:"Horizontal Rule",hotkey:"H"},
						        {title:"Source",hotkey:""}
						     ],*/
					u: false,
					ul: false,
					unlink: true
				 });
			});


