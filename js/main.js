$(document).ready(function(){

var switchStatus = true;

	$('button').on('click', function(){

		if ( switchStatus ){

			switchStatus = false;

			$('body').removeClass('light').addClass('dark');

			$('button').removeClass('on').addClass('off');

			$('.status').text("It's so bright in here!");

			console.log(switchStatus);

		}
		else{
			
			switchStatus = true;

			$('body').removeClass('dark').addClass('light');

			$('button').removeClass('off').addClass('on');

			$('.status').text("Hey, who turn off the lights?");

			console.log(switchStatus);
		}
	})

})