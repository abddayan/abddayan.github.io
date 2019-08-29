//***tOP BAR***/
$('#dbtLogo').on('click',function(){window.location.href="../../index.html"});
$('.xsmbtn').on('click', function(){
	if ($(this).hasClass('active')) {
		$('#nav2').hide();
	$(this).removeClass('active')
	}else {
		$('#nav2').show('slow');
	$(this).addClass('active');
	}
});
$('#nav2 ul li').on('click', function(){
	$('#nav2').hide();
});


//***SLIDES***/
Reveal.initialize({
				dependencies: [
					{ src: '../set/reveal/plugin/markdown/marked.js' },
					{ src: '../set/reveal/plugin/markdown/markdown.js' },
					{ src: '../set/reveal/plugin/notes/notes.js', async: true },
					{ src: '../set/reveal/plugin/highlight/highlight.js', async: true }
				],
				loop:true,Flags:false,autoSlide:15000,backgroundTransition:'convex',
				//parallaxBackgroundImage:"../img/elephant.jpg",parallaxBackgroundSize:'100% 100%',
				//parallaxBackgroundHorizontal:100,parallaxBackgroundVertical:50
			});
Reveal.addEventListener( 'slidechanged', function( event ) {
	// event.fragment = the fragment DOM element;
	if ( event.indexh == 0 ) {$('.dbt-btn, .xsmi').removeClass('active');$('._1st-slide').addClass('active')}else
		if ( event.indexh == 1 ) {$('.dbt-btn, .xsmi').removeClass('active');$('._2nd-slide').addClass('active')}else
			if ( event.indexh == 2 ) {$('.dbt-btn, .xsmi').removeClass('active');$('._3rd-slide').addClass('active')}else{
				$('.dbt-btn, .xsmi').removeClass('active');$('._4th-slide').addClass('active')
			}
} );
$('._1st-slide').on('click',function(){
	Reveal.slide(0);
});
$('._2nd-slide').on('click',function(){
	Reveal.slide(1);
});
$('._3rd-slide').on('click',function(){
	Reveal.slide(2);
});
$('._4th-slide').on('click',function(){
	Reveal.slide(3);
});
//
$('.prfpic').on('click',function(){
	let a= $(this).attr('src');
	$('.dbt-lightbox .inner').css('background-image','url("'+a+'")');
	$('.dbt-lightbox').fadeIn();
});
$('.dbt-lightbox .inner').on('click',function(){event.stopPropagation()})
$('.dbt-lightbox').on('click dblclick',function(){$('.dbt-lightbox').fadeOut()})
