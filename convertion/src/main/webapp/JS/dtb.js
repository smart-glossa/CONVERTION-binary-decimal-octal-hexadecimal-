$(window).on('load',function() {
	        $('#butt').click(function(){
	        	var dec = $('#dec').val();
	        	var bin = "";
	        	while(dec >= 1){
	        		bin = dec%2 + bin;
	        		dec = Math.floor(dec/2);
	        	}
	        	$('#bin').val(bin);	        	
	        });
	           });