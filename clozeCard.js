var inquirer = require('inquirer');

var BasicCard=require("./FlashCards.js");

function clozeCard (text,cloze){
  this.text=text;
  this.cloze=cloze;
  }


var newCloze=new clozeCard();

//Questions for flashcards

var whocreatedbasketballCloze=new clozeCard("James Naismith created the game of basketball","James Naismith");
whocreatedbasketballCloze.partial=new clozeCard("...created that game of basketball.");
whocreatedbasketballClozeText=new clozeCard("James Naismith created the game of basketball.");

var whowasthefirstplayertoscore100pointsCloze=new clozeCard("Who was the first player to score 100 points in a game?","Wilt Chamberlain");
whowasthefirstplaytoscore100pointsCloze.partial=new clozeCard("...Wilt Chamberlain is the recored holder for most points scored in a game.");
whowasthefirstplaytoscore100pointsCloze.fullText=new clozeCard("Wilt Chamberlain is the current recored holder for most points scored in a game.");

var whatteamdidKobelastplayforCloze=new clozeCard("What team did Kobe Bryant last play for?","LA Lakers");
whatteamdidKobelastplayforCloze.partial=new clozeCard("...is the last team that Kobe Bryant played for.");
whatteamdidKobelastplayforCloze.fullText=new clozeCard("LA Lakers is the last team that Kobe Bryant played for.");

var whowonthedunkcontestin2016Cloze=new clozeCard("Who won the dunk contest in 2016?","Zach LaVine");
whowonthedunkcontestin2016Cloze.partial=new clozeCard("...won the dunk contest in 2016.");
whowonthedunkcontestin2016Cloze.fullText=new clozeCard("Zach LaVine won the dunk contest in 2016.");

clozeCard.prototype.printCloze=function(){
	console.log(this.text);
    console.log(this.cloze);
};

// Create a "Prompt" with a series of questions.
inquirer.prompt([

   {
    type: "list",
    message: "What kind of card would you like to use?",
    choices: ["FlashCard","Cloze"],
    name: "card"
  },

  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you Positive:",
    name: "confirm",
    default: true

  }

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(user) {


   // If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Welcome to FLASH CARD Game 2017!");
    console.log("");   
    console.log("==============================================");

    if(user.card==="FlashCards"){
    	console.log("You chose Flash Cards!")
    	console.log("==============================================");
    	console.log("");
    
    	var whocreatedbasketball=new FlashCard("Who created basketball?","James Naismith");
  		var whowasthefirstplayertoscore100points=new FlashCard("Who was the first player to score 100 points?","Wilt Chamberlain");
  		var whatteamdidKobelastplayfor=new FlashCard("What team did Kobe Bryant last play for?","LA Lakers");
  		var whowonthedunkcontestin2016=new FlashCard("Who won the dunk contest in 2016?","Zach LaVine");
          inquirer.prompt([
            {
             name:"question",
             message:"Who created basketball?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===whocreatedbasketball.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(whocreatedbasketball.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            

            inquirer.prompt([
            {
             name:"question",
             message:"Who was the first player to score 100 points?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(whowasthefirstplayertoscore100points.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            

            inquirer.prompt([
            {
             name:"question",
             message:"What team did Kobe Bryant last play for?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===whatteamdidKobelastplayfor.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(whatteamdidKobelastplayfor.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            
            inquirer.prompt([
            {
             name:"question",
             message:"Who won the dunk contest in 2016?",
             name:"answer"
            }
            ]).then(function(answers){
              if(answers.answer===whowonthedunkcontestin2016.back){
               console.log("That's right! Well Done!");
               console.log("---------------------------------------------------------------------------------------------"); 
              }
              else{
                console.log("");
                console.log("Sorry, that is incorrect...");
                console.log("");
                console.log("The correct answer is: ");
                console.log(whowonthedunkcontestin2016.back);
                console.log("-----------------------------------------------------------------------------------------------");                
              }
            })
            })
            })
            })          
       }
    else{
    	console.log("You chose Cloze Cards!")
    	console.log("==============================================");
    	console.log("");

        //Start on the 1st question round    
	    	inquirer.prompt([
	    	{
	    	 name:"question",
	    	 message:"....created that game of basketball",
	    	 name:"answer"
	    	}
	    	]).then(function(answers){
	    		if(answers.answer===whocreatedbasketballCloze.cloze){
	    			console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");
	    		}

	    		else{
	    			console.log("");
	    			console.log("Sorry, that is incorrect...");
	    			console.log("");
	    			console.log("The correct answer is: ");
	    			console.log(whocreatedbasketballCloze.fullText.text)
            console.log("-----------------------------------------------------------------------------------------------");
	    		}//end else 1st question round

        //Starts the 2nd question round    
        inquirer.prompt([
        {
         name:"question",
         message:"....Wilt Chamberlain is the recored holder for most points scored in a game",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer===whowasthefirstplaytoscore100pointsCloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

          }
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(whowasthefirstplaytoscore100pointsCloze.fullText.text)
            console.log("----------------------------------------------------------------------------------------------");
          }//end 2nd question round 

        //Starts the 3rd question round    
        inquirer.prompt([
        {
         name:"question",
         message:"....is the last team that Kobe Bryant played for",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer=== whatteamdidKobelastplayforCloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

       }
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(whatteamdidKobelastplayforCloze.fullText.text)
            console.log("---------------------------------------------------------------------------------------------");
          }//end 3rd question round

          //Starts the 4th question round    
        inquirer.prompt([
        {
         name:"question",
         message:"....won the dunk contest in 2016",
         name:"answer"
        }
        ]).then(function(answers){
          if(answers.answer=== whowonthedunkcontestin2016Cloze.cloze){
            console.log("That's right! Well Done!");
            console.log("---------------------------------------------------------------------------------------------");

       }//end cloze cards
          else{
            console.log("");
            console.log("Sorry, that is incorrect...");
            console.log("");
            console.log("The correct answer is: ");
            console.log(whowonthedunkcontestin2016Cloze.fullText.text)
            console.log("---------------------------------------------------------------------------------------------");
          }//end 4th question round
        });
        });
        });
        });//End Questions
	     } //end Flash cards
      }//End Choice
     

  else {

    console.log("");
    console.log("");
    console.log("That's okay, come again when you can decide.");
    console.log("");
    console.log("");

  }

});