function changeForms() {
    let question = document.getElementById("question");

    if(question.textContent == "Don't have an account? Register!")
        question.textContent = "See?"
}

changeForms();