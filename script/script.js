function showMail(){
    document.getElementById("button__email").classList.add("d-none");
    document.getElementById("check__mail").classList.remove("d-none");
}
function checkMail(){
    const mailList = ["alessandronessi@boolean.com", "simonemadrigali@boolean.com", "alessandrolodigiani@boolean.com", "fabriziomastrobattista@boolean.com"];
    var userInput= document.getElementById("emailInput").value;
    var booleanAt=0, booleanDot=false, booleanSameString=false; //var that check if there is 1 "@" and at least 1 "."
    //loop that check char by char if the user input string is formally correct
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
        alert ("The mail format you typed is not correct");
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
            console.log(mailList[i]);
            if(booleanSameString==true){
                alert("welcome " + userInput);
            }
        }if(booleanSameString==false){
            alert("The mail you insered is not registered yet");
        }
    }
}