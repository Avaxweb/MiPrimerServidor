$(document).ready(function(){
var x=false;
	


$('#menu-res').click(function(){
		if (x==true) {
			$('#lista').css({left:'-100%'});
			x=false;
		} else {

			x=true;
			$('#lista').css({left:'0%'});
		}


		
		
	

		});




$('#sig').click(function(){
		$('#fondo2').css({display:'block'});

});


$('#mr').click(function(){
		$('#lista').css({display:'block'});

});


$('#jacome').click(function(){
	$(this).children('ul').slideToggle();
	$('#jacome ul').css({position: 'static' });






	});
$('ul').click(function(p){
p.stopPropagation();

});



$('#cer').click(function(){
		$('#fondo').css({display:'none'});


});

$('#cer2').click(function(){
		$('#fondo').css({display:'none'});
		
		$('#fondo2').css({display:'none'});
		

});


$('#boton').click(function(){
		$('#fondo').css({display:'block'});



});

});