//
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
//
$("body").overlayScrollbars({className:"os-theme-thin-light",
	overflowBehavior : {
		x : "hidden",
		y : "scroll"
	},scrollbars: {clickScrolling:true},autoUpdate:true,
	callbacks:{
		onScrollStop:function(){
		}
	}
});
$('#dbtCtxm ul').overlayScrollbars({className:"os-theme-thin-light",
	overflowBehavior : {
		x : "hidden",
		y : "scroll"
	},scrollbars: {clickScrolling:true},autoUpdate:true
});
$("body").on('contextmenu',function(){event.preventDefault()});
$('.container').on('insideViewport',function(){
	if ( window.innerWidth>600 && $('body').hasClass('initialised') ) {$('#scroll-jlist-mbtn').css('display','block').addClass('active')
	}else {
		$('#scroll-jlist-mbtn').css('display','none');
		$('body').addClass('initialised');
	}
})
$('#welcomScreen').on('insideViewport',function(){$('#scroll-jlist-mbtn').css('display','none').removeClass('active');})


//
//**********************************welcome screen DESIGNBIT ANIMATOR**********************************/
	

$('#jumplist-trigger').on('click', function(){
	$('#jumplist').slideToggle('slow');
});
//Splitting();
//var tl = new TimelineLite();
var wlcmAnim= function() {
		$('#wlcm-note').animateCss('bounceInDown', function() {
		 	$(this).removeClass('bounceInDown');
		 	wnote();
		});
	$('#designpack li').each(function(i,e){
		if ( i % 2 == 0 ) {
		$(this).animateCss('bounceInRight', function() {
		  $(this).removeClass('bounceInRight')
		});

		}else {
		$(this).animateCss('bounceInLeft', function() {
		  $(this).removeClass('bounceInLeft')
		});

		}			
	});
	if ( window.innerWidth>=600) {
	$('#jumplist li').each(function(i,e){
		if ( i % 2 == 0 ) {
		$(this).animateCss('bounceInDown', function() {
		  $(this).removeClass('bounceInDown')
		});

		}else {
		$(this).animateCss('bounceInUp', function() {
		  $(this).removeClass('bounceInUp')
		});

		}			
	});
	}
}

function wnote(){
if ( !$('#wlcm-note').hasClass('active') ) {
    var $element = $('#wlcm-note span').empty();
    var newText = 'Designbit: Your one stop team for anything design.';

    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
        letterSpeed:50,
        repeat: 0,
        callback:function() {
        	let text= 'You Are Most Welcome to Designbit! <br/><br/> Your one stop team for anything design.';
        	$element.html(text).attr('title',text);
        	$('#wlcm-note').addClass('active');
		 	$('#wlcm-note').animateCss('rotateIn',function(){$(this).removeClass('rotateIn');})
        }
    });
}else{
	let a= ['wobble','rotateIn','rubberBand','swing','tada','jackInTheBox','flip'];
	let b= a[getRandomInt(a.length)];
		 	$('#wlcm-note').animateCss(b,function(){$(this).removeClass(b);})}
}
$(window).on('resize',function(){if ( window.innerWidth>600){$('#jumplist').slideDown()} })
$("#welcomScreen").on('insideViewport',function(){
wlcmAnim();
})
$('#wlcm-note').on('click',function(){document.location.href="#dbtAboutus"})
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
      $('#dbtFaces-slides').slick({
        autoplay:true,mobileFirst:true,speed:3000,swipeToSlide:true,waitForAnimate:false
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
$('#svsGrphDesign-mi').on('click', function(){
	$('#svs-grph-disp').slideDown();$(this).addClass('active');
});
$('#dbtservices .xsmbtn').on('click', function(){
	if ($(this).hasClass('active')) {
		$('#svs-nav').hide('slow');
	$(this).removeClass('active')
	}else {
		$('#svs-nav').show('slow');
	$(this).addClass('active');
	}
});
$('#svs-nav ul li').on('click', function(){
	if (window.innerWidth<=576) {$('#svs-nav').hide();}
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
$('#prjGrphDesign-mi').on('click', function(){
	$('#prj-grph-disp').slideDown();$(this).addClass('active');
});
$('#dbtprojects .xsmbtn').on('click', function(){
	if ($(this).hasClass('active')) {
		$('#prj-nav').hide('slow');
	$(this).removeClass('active')
	}else {
		$('#prj-nav').show('slow');
	$(this).addClass('active');
	}
});
$('#prj-nav ul li').on('click', function(){
	if (window.innerWidth<=576) {$('#prj-nav').hide();}
});
//***TESTIMONY***/
document.querySelector(".testimonies").addEventListener("insideViewport", (event) => {
	$('#dbt-1testmny').animateCss('bounceInLeft', function() {
  		$(this).removeClass('bounceInLeft')
	});
	$('#dbt-2testmny').animateCss('bounceInUp', function() {
  		$(this).removeClass('bounceInUp')
	});
	$('#dbt-3testmny').animateCss('bounceInRight', function() {
  		$(this).removeClass('bounceInRight')
	});
}, false);
//
//***FEATUREs***/

document.querySelector("#dbtfeatures").addEventListener("insideViewport", (event) => {
		if ( $("#dbtfeatures").hasClass('scrollup') ) {
			$('.feature-item').each(function(){
				$(this).animateCss('bounceInRight', function() {
		  		$(this).removeClass('bounceInRight')
				});
			});
		$("#dbtfeatures").removeClass('scrollup');
		}else {
		var tl = new TimelineLite();
			$('.feature-item').each(function(){
				tl.from(this, 0.74, {display:'none'});
				//let ico= $(this).find('i').get();
				$(this).animateCss('slideInLeft', function() {
		  		//$(this).animateCss('bounce',function(){$(this).removeClass('bounce')});
		  		$(this).removeClass('slideInLeft');
				});
			});

		$("#dbtfeatures").addClass('scrollup');
		}
		}, false);


//***FOOTER***/
//address;
function initmap(dn,loc,adr, callback) {
			$('#dbt-adrs-text').empty();
			//$('#geog-am-head h3').text(dn);
			if (adr) {
				$('#dbt-adrs-text').html(dn+", "+adr);
			}
			if (loc && !$('#dbt-map-vp').hasClass('active')) {
			map();
			}
			var DBTMap, MARKER, CIRCLE;
			function map (){
		     DBTMap = L.map('dbt-map-vp',{
		      center:loc,zoom:13,dragging:false,
		      visualClick:true,visualClickMode:'touch',visualClickEvents:'click contextmenu',visualClickPane:'shadowPane',
		      contextmenu: true,contextmenuWidth: 150,contextmenuItems: []
		    });
		      DBTMap.zoomControl.setPosition('topright');
		    //get map data
		    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', 
		        {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
		      .addTo(DBTMap);
		      $('#dbt-map-vp').addClass('active');
		      if (dn && adr) {var dirtxt= "<b><h2 class='dbt-poptitle'>"+dn+"</h2></b><br>"+adr}else {var dirtxt="<h2 class='geog-poptitle'>"+dn+"</h2>";}
		  MARKER= L.marker(loc,{attribution:"Location data: Designbit"}).addTo(DBTMap);
		  MARKER.bindPopup(dirtxt).openPopup();
			CIRCLE = L.circle(loc, {
		    color: 'red',
		    fillColor: '#00f',
		    fillOpacity: 0.5,
		    radius: 500
			}).addTo(DBTMap);
			}
			if (typeof callback== "function") {
				callback(DBTMap,MARKER,CIRCLE);
			}
			return DBTMap;
		}

	initmap("Designbit",[5.603502, -0.185909],"3rd Street, Ga West, Greater Accra, Ghana",function(map,marker,circle){
			$('#hotline-sm-btn').appendTo('.leaflet-top.leaflet-left');
			$('#map-dir-btn').appendTo('.leaflet-top.leaflet-right');
		//loc GAR;
		var dbtAmasama= {abs:[5.01036,-0.01023],rlt:"3rd Street, Ga West, Greater Accra, Ghana",plc:"Amasama"};
		var dbtTema= {abs:[5.13686,-0.153871],rlt:"Community One, Tema Metro, Greater Accra, Ghana",plc:"Tema"};
		var dbtWa= {abs:[11.01324,2.18361],rlt:"Upper West Region, Ghana.",plc:"Wa"};
		var dbtSavelugu= {abs:[11.01324,2.18361],rlt:"Northern Region, Ghana.",plc:"Savelugu"};
		$('#dbt-lws-amasama').data('loc',dbtAmasama);
		$('#dbt-lws-tema').data('loc',dbtTema);
		$('#dbt-lws-wa').data('loc',dbtWa);
		$('#dbt-lws-savelugu').data('loc',dbtSavelugu);
		$('.dbt-loc-btn').on('click', function(){
			let loc= $(this).data('loc');
				let abs= loc.abs;let rlt=loc.rlt;let plc=loc.plc;
					switchLoc(abs,rlt,plc);
		});
		var switchLoc= function(abs,rlt,plc,contain=false) {marker.remove();
			if ( rlt&&plc ) {var dirtxt= "<b><h2 class='dbt-poptitle'>Designbit @ "+plc+"</h2></b><br>"+rlt;
			$('#dbt-adrs-text').text('Designbit, '+rlt).animateCss('bounceInUp');
			}else {var dirtxt="<h2 class='geog-poptitle'>Designbit</h2>";
			$('#dbt-adrs-text').text('Designbit').animateCss('bounceInUp');
			}
			L.marker(abs,{attribution:"Location data: Designbit",alt:"location marker"}).addTo(map)
				  .bindPopup(dirtxt).openPopup();
				  if (contain) {
				  map.flyToBounds(contain,15,{animate:true});
				  map.setZoom(17);
    			//map.setView(contain,15,{animate:true});
				  }else {map.flyTo(abs,15,{animate:true});}
				  circle.setLatLng(abs);
		}
		//region;
		let GAR= [dbtAmasama,dbtTema];
		let UWR= [dbtWa];
		let NR= [dbtSavelugu];
		$('#dbt-lws-gar a').data({loc:GAR,bounds:[[5.01036,-0.01023],[5.13686,-0.153871]]});
		$('#dbt-lws-uwr a').data({loc:UWR,bounds:[]});
		$('#dbt-lws-nr a').data({loc:NR,bounds:[]});
		$('.dbt-lws-rgs a').on('click', function(){
			let loc= $(this).data('loc');
			let bounds= $(this).data('bounds');
				for (var i = 0; i < loc.length; i++) {
				let t= getRandomInt(4) * 1000;
				let abs= loc[i].abs;let rlt=loc[i].rlt;let plc=loc[i].plc;
					if ( i==(loc.length-1)&&(bounds.length>1) ) {
						switchLoc(abs,rlt,plc,bounds);
					}else {
					setTimeout(function() {
						switchLoc(abs,rlt,plc);
					}, t);
						
					}
				}
		});
		var cm=[{text: '<span class="ctxm-title">Visit us in : </span>',icon:"asset/img/map/spotlight-poi2.png"},'-',{text: 'Amasama', callback: function(){$('#dbt-lws-amasama').trigger('click')}}, {text: 'Tema',callback:  function(){$('#dbt-lws-tema').trigger('click')} }, '-', {text: 'Wa',callback:   function(){$('#dbt-lws-wa').trigger('click')}}, '-',{text: 'Savelugu',callback:   function(){$('#dbt-lws-savelugu').trigger('click')}}];
		 $.each(cm,function(i,e){
		   map.contextmenu.addItem(e);
		 });

	});


$('#more-lws').on('click',function(){
	$('#more-lws-disp').slideToggle();
});
$('#more-lws-disp').on('click dblclick contextmenu',function(){$(this).css('display','none')})
$('#hotline-sm-btn').on('click', function(){
	if ( $(this).hasClass('active')) {
		$('#dbt-hotline-disp').hide('slow');
	$(this).removeClass('active');
	}else {
		$('#dbt-hotline-disp').show('slow');
	$(this).addClass('active');
	}
})

//***ACTION BUTTON***/
$('#ft-a-btn-intro').on('insideViewport',function() {
	$(this).animateCss('rotateIn',function(){
		$(this).removeClass('rotateIn');
		$('#ft-action-btn').animateCss('flash',function(){$(this).removeClass('flash')})
	})
});
$('#ft-a-btn-intro').on('click',function(){
	document.location.href="tel:+233501364421";
});
//*********DBT CTXM*****/
$(function(){
	var showCtxm= function(title,list,callback,event) {
		$('.dbt-ovl').css('display','none').removeClass('active');
		$('#dbtCtxm ul').empty();
		let o= false;
		function render(d){
			let icon= /img\//gu.test(d.icon)? '<img src="'+d.icon+'"/>': '<i class="material-icons">'+d.icon+'</i>'
			o= $('<li id="'+d.id+'" title="'+d.text+'">'+icon+'<p>'+d.text+'</p></li>').appendTo('#dbtCtxm ul')
		}
		if ($.isArray(list)) {
			o= $('<h4 title="'+title+'">'+title+'</h4>').appendTo('#dbtCtxm ul')
			for (var i = 0; i < list.length; i++) {
				render(list[i]);
			}
		}else {
			o= $('<h4 title="'+title+'">'+title+'</h4>').appendTo('#dbtCtxm ul')
			render(list);
		}
		if (event) {
		let ww=window.innerWidth;
  		let wh=window.innerHeight;
		let l=event.x;
		  let t=event.y;
		  if ((ww-l)<255) {
		    $('#dbtCtxm ul').css({right:ww-l,left:'unset'})
		  }else{
		    $('#dbtCtxm ul').css({left:l,right:'unset'})
		  }
		  if ((wh-t)<300) {
		    $('#dbtCtxm ul').css({bottom:wh-t,top:'unset'})
		  }else{
		    $('#dbtCtxm ul').css({top:t,bottom:'unset'})
		  }
		}
		$('#dbtCtxm').css('display','block').addClass('active').focus();
		$('#dbtCtxm li').on('click',function(){exitCtxm();});
		if (typeof callback=="function") {callback(o.parent().parent())}
	}
	var exitCtxm= function() {
		$('#dbtCtxm').css('display','none').removeClass('active').blur();
	}
	$(window).on('click dblclick keyup',function(){
		if ( event.type=="click"||event.type=="dblclick" ) {
			exitCtxm();
		}else if ( event.which==27 ) {
			exitCtxm();
		}
	})
	$('#dbtCtxm ul').on('click',function(){event.stopPropagation()});
	//USAGE;
	//{icon:'',text:'',id:''}
	$('#dbtAboutus').on('contextmenu',function(){
		let data= [{icon:'asset/img/prfpic/abdDayan1.png',text:'Abd Dayan',id:'dbt-abdDayan'},{icon:'account_circle',text:'Abdul Rauf',id:'dbt-abdulRauf'},{icon:'account_circle',text:'Abdul Rahim',id:'dbt-abdulRahim'},{icon:'account_circle',text:'Issah',id:'dbt-issah'}];
		let title= 'Get Personal';
		showCtxm(title,data,function(o){
			o.find('#dbt-abdDayan').on('click',function(){$('#dbtFaces-slides').slick('slickGoTo',0,true);$('#dbt-abt-abddayan').animateCss('flash',function(){$(this).removeClass('flash')})});
			o.find('#dbt-abdulRauf').on('click',function(){$('#dbtFaces-slides').slick('slickGoTo',1,true);$('#dbt-abt-abdulrauf').animateCss('flash',function(){$(this).removeClass('flash')})});
			o.find('#dbt-abdulRahim').on('click',function(){$('#dbtFaces-slides').slick('slickGoTo',2,true);$('#dbt-abt-abdulrahim').animateCss('flash',function(){$(this).removeClass('flash')})});
			o.find('#dbt-issah').on('click',function(){$('#dbtFaces-slides').slick('slickGoTo',3,true);$('#dbt-abt-issah').animateCss('flash',function(){$(this).removeClass('flash')})});
		},event);
	});
	$('#dbtservices').on('contextmenu',function(){
		let data= [{icon:'account_circle',text:'Web Design',id:'ctxm-webdesign'},{icon:'account_circle',text:'Architectural Design',id:'ctxm-arctdesign'},{icon:'account_circle',text:'GIS and Map Design',id:'ctxm-gismapdesign'},{icon:'account_circle',text:'Graphic Design',id:'ctxm-grphdesign'}];
		let title= 'Our Serice In:';
		showCtxm(title,data,function(o){
			o.find('#ctxm-webdesign').on('click',function(){$('#svsWDesign-mi').trigger('click')});
			o.find('#ctxm-arctdesign').on('click',function(){$('#svsADesign-mi').trigger('click')});
			o.find('#ctxm-gismapdesign').on('click',function(){$('#svsGDesign-mi').trigger('click')});
			o.find('#ctxm-grphdesign').on('click',function(){$('#svsGrphDesign-mi').trigger('click')});
		},event);
	});
	$('#dbtprojects').on('contextmenu',function(){
		let data= [{icon:'account_circle',text:'Web Design',id:'ctxm-webdesign'},{icon:'account_circle',text:'Architectural Design',id:'ctxm-arctdesign'},{icon:'account_circle',text:'GIS and Map Design',id:'ctxm-gismapdesign'},{icon:'account_circle',text:'Graphic Design',id:'ctxm-grphdesign'}];
		let title= 'Our Projects In:';
		showCtxm(title,data,function(o){
			o.find('#ctxm-webdesign').on('click',function(){$('#prjWDesign-mi').trigger('click')});
			o.find('#ctxm-arctdesign').on('click',function(){$('#prjADesign-mi').trigger('click')});
			o.find('#ctxm-gismapdesign').on('click',function(){$('#prjGDesign-mi').trigger('click')});
			o.find('#ctxm-grphdesign').on('click',function(){$('#prjGrphDesign-mi').trigger('click')});
		},event);
	});
	$('#welcomScreen').on('contextmenu',function(){
		let data= [{icon:'account_circle',text:'Web Design',id:'ctxm-webdesign'},{icon:'account_circle',text:'Architectural Design',id:'ctxm-arctdesign'},{icon:'account_circle',text:'GIS and Map Design',id:'ctxm-gismapdesign'},{icon:'account_circle',text:'Graphic Design',id:'ctxm-grphdesign'}];
		let title= 'Your Formidable Partner In:';
		showCtxm(title,data,function(o){
			o.find('#ctxm-webdesign').on('click',function(){wlcmpackLiHover($($('#designpack li')[0])) });
			o.find('#ctxm-arctdesign').on('click',function(){wlcmpackLiHover($($('#designpack li')[1])) });
			o.find('#ctxm-gismapdesign').on('click',function(){wlcmpackLiHover($($('#designpack li')[2])) });
			o.find('#ctxm-grphdesign').on('click',function(){ wlcmpackLiHover($($('#designpack li')[3])) });
		},event);
	});
	function wlcmpackLiHover(o){
		$('#designpack li').removeClass('designpack-li-hovered');
		o.addClass('designpack-li-hovered');
		setTimeout(function() {o.removeClass('designpack-li-hovered')}, 3000);
	}
	//
	$('#scroll-jlist-mbtn').on('click',function(){
		let data= [{icon:'account_circle',text:'Features',id:'ctxm-features'},{icon:'account_circle',text:'Services',id:'ctxm-services'},{icon:'account_circle',text:'Projects',id:'ctxm-projects'},{icon:'account_circle',text:'Happy Customers',id:'ctxm-testimony'}];
		let title= 'Jump To:';
		showCtxm(title,data,function(o){
			o.find('#ctxm-features').on('click',function(){document.location.href='#dbtfeatures'; });
			o.find('#ctxm-services').on('click',function(){document.location.href='#dbtservices'; });
			o.find('#ctxm-projects').on('click',function(){document.location.href='#dbtprojects'; });
			o.find('#ctxm-testimony').on('click',function(){ document.location.href='#dbtestimony'; });
		setTimeout(function() {$('#dbtCtxm').css('display','block').addClass('active').focus();}, 100);
		},event);
	})

})
//***directions***/
$(function() {
var locAmasama= {
	title:"Lead Me To Amasama",
	text:"Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta."
}
var locTema= {
	title:"Lead Me To Tema",
	text:"Lorem ipsum dolor sit amet, consectetur. Pellentesque in ipsum id orci porta dapibus adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta."
}
var locWa= {
	title:"Lead Me To Wa",
	text:"Praesent sapien massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta."
}
var locSavelugu= {
	title:"Lead Me To Savelugu",
	text:"Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
}
$($('#dbtDir-1 li')[0]).data('loc',locAmasama);
$($('#dbtDir-1 li')[1]).data('loc',locTema);
$($('#dbtDir-1 li')[2]).data('loc',locWa);
$($('#dbtDir-1 li')[3]).data('loc',locSavelugu);
$('#dbtDir-1 li').on('click', function() {
	let a= $(this).data('loc');
	let b= a.title;
	let c= a.text;
	$('#dbtDir-2 li h5').html(b).attr('title',b);
	$('#dbtDir-2 li p').html(c).attr('title',c.substr(0,50)+'...');
	switchDir();
});
function switchDir() {
	if ($('#dbtDir-2 li').hasClass('ls')) {
		$('#dbtDir-2 li h5').animateCss('slideInRight',function(){$(this).removeClass('slideInRight')});
		$('#dbtDir-2 li p').animateCss('slideInLeft',function(){$(this).removeClass('slideInLeft')});
	$('#dbtDir-2 li').removeClass('ls')
	}else {
		$('#dbtDir-2 li h5').animateCss('slideInLeft',function(){$(this).removeClass('slideInLeft')});
		$('#dbtDir-2 li p').animateCss('slideInRight',function(){$(this).removeClass('slideInRight')});
	$('#dbtDir-2 li').addClass('ls')
	}
}
function showDbtDir() {
	$($('#dbtDir-1 li')[0]).trigger('click');
	$('.dbt-ovl').css('display','none').removeClass('active');
	$('#dbtDir-disp').css('display','block').addClass('active');
}
function exitDbtDir() {
	$('#dbtDir-disp').css('display','none').removeClass('active');
}
$('#map-dir-btn').on('click',function(){
	showDbtDir();
});
$('#dbtDir-disp').on('click dblclick contextmenu',function() {
	exitDbtDir()
});
$('#dbtDir-inner').on('click',function() {
	event.stopPropagation()
});

})

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