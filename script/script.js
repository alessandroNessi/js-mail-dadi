function showMail(){
    document.getElementById("button__email").classList.add("d-none");
    document.getElementById("check__mail").classList.remove("d-none");
}
function checkMail(){
    const mailList = ["alessandronessi@boolean.com", "samuelemadrigali@boolean.com", "alessandrolodigiani@boolean.com", "fabriziomastrobattista@boolean.com"];
    var userInput= document.getElementById("emailInput").value;
    var booleanAt=0, booleanDot=false, booleanSameString=false; //var that check if there is 1 "@" and at least 1 "."
    //loop that check char by char if the user input string is formally correct
    document.getElementById("emailInput").style.color = ("black");
    for(var i=0; i<userInput.length; i++){
        if(userInput[i]=="@"){
            booleanAt++;
        }else if(userInput[i]=="."){
            booleanDot=true;
        }
    }
    //end loop
    //if the user input is wrong
    if(!booleanDot || booleanAt == 0 || booleanAt > 1){
        document.getElementById("emailInput").value="Email is not correct";
        document.getElementById("emailInput").style.color = ("red");
    //i say that the email is not correct else
    }else{
        //i check into the email array if the user email is already registered
        for(i=0; i<mailList.length && booleanSameString==false; i++){
            //i first check the length of the two string to save some useless loops
            if(mailList[i].length == userInput.length ){
                //if the length is the same i check char by char if it is correct
                // if(mailList[i].localeCompare(userInput)==0){ alert("welcome " + userInput); }
                booleanSameString=true;
                for( var t=0; t< userInput.length && booleanSameString==true ; t++){
                    if(userInput[t] != mailList[i][t]){
                        booleanSameString=false;
                    }
                }
            }
            console.log(mailList[i], booleanSameString);
        }
        if(booleanSameString==true){
            document.getElementById("check__mail").classList.add("d-none");
            document.getElementById("userLogged").classList.remove("d-none");
            document.getElementById("userLogged").getElementsByTagName("h2")[0].innerHTML= "Welcome " + userInput;
            document.getElementById("diceForm").classList.remove("d-none");
        }else {
            document.getElementById("emailInput").value="Email is not registered";
            document.getElementById("emailInput").style.color = ("red");
        }
    }
}
function dicePlay(){
    var userDice= parseInt(document.getElementById("userDice").value);
    if(userDice>0 && userDice<7){
        var computerDice= parseInt(Math.random()*6 +1);
        var parity = document.getElementsByName("parity");
        //get the radiobutton parity
        parity=getRadioValue(parity);
        document.getElementById("computerDice").value= computerDice;
        document.getElementById("diceForm").getElementsByClassName("dice__results")[0].classList.remove("d-none");
        if((userDice+computerDice)%2==0){
            if(parity=="pair"){
                document.getElementsByClassName("dice__result--text")[0].innerHTML="YOU WON!";
            }else{
                document.getElementsByClassName("dice__result--text")[0].innerHTML="YOU LOST!";
            }
        }else if(parity=="even"){
            document.getElementsByClassName("dice__result--text")[0].innerHTML="YOU WON!";
        }else{
            document.getElementsByClassName("dice__result--text")[0].innerHTML="YOU LOST!";
        }
    }else{
        alert("the number you insered isn't correct");
    }
}
//function to get the value of the radiobutton
function getRadioValue( radio){
    for(var i=0; i<radio.length; i++){
        if(radio[i].checked){
            return radio[i].value;
        }
    }
}