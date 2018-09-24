//
//Send Message
$(document).ready(function(){
    $("#dbMsgSubmit").click(function(){
    	//Serialize form values to be sent
        var msgData=$("#msgForm").serialize();
        //when ajax starts
       /* $(document).ajaxStart(function(){
    		$(this).html("<img src='demo_wait.gif'>");
		});*/
        //when success
       /* $(document).ajaxSuccess(function(e, xhr, opt){
        if (opt.url == "demo_ajax_load.txt") {
            alert("AJAX request successfully completed");
        };
    });*/
        //when error
       $(document).ajaxError(function(e, xhr, opt){
   		 if(opt.url=="php/message.php"){
    		    alert("Error requesting " + opt.url + ": " + xhr.status + " " + xhr.statusText);
        		}
    		});
        //when ajax complete
        //ajaxComplete()
        //trigger ajax
        $.ajax({
        	async:true,
        	url: "php/message.php",
        	//type: "POST",
        	data: msgData,
        	//dataFilter/*(data,type)*/:
        	//beforeSend/*(xhr)*/:function(){alert(msgData)},
        	//timeout:
        	dataType: "json",//can also be string,text,html
        	success: function(result){
            $("#tulTip").html(result.receivedMsg.SenderEmailAddress);
            $("#tulTip").toggle(500);
            //$("#tulTip").toggle(500);
            $('#my_popup').popup('toggle');
            //setTimeout(function(){$("#tulTip").toggle(100)},1000)

        },
        //error/*(xhr,status,error)*/:
        //complete/*(xhr,status)*/:

    });
    });
});