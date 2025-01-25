// document.querySelector("#btn").addEventListener("click",()=>{
//     console.log(document.getElementById("options-container").value);
//     console.log("working");

// });

// document.getElementsByName("options-container").forEach(ele =>{
//     console.log(ele);
//     console.log(ele.value)

// });

// import questionData from "./questions.json" assert { type: 'json' };

// questionData.questions.forEach(e=>{
//     console.log(e);

// })

//getting the elements
const quesionContainer = document.querySelector(".question-container");
console.log(quesionContainer);

fetch("q.json")
  .then((res) => {
    console.log(res);
    
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);

    data.questions.forEach((ele) => {
      // console.log(ele, typeof ele);
      console.log(ele.question,typeof ele.question);
      
      
      // console.log(ele.question);
      // console.log(ele.options);

      const questionStructure = `<div class="question-container">
                                  <h3 class="question" > Q. ${ele.question}</h3>

                                </div>`;

      // console.log(questionStructure);
      // quesionContainer.insertAdjacentElement("beforeend",questionStructure);
      // quesionContainer.appendChild(questionStructure);
    });

    // console.log(data.questions[0].question);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

// Rendering the question dynamically
