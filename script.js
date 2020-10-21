var flashcards = new Vue({
  el: "#flashcards-app",
  data: {
    questionInput:"",
    answerInput:"",
    categoryInput:"",
    cards:[
      {
        question:"When was America Founded?",
        answer:"1776",
        category:"history",
        flipped:false
      },
      {
        question:"What is 4x4?",
        answer:"8",
        category:"math",
        flipped:false
      },{
        question:"How far is the sun?",
        answer:"92 million miles",
        category:"science",
        flipped:false
      }
    ]
  },
  methods:{
      addCard: function(){        
        this.cards.push({
          question:this.questionInput,
          answer:this.answerInput,
          category:this.categoryInput,
          flipped:false
        })        
        this.questionInput="";
        this.answerInput="";
        this.categoryInput="";
      }
  }
})