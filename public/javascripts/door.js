$(document).ready(function(){

		var opensesame = function() {
			var data, success;
			$.ajax({
			  url: '/open',
			  method: 'POST',
			  data: data,
			  success: success
			});
		};

		$('<a id="door"></a>').appendTo('body').click(function(e){
			opensesame();
		});

	});