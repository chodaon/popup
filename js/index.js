$( document ).ready(function(){
	/*popup*/
	$("#full, #view, #mailWrap").hide();
	$("#clickBtn").click(function(){
		$("#full, #view").show();
		return false;
	});
	$("#full, #closeBtn").click(function(){
		$("#full, #view").hide();
	});
});