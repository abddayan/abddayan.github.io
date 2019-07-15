
$('#previewKeyInp').on('mouseover',function(){
	$(this).focus();
});
$('#previewKeyInp').on('keyup',function(){
		let a= $(this).val();$('#req-status').fadeOut()
	if (event.which == 13) {
		if (a.startsWith("DGT")) {
		$.post("data/prjkey.json").done(function (r) {
			action(r);
		});

		}
	}
	function action(d) {
			if(d[a]){
				if (d[a].enabled) {
				let b= d[a].name;
				let c= d[a].initDate;c="Updated "+c;
				let e= d[a].owner;
				let f= d[a].url;
				//trigger success modal;
				let o='<h3>Success</h3>\
			<li><label>Name: </label><span>'+b+'</span></li>\
			<li><label>Status: </label><span>'+c+'</span></li>\
			<li><label>Owner: </label><span>'+e+'</span></li>\
			<li></li>\
			<li>We'+"'"+'re fetching the preview...</li>';
			$('#suxmodal ul').html(o);$('#suxmodal').fadeIn();
				setTimeout(function() {
				//close modal and direct to preview page;
				document.location.href=f;
				}, 5000);

				}else{
			$('#req-status').html("Sorry!! This project is not open to preview at the moment!").addClass("req-disabled").fadeIn();
				}
			}else{
			$('#req-status').html("Sorry!! The key is inalid!").addClass("req-invalid").fadeIn();

			}
	}
});