function fullName() {
    var name = document.getElementById('fullname').value;
    var chars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
    var numbers = /^[0-9]+$/;
    var string = /^[a-zA-Z]+$/;
    var error = document.getElementById("error")
    if (name.length >= 3) {
        if (name.match(numbers)) {
            error.textContent = "Please enter a valid name"
            error.style.color = "red"
            document.getElementById('fullname').value = '';
        } else if (name.match(chars)) {
            error.textContent = "Please enter a valid name"
            error.style.color = "red"
            document.getElementById('fullname').value = '';
        } else if (name.match(string)) {
            console.log(name)
            error.textContent = ""
            var locate = window.location.href
            window.location.assign('quiz.html')
            secondPassed()
                //window.location.replace('quiz.html')} else {
        } else {
            error.textContent = "Please enter a valid name"
            error.style.color = "red"
            document.getElementById('fullname').value = '';
        }
    } else {
        error.textContent = "Please enter a valid name"
        error.style.color = "red"
        document.getElementById('fullname').value = '';
    }
}

var seconds = 300;

function secondPassed() {
    var minutes = Math.round((seconds - 30) / 60),
    remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        var locate = window.location.href
        window.location.assign('result.html')
        window.onload = function() {
                result()
            }
            //window.location.replace('quiz.html')
    } else {
        seconds--;
    }
}
var countdownTimer = setInterval('secondPassed()', 1000);

function again() {
    var locate = window.location.href
    window.location.assign('index.html')
        //window.location.replace('quiz.html')
}

var questions = [{
        id: 1,
        number: "Question No.1",
        question: "Who is the President of Pakistan?",
        answer: "Imran Khan",
        options: [
            "Nawaz Sharif",
            "Altaf Hussain",
            "Mustufa Kamal",
            "Imran Khan"
        ]

    },
    {
        id: 2,
        number: "Question No.2",
        question: "Where is the tomb of Quaid-e-Azam?",
        answer: "Karachi",
        options: [
            "Multan",
            "Karachi",
            "Islamabad",
            "Lahore"
        ]

    }, {
        id: 3,
        number: "Question No.3",
        question: "When we celebrate the Independence Day of Pakistan?",
        answer: "14th August",
        options: [
            "11th August",
            "16th August",
            "15th August",
            "14th August"
        ]

    },

]

window.onload = function() {
    show(0)
}

var question_count = 0;
if (question_count == 4) {
    var locate = window.location.href
    window.location.assign('result.html')
    name = '';
}

function next() {
    question_count++
    console.log(question_count)
    if (question_count == 3) {
        var locate = window.location.href
        window.location.assign('result.html')
    } else {}
    show(question_count)
}

function show(e) {
    var ques = document.getElementById("question")
    ques.innerHTML = `<h1 class="headings" id="numbering"> ${questions[e].number} </h1> 
    <div> ${questions[e].question} </div> <br>
    <input id="answer" type="radio" name="group1" value="wrong"> ${questions[e].options[0]} <br>
            <input id="answer" type="radio" name="group1" value="wrong"> ${questions[e].options[1]} <br>
            <input id="answer" type="radio" name="group1" value="wrong"> ${questions[e].options[2]} <br>
            <input id="answer" type="radio" name="group1" value="correct"> ${questions[e].options[3]}`

}


function radio() {
    var checks = document.getElementsByTagName("input")
    if (checks.checked = true) {
        next()
    } else {

    }

    function stop() {
        clearTimeout(ques)
    }
}

function result() {
    var res = document.getElementById("rest")
    res.innerHTML = `<div class="result">
    Your Name: ${name}
    <br> Your Score: 80%
    <br> Total Time: 05:00
    <br> Time Taken: ${seconds}
</div>`
}
