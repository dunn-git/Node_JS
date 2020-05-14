
function ageInDays() {
    var birthYear = prompt("What is your Age");
    var resultedAgeInDays = (2020-birthYear)*365;

    var h1 = document.createElement("h1");
    var Answer = document.createTextNode("You are "+resultedAgeInDays+" Days");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(Answer);
    document.getElementById("Resulted").appendChild(h1);

}

function reset() {
    document.getElementById("Resulted").remove();
}


function GenerateBabyYoda() {
    var img = document.createElement("IMG");
    img.setAttribute("src", "Pics/Baby Yoda.jpg");
    img.setAttribute("width", "200");
    img.setAttribute("alt", "Baby Yoda");
    document.getElementById("Baby Yoda").appendChild(img);
  }



function randomNumber() {
    return Math.floor(Math.random() * 3); 
}


var computerOptions = ["rock","paper","scissors"];
var computerChoice = computerOptions[randomNumber()];

console.log("Computer Choice ---> "+computerChoice);


function gameRPS(yourChoice) {

    var input = yourChoice;
    var id = input.id;

    
    if (id == "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Human --> Its a Draw");
                removeImages();
                rockImgH();
                resultedMessageDraw();
                rockImgC();
                break;
            case "paper":
                console.log("Human --> You have Lost");
                removeImages();
                rockImgH();
                resultedMessageLost();
                paperImgC();
                break;
            case "scissors":
                console.log("Human --> You have Won");
                removeImages();
                rockImgH();
                resultedMessageWon();
                scissorsImgC();
                break;
        }
        
    } else if (id == "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("Human --> You have Lost");
                removeImages();
                paperImgH();
                resultedMessageLost();
                rockImgC();
                break;
            case "paper":
                console.log("Human --> Its a Draw");
                removeImages();
                paperImgH();
                resultedMessageDraw();
                paperImgC();
                break;
            case "scissors":
                console.log("Human --> You have Won");
                removeImages();
                paperImgH();
                resultedMessageWon();
                scissorsImgC();
                break;
        }

    }else {
        switch (computerChoice) {
            case "rock":
                console.log("Human --> You have Lost");
                removeImages();
                scissorsImgH();
                resultedMessageLost();
                rockImgC();
                break;
            case "paper":
                console.log("Human --> You have Won");
                removeImages();
                scissorsImgH();
                resultedMessageWon();
                paperImgC();
                break;
            case "scissors":
                console.log("Human --> Its a Draw");
                removeImages();
                scissorsImgH();
                resultedMessageDraw();
                scissorsImgC();
                break;
        }
    }

}



function resultedMessageWon() {
    
    var h1 = document.createElement("h1");
    var resultedAnswer = document.createTextNode("You have Won!!");
    h1.setAttribute("id", "Won");
    h1.appendChild(resultedAnswer);
    document.getElementById("RPS").appendChild(h1);
    h1.style.color = "green";
}

function resultedMessageLost() {
    
    var h1 = document.createElement("h1");
    var resultedAnswer = document.createTextNode("You have Lost!!");
    h1.setAttribute("id", "Lost");
    h1.appendChild(resultedAnswer);
    document.getElementById("RPS").appendChild(h1);
    h1.style.color = "red";

    
}

function resultedMessageDraw() {
    
    var h1 = document.createElement("h1");
    var resultedAnswer = document.createTextNode("Its a Draw!!");
    h1.setAttribute("id", "Draw");
    h1.appendChild(resultedAnswer);
    document.getElementById("RPS").appendChild(h1);
    h1.style.color = "black";

    
}

//To remove images from RPS div
function removeImages() {
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();
}


function rockImgC() {
    var imgrockC = document.createElement("img");
    imgrockC.setAttribute('src', 'Pics/rock.jpg');
    imgrockC.setAttribute('id', 'rockC');
    imgrockC.setAttribute('alt', 'rock');
    imgrockC.setAttribute('height', '200px');
    imgrockC.setAttribute('width', '200px');
    imgrockC.style.boxShadow = "0px 10px 50px red";

    document.getElementById("RPS").appendChild(imgrockC);

    
}

function rockImgH() {
        
    var imgrockH = document.createElement("img");
    imgrockH.setAttribute('src', 'Pics/rock.jpg');
    imgrockH.setAttribute('id', 'rockH');
    imgrockH.setAttribute('alt', 'rock');
    imgrockH.setAttribute('height', '200px');
    imgrockH.setAttribute('width', '200px');
    imgrockH.style.boxShadow = "0px 10px 50px green";

    document.getElementById("RPS").appendChild(imgrockH);
        
    }



    
function paperImgH() {
        
    var paperImgH = document.createElement("img");
    paperImgH.setAttribute('src', 'Pics/paper.jpg');
    paperImgH.setAttribute('id', 'paperH');
    paperImgH.setAttribute('alt', 'paper');
    paperImgH.setAttribute('height', '200px');
    paperImgH.setAttribute('width', '200px');
    paperImgH.style.boxShadow = "0px 10px 50px green";

    document.getElementById("RPS").appendChild(paperImgH);
        
    }


function paperImgC() {
    
    var paperImgC = document.createElement("img");
    paperImgC.setAttribute('src', 'Pics/paper.jpg');
    paperImgC.setAttribute('id', 'paperC');
    paperImgC.setAttribute('alt', 'paper');
    paperImgC.setAttribute('height', '200px');
    paperImgC.setAttribute('width', '200px');
    paperImgC.style.boxShadow = "0px 10px 50px red";

    document.getElementById("RPS").appendChild(paperImgC);
        
    }

function scissorsImgH() {
    
    var scissorsImgH = document.createElement("img");
    scissorsImgH.setAttribute('src', 'Pics/scissors.jpg');
    scissorsImgH.setAttribute('id', 'scissorsH');
    scissorsImgH.setAttribute('alt', 'scissors');
    scissorsImgH.setAttribute('height', '200px');
    scissorsImgH.setAttribute('width', '200px');
    scissorsImgH.style.boxShadow = "0px 10px 50px green";

    document.getElementById("RPS").appendChild(scissorsImgH);
        
    }


function scissorsImgC() {

    var scissorsImgC = document.createElement("img");
    scissorsImgC.setAttribute('src', 'Pics/scissors.jpg');
    scissorsImgC.setAttribute('id', 'scissorsC');
    scissorsImgC.setAttribute('alt', 'scissors');
    scissorsImgC.setAttribute('height', '200px');
    scissorsImgC.setAttribute('width', '200px');
    scissorsImgC.style.boxShadow = "0px 10px 50px red";

    document.getElementById("RPS").appendChild(scissorsImgC);
        
    }


    function changeColour(selectedColour) {

        //var choosenColour = selectedColour;
        var choosenColour = selectedColour.value;
        //console.log(choosenColour);

        switch (choosenColour) {
            case "Red":
                console.log("Chnage all to Red");
                changeButtonColourToRed();
                break;
            case "Yellow":
                console.log("Chnage all to Yellow");
                changeButtonColourToYellow();
                break;
            case "Green":
                console.log("Chnage all to Green");
                changeButtonColourToGreen();
                break;
            case "Random":
                console.log("Chnage all to Random");
                changeButtonColourToRandom();
                break;
            case "Reset":
                console.log("Chnage all to Reset");
                changeButtonColourToReset();
                break;
        }
        
    }

    var allButtons = document.getElementsByTagName("button");
    console.log(allButtons);

    var copyAllButtonsss = [];
    for (let i = 0; i < allButtons.length; i++) {
        copyAllButtonsss.push(allButtons[i]);
    }
    console.log(copyAllButtonsss);

    const copyAllButtons = copyAllButtonsss;
    console.log(copyAllButtons);



    function changeButtonColourToRed() {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.value ="btn btn-danger";
        }
    }

    function changeButtonColourToGreen() {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.value ="btn btn-success";
        }
    }    

    function changeButtonColourToYellow() {
        for (let i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.value ="btn btn-warning";
        }
    }

    var randomColours = ["btn btn-primary", "btn btn-success", "btn btn-warning", "btn btn-primary", "btn btn-danger"];
    function changeButtonColourToRandom() {
        for (let i = 0; i < allButtons.length; i++) {
            var randNum = Math.floor(Math.random()*4);
            allButtons[i].classList.value = randomColours[randNum];
        }
    }
    

    function changeButtonColourToReset() {
        for (let i = 0; i < allButtons.length; i++) {
            //allButtons[i].classList["value"] = copyAllButtons[i].classList.value
            copyAllButtons[i].classList.value = allButtons[i].classList.value
        }
    }


