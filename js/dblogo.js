//
			
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
//