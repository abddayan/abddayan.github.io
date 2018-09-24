//
//Popup Overlay
				$(document).ready(function() {
	      // Initialize the plugin
	      $('#my_popup').popup({
	      	type: "overlay",
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
