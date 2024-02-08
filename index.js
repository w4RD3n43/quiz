const questions = [
  {
    'que': 'What does HTML stand for?',
    'options': {
      'a': 'Hyper Text Markup Language',
      'b': 'High Tech Multi Language',
      'c': 'Hyperlink and Text Markup Language',
      'd': 'Home Tool Markup Language',
    },
    'ans': 'a',
  },
  {
    'que': 'Which CSS property is used to change the text color of an element?',
    'options': {
      'a': 'color',
      'b': 'text-color',
      'c': 'font-color',
      'd': 'change-color',
    },
    'ans': 'a',
  },
  {
    'que': 'What is JavaScript primarily used for?',
    'options': {
      'a': 'Styling web pages',
      'b': 'Building databases',
      'c': 'Making web pages interactive',
      'd': 'Creating graphic designs',
    },
    'ans': 'c',
  },
];
let index = 0 ;
let total = questions.length;
let right=0, wrong=0;
const queBox = document.getElementById("queBox");
const inputOption = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total){
    return end();
  }
  reset();
  const data = questions[index];
  queBox.innerText = `${index+1}) ${data.que}`;
  inputOption[0].nextElementSibling.innerText = data.options.a;
  inputOption[1].nextElementSibling.innerText = data.options.b;
  inputOption[2].nextElementSibling.innerText = data.options.c;
  inputOption[3].nextElementSibling.innerText = data.options.d;
}
const submitQuiz = () => {
  if (index < total) {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.ans) {
      right++;
    } else {
      wrong++;
    }
    index++;
    loadQuestion();
  } else {
    end();
  }
};
const getAnswer = () => {
  let answer;
  inputOption.forEach(
    (input) => {
       if(input.checked){
        answer = input.value;
       } 
      }
  )
  return answer;
}

const reset = () =>{
  inputOption.forEach(
    (input) => {
      input.checked = false;
    }
  )
}

const end = () => {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <div style= "
      text-align:center;
      background-color: white;
      border-radius:10px;
    ">
    <h2>Thank you for playing</h2>
    <h2>${right} / ${total} are correct</h2>
    </div>
    
  `;
};
loadQuestion();
