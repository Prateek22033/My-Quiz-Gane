class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
   
  
    //write code to change the background color here
     background("yellow");
    //write code to show a heading for showing the result of Quiz
      if(allContestants !== undefined){
        fill("Blue");
        textSize(20);
        text("NOTE: Contestants who answered correct are highlightd in green color!",130,230)
      }

    //write condition to check if contestantInfor is not undefined
    allContestants.getContestantsInfo(); 
    if(contestantInfo !== undefined){ 
      var display_position = 130; 
      for(var plr in contestantInfo){ 
        if (plr === "player" + allContestants.index) 
          fill("red") 
        else 
          fill("black"); 
          display_position+=20; 
          textSize(15); 
          text() 
        } 
        } 
    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].ans)
      fill("Green")
      else
      fill("red");
      
    }
  }

}
