
$('#previewKeyInp').on('mouseover',function(){
	$(this).focus();
});
document.write('<script type="text/javascript" src="data/prjkey.js"></script>');

$(function(){
	$('#previewKeyInp').on('keyup',function(){
		let a= $(this).val();$('#req-status').fadeOut()
	if (event.which == 13) {
		if (a.startsWith("DGT")) {
		action(prjkey);
		}
	}
	function action(d) {
			if(d[a]){
			localStorage.setItem('ppkey',a);
				if (d[a].enabled) {
				let b= d[a].name;
				let c= d[a].initDate;c="Set for review since "+new Date(c).toGMTString();
				let e= d[a].owner;
				let f= d[a].url;
				let o='<h3>Success</h3>\
			<li><label>Name: </label><span>'+b+'</span></li>\
			<li><label>Status: </label><span>'+c+'</span></li>\
			<li><label>Owner: </label><span>'+e+'</span></li>\
			<li></li>\
			<li>We'+"'"+'re fetching the preview...</li>';
			$('#suxmodal ul').html(o);$('#suxmodal').fadeIn();
			$('body').data('url',f);
				if (d[a].note) {showNotice(d[a].note,15000,function(){
					document.location.href=f;
				}
				)}else{document.location.href=f;}

				}else{
				if (d[a].note) {showNotice(d[a].note,10000)}
			$('#req-status').html("Sorry!! This project is not open to preview at the moment! Please contact your developer.<br><i>Thank you.</i>").addClass("req-disabled").fadeIn();
				}
			}else{
			$('#req-status').html("Sorry!! The key is inalid!").addClass("req-invalid").fadeIn();

			}
	}
});

setInterval(function(){
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
	let a= ['1px 2px 1px rgba(0,0,0,0.2)','1px 2px 1px green','1px 2px 1px red','1px 2px 1px blue'];
	let b= getRandomInt(4);
	document.querySelector('#top-bar h1').style.textShadow=a[b];
},400);
let nobj= 'noticeboard obj';
	var showNotice= function(note,time=1500,callback){
		$('#abd-notice-board .content').html(note);
		$('#abd-notice-board .content').slideDown();
		$('#abd-notice-board').addClass('active');
		 nobj= setTimeout(function() {hideNotice(0,callback);}, time);
	}
	var hideNotice= function(delay=0,callback) {
		nobj= setTimeout(function() {
		$('#abd-notice-board .content').slideUp();
		$('#abd-notice-board .content').empty();
		$('#abd-notice-board').removeClass('acitve');
		 	if (typeof callback == 'function') {callback();}else if(d=$('body').data('url')) {document.location.href=d;}
		}, delay);
	}
	$('#abd-notice-board .content').on('dblclick contextmenu', function(){
		hideNotice();
	});
	var pauseNotice= function(){window.clearTimeout(nobj)}
	$('#abd-notice-board .content').on('mouseover',function(){pauseNotice();})
	$('#abd-notice-board .content').on('mouseout',function(){hideNotice(5000)});
})	

$(function(){

var ctxmPositioner= function(e) {
		if (e) {
		let ww=window.innerWidth;
  		let wh=window.innerHeight;
		let l=e.x;
		  let t=e.y;
		  if ((ww-l)<200) {
		  	if ( l<200 ) {
		  		let a= ww - 200;let b= a/2;let c= (200/l)*10;let d= b+c;
		  		$('#abdul-contact ul').css({left:d});
		  	}else {
		  		let a= ww-200;
		    	$('#abdul-contact ul').css({left:a});
		  	}
		  }else{
		    $('#abdul-contact ul').css({left:l})
		  }
		  if ((wh-t)<150) {
		  	if ( t<150) {
		  		let a= wh - 200;let b= a/2;let c= (200/t)*10;let d= b+c;
		  		$('#abdul-contact ul').css({top:d});
		  	}else {
		  		let a= wh-150;
		    	$('#abdul-contact ul').css({top:a})
		  	}
		  }else{
		    $('#abdul-contact ul').css({top:t})
		  }
		}
		return true;
}
$('body').on('click focusout',function(){$('#abdul-contact ul').css('display','none').focusout();});
$(window).on('keyup',function(){if (event.which==27) {$('#abdul-contact ul').css('display','none').focusout();}})
$('#abdul-contact ul').on('click',function(){event.stopPropagation()})
$('body').on('contextmenu',function(){
	event.preventDefault();
	if (ctxmPositioner(event)) {
		$('#abdul-contact ul').css('display','block').focusin();
	}
})
});
if (d=localStorage.getItem('ppkey')) {
	$('#previewKeyInp').attr('value',d);
	$('#req-status').html("Huh! I though of this key. If I'm right press Enter to continue</i>").addClass("req-disabled").fadeIn();
}