const questions = [{
    "category": "Science",
    "question": "What is the chemical symbol for water?",
    "choices": ["CO2", "H2O", "O2"],
    "answer": "H2O"
},
{
    "category": "Geography",
    "question": "Which planet is known as the 'Red Planet'?",
    "choices": ["Venus", "Jupiter", "Mars"],
    "answer": "Mars"
},
{
    "category": "Literature",
    "question": "Who wrote 'Romeo and Juliet'?",
    "choices": ["Mark Twain", "William Shakespeare", "Charles Dickens"],
    "answer": "William Shakespeare"
},
{
    "category": "History",
    "question": "In which year did the Titanic sink?",
    "choices": ["1912", "1905", "1920"],
    "answer": "1912"
},
{
    "category": "Technology",
    "question": "What does CPU stand for?",
    "choices": ["Central Processing Unit", "Computer Personal Unit", "Central Peripheral Unit"],
    "answer": "Central Processing Unit"
}];

function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length)
    return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex];
}

function getResults(question, computerChoice) {
    if (computerChoice == question.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }
}


const question = getRandomQuestion(questions);

const computerChoice = getRandomComputerChoice(question);

console.log(getResults(question, computerChoice));