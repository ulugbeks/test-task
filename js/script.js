jQuery(document).ready(function($){

	$('#contact-form').submit(function(e) {

		var form = $(this);
		var action = form.attr('action');

		$.ajax({
		    type: "POST",
		    url: action,
		    data: form.serialize(),
		    success: function(data)
		    {
		      $('.thank-you').css({'opacity': '1', 'pointer-events': 'auto'});
		      $('.before-submit').css({'opacity': '0', 'pointer-events': 'none'});
		      $('.background .lines').css({'transform': 'rotate(-180deg) translateY(100%)'});
		    }
		});

	  	e.preventDefault();
	});

	var back_btn = $('.subtitle.back');
	back_btn.on('click', function(){
		$('.thank-you').css({'opacity': '0', 'pointer-events': 'none'});
		$('.before-submit').css({'opacity': '1', 'pointer-events': 'auto'});
		$('.background .lines').css('transform', 'rotate(0deg)');
	});

});