<script>
$(document).ready(function() {
 	$("#css3dimagePager li").click(function(){
		var rotateY = ($(this).index() * -90); 
		$("#css3dimageslider ul").css({"-webkit-transform":"rotateY("+rotateY+"deg)", "-moz-transform":"rotateY("+rotateY+"deg)", "-ms-transform":"rotateY("+rotateY+"deg)", "transform":"rotateY("+rotateY+"deg)"});
		$("#css3dimagePager li").removeClass("active");
		$(this).addClass("active");
	});
 	$("#css3dtransparency").click(function() {
		$("#css3dimageslider").toggleClass("transparency");
		$(this).toggleClass("active");
	});
 });
</script>