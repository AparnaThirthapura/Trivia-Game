

//The title for the page
var quizTitle = " Totally Trivia Game";
// Setting the questions for the quiz	
var quiz = [
	{
		"question"	: "Which of these mammals lay eggs?",
		"choices"	: [	"echidna", "bongo", "kiwi", "southern right whale"],
		"answer"	: "echidna",
		"image"		: "assets/images/echidna.jpg"
	},

	{
		"question"	: "Which is the biggest species of shark?",
		"choices"	: [ "great white shark", "hammerhead shark", "whale shark", "basking shark"],
		"answer"	: "whale shark",
		"image"		: "assets/images/whaleShark.jpg "
	},

	{
		"question"	: "What do you call a young horse?",
		"choices"	: [ "cub", "calf", "foal", "cygnet"],
		"answer"	: "foal",
		"image"		: "assets/images/foal.jpg "
	},

	{
		"question"	: "Which is the most poisonous snake in the planet? ",
		"choices"	: [ "cobra", "inland taipan", "black mamba", "rattlesnake"],
		"answer"	: "inland taipan",
		"image"		: "assets/images/inlandTaipan.jpg "
	},

	{
		"question"	: "Which of these dinosaurs lived during the Jurassic Period?",
		"choices"	: [ "triceratops", "stegosaurus", "raptor", "t-rex"],
		"answer"	: "stegosaurus",
		"image"		: "assets/images/stegosaurus.png "
	},

	{
		"question"	: "Which of these animals is not endangered?",
		"choices"	: ["red wolf", "sperm whale", "capybara", "jaguar"],
		"answer"	: "capybara",
		"image"		: "assets/images/capybara.jpg "
	},

	{
		"question"	: "Which is the fastest animal on the Earth?",
		"choices"	: [ "cheetah", "peregrine falcon", "leopard", "hyena"],
		"answer"	: "peregrine falcon",
		"image"		: "assets/images/peregrineFalcon.jpg "
	},

	{
		"question"	: "Which animal could not survive in Africa?",
		"choices"	: [ "hippopotamus", "tsetse fly", "wildcat", "giraffe"],
		"answer"	: "wildcat",
		"image"		: "assets/images/wildcat.jpg "
	},

	{
		"question"	: "What company first developed the MP3?",
		"choices"	: [ "Apple Computer", "Microsoft", "Fraunhofer Gesellschaft", "Napster"],
		"answer"	: "Fraunhofer Gesellschaft",
		"image"		: "assets/images/fraunhofer.png "
	},

	{
		"question"	: "Who took the worlds first photograph?",
		"choices"	: [ "George Eastman", "Edwin Land", "Joseph Niepce", "Guglielmo Macroni"],
		"answer"	: "Joseph Niepce",
		"image"		: "assets/images/niepce.jpg "
	},

	{
		"question"	: "When was the moble phone invented?",
		"choices"	: [ "1968", "1982", "1975", "1973"],
		"answer"	: "1973",
		"image"		: "assets/images/firstMobile.jpg "
	},

	{
		"question"	: "Who invented disovered penicillin?",
		"choices"	: [ "Benjamin Franklin", "Francis Clark", "Alexender Fleming", "Louis Pasteur"],
		"answer"	: "Alexender Fleming",
		"image"		: "assets/images/alexenderFleming.jpg "
	},

	{
		"question"	: "Who developed the first modern automobile?",
		"choices"	: [ "Henry Ford", "Karl Benz", "Nils Bohlin", "Robert Fulton"],
		"answer"	: "Karl Benz",
		"image"		: "assets/images/karlBenz.jpg "
	}];

var correctAnswers = 0;
var wrongAnswers = 0;
var notAnswered = 0;
var timer1 = $("<div>");
var secLeft = 10;
var currentQuestion = 0;

startGame();

function startGame(){
	$(document.createElement('h1')).text(quizTitle).appendTo('#frame');
	$(document.createElement('button')).addClass("start").text("START").appendTo('#frame');

	correctAnswers = 0;
	wrongAnswers = 0;
	notAnswered = 0;
	timer1 = $("<div>");
	secLeft = 10;
	currentQuestion = 0;

}

$('#frame').on("click", ".start", function(){
// $('button').click(function(){
	$('#frame').empty();
	$(document.createElement('h1')).text(quizTitle).appendTo('#frame');
	timer1.appendTo("#frame");

	startTimer();
	timer1.html("Time Left:  " + secLeft);
	displayQuestion();
});

// Timer function Starts
function startTimer(){
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	secLeft--;
	timer1.html("Time Left:  " + secLeft);
					
	if (secLeft === 0) {
		notAnswered++;
		clearScreen();
 		$("<h1>").text(quizTitle).appendTo("#frame");

 		$("<h1>").text("Time Up!!").appendTo("#frame");
 		$("<h1>").text("Correct answer is " + quiz[currentQuestion].answer).appendTo("#frame");
 		$("<img>").addClass("ans-image").attr("id", "ans-image").attr('src', quiz[currentQuestion].image).appendTo("#frame");

 		$("<h1>").text("Moving to next question").appendTo("#frame");
 		setTimeout(nextQuestion, 2000);
	}
}
// Timer function ends


// Display Question function begins
function displayQuestion(){
	$('<p>').text(quiz[currentQuestion].question).appendTo('#frame');	


	for(var j = 0; j < 4; j++){
		var a = $("<div>");
		a.addClass("choice");
		a.attr("data-name", quiz[currentQuestion].choices[j]);
		a.text(quiz[currentQuestion].choices[j]);
		$('#frame').append(a);
	}

}
// Display Question function ends


//User click function
$("#frame").on("click", ".choice", function(){
	console.log(this);
	var ansClicked = ($(this).attr("data-name"));

	if(ansClicked === quiz[currentQuestion].answer){
		correctAnswers++;
		clearScreen();
		$("<h1>").text(quizTitle).appendTo("#frame");
		$("<h1>").text("Correct!!!!").appendTo("#frame");
		// $(document.createElement('img')).addClass('question-image').attr('id', 'question-image')
		// .attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
		// $("<img>").html(quiz[currentQuestion].image).appendTo("#frame");
		// var img = $("<img>");
		// img.src = quiz[currentQuestion].image;
		// $("img").appendTo("#frame");
		$("<img>").addClass("ans-image").attr("id", "ans-image").attr('src', quiz[currentQuestion].image).appendTo("#frame");
	}
	else{
		wrongAnswers++;
		clearScreen();
		$("<h1>").text(quizTitle).appendTo("#frame");
		$("<h1>").text("Wrong !!!!").appendTo("#frame");
		$("<h1>").text("Correct answer is " + quiz[currentQuestion].answer).appendTo("#frame");
		$("<img>").addClass("ans-image").attr("id", "ans-image").attr('src', quiz[currentQuestion].image).appendTo("#frame");

	}

	setTimeout(nextQuestion, 2000);
});
//User click function ends

function clearScreen(){
	$("#frame").empty();
	
}

//Function for displaying next question
function nextQuestion(){
	clearScreen();
	currentQuestion++;
	secLeft = 10;

	if(currentQuestion >= quiz.length){
		finishGame();
		return;
	}

	$(document.createElement('h1')).text(quizTitle).appendTo('#frame');
	timer1.appendTo("#frame");
	//startTimer();
	timer1.html("Time Left:  " + secLeft);
	displayQuestion();
	
}
//Function for displaying next question ends

 
//Function to display reults at the end of the game
 function finishGame(){
 	clearScreen();
 	clearInterval(intervalId);
 	$("<h1>").text(quizTitle).appendTo("#frame");
 	$("<h1>").text("Correct Answers:  " + correctAnswers).appendTo("#frame");
 	$("<h1>").text("Wrong Answers:  " + wrongAnswers).appendTo("#frame");
 	$("<h1>").text("Not Answered:  " + notAnswered).appendTo("#frame");

 	$("<button>").addClass("restart").text("RESTART").appendTo('#frame');
 	$('#frame').on("click", ".restart", function(){
 		$('#frame').empty();
 		startGame();
 		
 	});
 }
 
 //Function to display reults at the end of the game ends

