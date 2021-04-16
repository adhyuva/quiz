function makeInputs () {
    questions = document.getElementById("Num").value;
    let quiz = document.getElementById("quiz");
    quiz.innerHTML = "";
    for(i = 1; i <= questions; i++){
        quiz.innerHTML += `<br/><br/>Question ${i}: <input type='text' id = 'testquestion${i}' />  <br/><br/>`;
        quiz.innerHTML += `<br/>Answer ${i}: <input type='text' id = 'answer${i}' /> <hr/>`;
    }
    quiz.innerHTML += "<input type= 'button' onclick = 'makeQuiz()' value='Make Quiz' />";
}

function makeQuiz() {
    let quiz = document.getElementById("quiz");
    for (i=1; i <= questions; i++ ){
        quiz.innerHTML += "<br/><br/> " + document.getElementById(`testquestion${i}`).value;
        quiz.innerHTML += document.getElementById(`testquestion${i}`).value  + `<input type='text' id = 'question${i}' />  <br/><br/>`;
    }
    quiz.innerHTML += "<input type= 'button' onclick = 'evalQuiz()' value='Check Answers' />";

}
