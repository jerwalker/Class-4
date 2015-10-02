$(document).ready(function(){



var switchStatus = true;

var status = Array("Hey, who turn off the lights?", "It's so bright in here!");

/*
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

})*/

	$(document).on('click','button', function(){

		switchStatus = !switchStatus;

		$('body').toggleClass('light').toggleClass('dark');

		$('button').toggleClass('on').toggleClass('off');

		$('.status').text(status[Number(switchStatus)]);


	});

});
