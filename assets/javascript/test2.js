$(document.createElement('h1')).text(quizTitle).appendTo('#frame');
	$(document.createElement('button')).text("START").appendTo('#frame');

	$('button').click(function(){
		alert("hi");
		$('#frame').empty();

		$(document.createElement('h1')).text(quizTitle).appendTo('#frame');
		// $(document.createElement('h1')).text(secLeft).appendTo('#frame');

							function run() {
					      		intervalId = setInterval(decrement, 1000);
					    	}

							var $div1 = $("<div>", {id: "timer"});
					      	$div1.appendTo("#frame");

					    	function decrement() {
					    		$div1.html(secLeft);
					      		secLeft--;
					
					      		if (secLeft === 0) {
					      			stop();
					      			alert("Time Up!");
					      		}
					    	}

					    	function stop() {
								clearInterval(intervalId);
					    	}

					    	run();

		for(var i = 0; i < quiz.length; i++){
			$(document.createElement('p')).text(quiz[i].question).appendTo('#frame');
			for(var j = 0; j < 4; j++){
				$('#frame').append("<input type=\"radio\"></input>");
				$('#frame').append(quiz[i].choices[j]) + "   ";
				// $(document.createElement('radio')).text(quiz[i].choices[j]).appendTo('#frame');
			}
		}
	});

	
});