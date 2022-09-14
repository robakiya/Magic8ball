let answers = [
	'It is certain',
	'It is decidedly so',
	'Without a doubt',
	'Yes definitely',
	'You may rely on it',
	'As I see it, yes',
	'Most likely',
	'Outlook good',
	'yes',
	'Signs point to yes',
	'Reply hazy try again',
	'Ask again later',
	'Better not tell you now',
	'Cannot predict now',
	'Concentrate and ask again',
	'Do not count on it',
	'My reply is no',
	'My sources say no',
	'Outlook not so good',
	'Very doubtful',
]

let displayAnswer = function () {
	if (question.value.length < 1) {
		alert("you did not enter a question...");
	} else {
		
		let index = Math.floor(Math.random() * answers.length);
		let answer = answers[index];
		let element = document.getElementById('circle');
		element.style.display = 'inline-block';
		element.innerHTML = '<br><br>' + answer;
	}
}


