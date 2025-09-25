// Frequently asked questions
const questions = document.querySelectorAll('.question-faq-js');

questions.forEach((question) => {
    question.addEventListener('click', openQuestion)
})

function openQuestion(event) {
    const question = event.currentTarget;
    const controls = question.getAttribute("aria-controls");
    const answer = document.getElementById(controls);

    answer.classList.toggle('opened');
    const opened = answer.classList.contains("opened")
    question.setAttribute("aria-expanded", opened);
    
    
}