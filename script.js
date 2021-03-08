const startButton = document.getElementById('start-btn')
const explain1 = document.getElementById('answer1')
const endButton = document.getElementById('end-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const endContainerElement = document.getElementById('end-container')
const answerContainerElement = document.getElementById('answer-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const backgroundBodyElement =document.getElementById('bgbody')
const thankYouElement = document.getElementById('thankyou')
const subtitleElement = document.getElementById('subtitle')
const containerElement = document.getElementsByClassName('container')
const subtitleQuestionElement = document.getElementById('sub__question1')

const subtitleQuestionTwoElement = document.getElementById('sub__question2')
const subtitleQuestionThreeElement = document.getElementById('sub__question3')
const subtitleQuestionFourElement = document.getElementById('sub__question4')

let shuffledQuestions, currentQuestionIndex, reverseIndex

var isFirefox = typeof InstallTrigger !== 'undefined';
if (isFirefox == true) {
  console.log("This is FIREFOX")


startButton.addEventListener('click', startGame)
endButton.addEventListener('click', () => {
  window.open('https://www.hce4.com/subscribers', '_blank')
})
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  /*console.log(shuffledQuestions[currentQuestionIndex].urls)*/
  backgroundBodyElement.style.backgroundImage = "url('" + shuffledQuestions[currentQuestionIndex].urls + "')"
  })


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questionsF.sort(() => Math.random() - 0)
  currentQuestionIndex = 0
  reverseIndex = 3
  subtitleElement.classList.add('hide')
  questionContainerElement.style.width = "800px"
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  backgroundBodyElement.style.backgroundImage = "url('" + shuffledQuestions[0].urls + "')"
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
   if (currentQuestionIndex==0) {
    subtitleQuestionElement.classList.remove('hide')
  } else if (currentQuestionIndex==1) {
    subtitleQuestionElement.classList.add('hide')
    subtitleQuestionTwoElement.classList.remove('hide')
  } else if (currentQuestionIndex==2) {
    subtitleQuestionTwoElement.classList.add('hide')
    subtitleQuestionThreeElement.classList.remove('hide')
  } else if (currentQuestionIndex==3) {
    subtitleQuestionThreeElement.classList.add('hide')
    subtitleQuestionFourElement.classList.remove('hide')
  }
     

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  explain1.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    explain1.innerText = shuffledQuestions[currentQuestionIndex].explanation
    explain1.classList.remove('hide')
    
  } else {
    endButton.innerText = 'Subscribe to \n our Newsletter'
    endButton.classList.remove('hide')
    explain1.innerText = shuffledQuestions[currentQuestionIndex].explanation
    explain1.classList.remove('hide')
    thankYouElement.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questionsF = [
  {
    question: 'Are you ready for the 4th industrial revolution?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'Absolutely Yes', correct: true },
      { text: '100% Yes', correct: true },
      { text: "I don't feel ready", correct: true }
    ],
    explanation : "Whatever your level of readiness is, and even if you are not fully prepared, we are equipped to accompany you into the 4th Industrial Revolution",
    urls : "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  },
  {
    question: 'What do you think are the New Technologies 4.0?',
    answers: [
      { text: 'Biotechnology', correct: false },
      { text: 'Humanoid Robots', correct: false },
      { text: 'Artificial Intelligence', correct: false },
      { text: 'All of the above', correct: true }
    ],
    explanation : "The Fourth Industrial Revolution is based on New Technologies 4.0, such as Artificial Intelligence, Biotechnologies, Humanoid Robots, etc",
//     urls : "https://cdn.vox-cdn.com/thumbor/NX9K3xqd_KkJkhAVtBLPEITr4wM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19968242/MOX01169.jpg"
    urls : "https://cdn.vox-cdn.com/thumbor/NX9K3xqd_KkJkhAVtBLPEITr4wM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19968242/MOX01169.jpg"
    
  },
  {
    question: 'Where are the HCE 4 services available?',
    answers: [
      { text: 'Europe', correct: false },
      { text: 'North America', correct: false },
      { text: 'Asia', correct: false },
      { text: 'Everywhere', correct: true }
    ],
    explanation : "The 4th Industrial Revolution does not know borders and neither do we. As an international business, we provide services that reach all over the world",
//     urls : "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1633&q=80"
    urls : "https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
  },
  {
    question: 'What do you think you should put at the heart of your business \n in the 4th Industrial Revolution?',
    answers: [
      { text: 'Profits', correct: false },
      { text: 'New Technologies', correct: false },
      { text: 'Human Connection', correct: true},
      { text: 'Natural Resources', correct: false}
    ],
    explanation : "Human Connection is essential. At the heart of your company, the human connection represents the fourth level of Maslow’s Hierarchy of needs: Esteem. It goes hand in hand with the New Technologies 4.0 (NT4).",
    urls : "https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
    
  }
  
]

}


else {


startButton.addEventListener('click', startGame)
endButton.addEventListener('click', () => {
  window.open('https://www.hce4.com/subscribers', '_blank')
})
nextButton.addEventListener('click', () => {
  
  currentQuestionIndex++
  setNextQuestion()
  /*console.log(shuffledQuestions[currentQuestionIndex].urls)*/
  backgroundBodyElement.style.backgroundImage = "url('" + shuffledQuestions[currentQuestionIndex].urls + "')"
  })


function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - 0)
  currentQuestionIndex = 0
  reverseIndex = 3
  subtitleElement.classList.add('hide')
  questionContainerElement.style.width = "800px"
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
  backgroundBodyElement.style.backgroundImage = "url('" + shuffledQuestions[0].urls + "')"

}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  if (currentQuestionIndex==0) {
    subtitleQuestionElement.classList.remove('hide')
  } else if (currentQuestionIndex==1) {
    subtitleQuestionElement.classList.add('hide')
    subtitleQuestionTwoElement.classList.remove('hide')
  } else if (currentQuestionIndex==2) {
    subtitleQuestionTwoElement.classList.add('hide')
    subtitleQuestionThreeElement.classList.remove('hide')
  } else if (currentQuestionIndex==3) {
    subtitleQuestionThreeElement.classList.add('hide')
    subtitleQuestionFourElement.classList.remove('hide')
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  explain1.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  // mikes changes - added "selected-wrong-answer" class to selected element then removes it when you click on another answer

    if (selectedButton.dataset.correct !== true) {
      const allWrongAnswers = document.querySelectorAll(
        ".selected-wrong-answer"
      );
      allWrongAnswers.forEach((item) => {
        item.classList.remove("selected-wrong-answer");
      });
      this.classList.add("selected-wrong-answer");
    }

  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    explain1.innerText = shuffledQuestions[currentQuestionIndex].explanation
    explain1.classList.remove('hide')
    
  } else {
    endButton.innerText = 'Subscribe to \n our Newsletter'
    endButton.classList.remove('hide')
    explain1.innerText = shuffledQuestions[currentQuestionIndex].explanation
    explain1.classList.remove('hide')
    thankYouElement.classList.remove('hide')
    
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


    var questions = [
      {
        question: 'What do you think you should put at the heart of your business \n in the 4th Industrial Revolution?',
        answers: [
          { text: 'Profits', correct: false },
          { text: 'New Technologies', correct: false },
          { text: 'Human Connection', correct: true},
          { text: 'Natural Resources', correct: false}
        ],
        explanation : "Human Connection is essential. At the heart of your company, the human connection represents the fourth level of Maslow’s Hierarchy of needs: Esteem. It goes hand in hand with the New Technologies 4.0 (NT4).",
        urls : "https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
      },
      {
        question: 'Where are the HCE 4 services available?',
        answers: [
          { text: 'Europe', correct: false },
          { text: 'North America', correct: false },
          { text: 'Asia', correct: false },
          { text: 'Everywhere', correct: true }
        ],
        explanation : "The 4th Industrial Revolution does not know borders and neither do we. As an international business, we provide services that reach all over the world",
//         urls : "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1633&q=80"
        urls : "https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80"
      },
      {
        question: 'What do you think are the New Technologies 4.0?',
        answers: [
          { text: 'Biotechnology', correct: false },
          { text: 'Humanoid Robots', correct: false },
          { text: 'Artificial Intelligence', correct: false },
          { text: 'All of the above', correct: true }
        ],
        explanation : "The Fourth Industrial Revolution is based on New Technologies 4.0, such as Artificial Intelligence, Biotechnologies, Humanoid Robots, etc",
//         urls : "https://cdn.vox-cdn.com/thumbor/NX9K3xqd_KkJkhAVtBLPEITr4wM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19968242/MOX01169.jpg"
        urls : "https://cdn.vox-cdn.com/thumbor/NX9K3xqd_KkJkhAVtBLPEITr4wM=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19968242/MOX01169.jpg"
        
      },
      {
        question: 'Are you ready for the 4th industrial revolution?',
        answers: [
          { text: 'Yes', correct: true },
          { text: 'Absolutely Yes', correct: true },
          { text: '100% Yes', correct: true },
          { text: "I don't feel ready", correct: true }
        ],
        explanation : "Whatever your level of readiness is, and even if you are not fully prepared, we are equipped to accompany you into the 4th Industrial Revolution",
        urls : "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      }
      
    ]

// -----------------------------------------------------------------

//let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

  }
