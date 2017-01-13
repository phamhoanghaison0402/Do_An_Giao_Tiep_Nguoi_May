 
function show_comment(id,lang,p) {
	
	$.ajax({
		 type: "GET",
		 url: ROOT+'modules/news/ajax/_show_comment.php',
		 data: "id="+id+'&lang='+lang+'&p='+p,
		 success: function(html){
			  $("#ext_comment").html(html);
		 }
	 });
}

