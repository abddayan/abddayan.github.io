//
//Title
//Gallery
			var galleryFabr=new fabric.Canvas('galleryTitle');
			var galleryTitle=new fabric.Text("Gallery",{
				fontFamily: 'Delicius',
				fontSize: 20,
				top:0,
				left:0,
				fill: 'green',
				fontStyle: 'italic',
				shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
				 stroke: 'red',
  				strokeWidth: 1,
			});
			//galleryFabr.add(galleryTitle);
//
			function galleryAnim(){
				galleryTitle.set({angle:0,opacity:1, fill:'green',stroke:'red'})
				//text.set({angle:0,stroke:'red'})
						galleryTitle.animate({angle: -10, opacity:0.5,fill:'red',stroke:'green'}, {
				//from: //starting value
			  onChange: galleryFabr.renderAll.bind(galleryFabr),
			  duration: 5000,
			  //onComplete: //function
			  easing: fabric.util.ease.easeIn,

			});			
			}			setInterval(galleryAnim,5000);
						galleryAnim();
						galleryFabr.add(galleryTitle);
$(document).ready(function(){
			 	$('#galleryPane').slick({
				   //slidesToShow: 1,
				  slidesToScroll: 5,
				  arrows: false,
				  fade: true,
				  asNavFor: '#dbthumbnailA,#dbthumbnailB',
				  //autoplay:true,
				  //centerMode: true,,
				  draggable: true,
				  swipe: true,
				  swipeToSlide: true,
				  touchMove: true,

				});

			  $('#dbthumbnailA').slick({
				 slidesToShow: 5,
				  slidesToScroll: 5,
				  asNavFor: '#galleryPane',
				  dots: false,
				  centerMode: true,
				  focusOnSelect: true,
				  rows:1,
				  draggable: true,
				  swipe: true,
				  swipeToSlide: true,
				  mobileFirst: true,
				  touchMove: true,
				  autoplay:true,
				  autoplaySpeed: 10000,
				  responsive: [{
			 			breakpoint: 1024,
			 			settings: {
			 				slidesToShow: 7,
			 				slidesToScroll: 7,
			 			}
			 		}, {
			 			breakpoint: 640,
			 			settings: {
			 				slidesToShow: 5,
			 				slidesToScroll: 5,
						}
			 		}, {
			 			breakpoint: 420,
			 			settings: {
			 				slidesToShow: 2,
			 				slidesToScroll: 2,
					}
			 		}],
			 		respondTo: 'min'
				});

			  $('#dbthumbnailB').slick({
				 slidesToShow: 7,
				  slidesToScroll: 7,
				  asNavFor: '#galleryPane',
				  dots: false,
				  centerMode: true,
				  focusOnSelect: true,
				  rows:1,
				  draggable: true,
				  swipe: true,
				  swipeToSlide: true,
				  mobileFirst: true,
				  touchMove: true,
				  autoplay: true,
				  autoplaySpeed: 15000,
				  responsive: [{
			 			breakpoint: 1024,
			 			settings: {
			 				slidesToShow: 10,
			 				slidesToScroll: 10,
			 			}
			 		}, {
			 			breakpoint: 640,
			 			settings: {
			 				slidesToShow: 7,
			 				slidesToScroll: 7,
						}
			 		}, {
			 			breakpoint: 420,
			 			settings: {
			 				slidesToShow: 3,
			 				slidesToScroll: 3,
					}
			 		}],
			 		respondTo: 'min'
				});

/*			  $('#galleryPane').on('afterChange', function(event, slick, currentSlide) {//alert('here')
 	//$('#dbthumbnailA,#dbthumbnailB').slick('slickGoTo', currentSlide);
 	if (event.target==$('#dbthumbnailA div h3')) {
 	var currrentNavSlideElemA = '#dbthumbnailA .slick-slide[data-slick-index="' + currentSlide + '"]';
 	$('#dbthumbnailA .slick-slide.is-active').removeClass('is-active');
 	$(currrentNavSlideElemA).addClass('is-active');//alert('year')
 }else{
 	var currrentNavSlideElemB = '#dbthumbnailB .slick-slide[data-slick-index="' + currentSlide + '"]';
 	$('#dbthumbnailB .slick-slide.is-active').removeClass('is-active');
 	$(currrentNavSlideElemB).addClass('is-active');
 }
 	
 	
 });*/

//prevent browser context menu
			$('#gallery').on('contextmenu', function(){return false});

});
//dbNotifications()
//
//Notifications

//to be deleted
/*
var newFabr=new fabric.StaticCanvas('dbIcon');
			var brandName= new fabric.Text("Designbit",{
				 fontFamily: 'Delicius',
				 fontSize: 40,
				top:0,
				left:0,
				fill: 'green',
				fontStyle: 'italic',
				shadow: 'rgba(0,0,0,0.3) 5px 5px 5px',
				 stroke: '#ff1318',
  				strokeWidth: 1,
  				//textBackgroundColor: 'rgba(0,0,0,0.3)'

			})
			var ring=new fabric.Ellipse({
				top:25,
				left:85,
				width:100,
				stroke: 'indigo',
			    fill: 'transparent',
			    selectable: true,
			    originX: 'center', 
			    originY: 'center',
			     rx: 100,
			    ry: 25
			})
			

			function textOpacity(){
				brandName.set({angle:0,opacity:1})
				//text.set({angle:0,stroke:'red'})
						brandName.animate({angle: 0, opacity:0.5}, {
				//from: //starting value
			  onChange: newFabr.renderAll.bind(newFabr),
			  duration: 5000,
			  //onComplete: //function
			  easing: fabric.util.ease.easeOutBounce,

			});
			}
			setInterval(textOpacity,5000);
						textOpacity()
						newFabr.add(ring);
						newFabr.add(brandName);
//*/