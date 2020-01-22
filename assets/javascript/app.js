var theQuestions = [{
                question: "What is the name of Ross's first wife?",
                   answers: {
                     a: 'Susan',
                     b: 'Emily',
                     c: 'Carol'
                    
                 },
               correctAnswer: 'c'
            },
            {
                question: "What is the name of Phoebe's twin sister?",
                answers: {
                   a: 'Janice',
                   b: 'Ursula',
                   c: 'Ariel'
               },
               correctAnswer: 'b'
           },
           {
               question: "What character had the most number of screen appearances?",
               answers: {
                   a: 'Chandler',
                   b: 'Rachel',
                   c: 'Ross'
               },
               correctAnswer: 'a'
           },
           {
               question: "What word or phrase is mentioned in every episode of the series?",
               answers: {
                   a: 'Love',
                   b: 'Central Perk',
                   c: 'Friends'
               },
               correctAnswer: 'c'
           },
           {
               question: "What was the name of Ross and Monica's Grandmother?",
               answers: {
                   a: 'Abigail',
                   b: 'Althea',
                   c: 'Agetha'
               },
               correctAnswer: 'b'
           }
       ];   
        function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
          
       
       function showQuestions(questions, quizContainer){
           var output = [];      

           for(var i=0; i<questions.length; i++){
           answers = [];
    
           for(letter in questions[i].answers){
               answers.push(
                   '<label>'
                       + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                       + letter + ': '
                       + questions[i].answers[letter]
                   + '</label>'
               );
           }
    
               output.push(
               '<div class="question">' + questions[i].question + '</div>'
               + '<div class="answers">' + answers.join('') + '</div>'
           );
           }
    
           quizContainer.innerHTML = output.join('');
           
       }
           function showResults(questions, quizContainer, resultsContainer){
           var answerContainers = quizContainer.querySelectorAll('.answers');
           var userAnswer = '';
           var numCorrect = 0;
            
           for(var i=0; i<questions.length; i++){
               userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                
               if(userAnswer===questions[i].correctAnswer){
                   numCorrect++;
                   }

               else{
                   numCorrect===;
               }
           }

           resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        

           submitButton.onclick = function(){
           showResults(questions, quizContainer, resultsContainer);
           }
       }    
          
         showQuestions(questions, quizContainer);
                submitButton.onclick = function(){
          
         showResults(questions, quizContainer, resultsContainer);
       };
    
       var quizContainer = document.getElementById('quiz');
       var resultsContainer = document.getElementById('results');
       var submitButton = document.getElementById('submit');
   };

   generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

  
